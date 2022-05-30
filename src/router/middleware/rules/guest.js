import store from "@/store";

export default async (to, from, next) => {    

    await store.dispatch('get_user');

    await store.dispatch('get_all_roles');

    if (store.getters['authenticated'] /*&& store.getters['permissions']*/) {
        next();
    } else {
        next({name: 'Login'});
    }
}