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
            // @ts-expect-error
            if (err.data.code == 400) {
                return {
                    error: true,
                    message: "Invalid Email / Account already exists. Please correct and try again."
                };
            }
            return {
                error: true,
                message: "An unknown error occurred. Please try again."
            };
        }
        throw redirect(303, '/');
    }
};