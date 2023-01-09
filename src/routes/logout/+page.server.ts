import { redirect, type Actions, fail } from '@sveltejs/kit';
export const load = ({ locals }: { locals: App.Locals }) => {
    locals.pb.authStore.clear()
    locals.user = undefined

    throw redirect(307, '/login');
};