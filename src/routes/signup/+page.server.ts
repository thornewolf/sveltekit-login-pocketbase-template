import { redirect, type Actions } from '@sveltejs/kit';
export const load = ({ locals }: { locals: App.Locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/');
    }
};
export const actions: Actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);
        let email = data.email;
        let password = data.password;

        let payload = { email: email, password: password, passwordConfirm: password, emailVisibility: false }
        try {
            const { token, user } = await locals.pb.collection('users').create(payload);
        } catch (err) {
            console.log('Error:', err);
            return {
                error: true,
                payload: payload
            };
        }
        throw redirect(303, '/');
    }
};