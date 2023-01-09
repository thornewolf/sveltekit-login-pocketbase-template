import { redirect, type Actions, fail } from '@sveltejs/kit';

export const load = ({ locals }: { locals: App.Locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/');
    }
};

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const data = Object.fromEntries(await request.formData());

        let email = data.email.toString();
        let password = data.password.toString();

        if (!email) {
            return fail(400, { missing: true, email });
        }

        try {
            await locals.pb.collection('users').authWithPassword(email, password);
        } catch (err) {
            return fail(400, { incorrect: true, email });
        }
        throw redirect(303, '/');
    }
};