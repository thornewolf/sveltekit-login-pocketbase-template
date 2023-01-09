export const load = ({ locals }: { locals: App.Locals }) => {
    if (locals.user) {
        return {
            user: locals.user
        }
    }

    return {
        user: undefined
    }
}