import store from "@/store";

export default async (to, from, next) => {    

    await store.dispatch('get_user');

    await store.dispatch('my_permissions');
    // alert(JSON.stringify(res));

    if (store.getters['authenticated']) {
        next();
    } else {
        next({name: 'Login'});
    }
}