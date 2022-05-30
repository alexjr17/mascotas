import store from "@/store";

export default async (to, from, next) => {

    await store.dispatch('get_user');

    if (store.getters['authenticated']) {
        next({name: 'Dashboard'});
    } else {
        next();
    }
}