import PocketBase from 'pocketbase';
import type { Handle } from '@sveltejs/kit';
import { serializeNonPojos } from './lib/utils';
import { env } from '$env/dynamic/private';


export const handle = (async ({ event, resolve }) => {
    event.locals.pb = new PocketBase(env.POCKETBASE_SERVER);
    // load the store data from the request cookie string
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        if (event.locals.pb.authStore.isValid) {
            await event.locals.pb.collection('users').authRefresh();
            event.locals.user = serializeNonPojos(event.locals.pb.authStore.model);
        } else {
            event.locals.user = undefined;
        }
    } catch (_) {
        // clear the auth store on failed refresh
        event.locals.pb.authStore.clear();
    }

    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

    return response;
}) satisfies Handle;