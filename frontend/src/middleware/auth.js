export default function auth({ next, store }) {
    if (store.getters.isLogged === false) {
        return next({ name: 'Login' })
    }
    return next()
}