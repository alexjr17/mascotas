import repository from "@/api/repository";
import { createStore } from "vuex";

const store = createStore({
    modules: {
        auth: {
            state(){
                return {
                    user: null,
                    roles: null,
                    permissions: null
                }
            },
            getters: {
                user (state) {
                    return state.user;
                },
                authenticated (state) {
                    return state.user !== null
                },
                roles(state) {
                    return state.roles
                },
                permissions (state) {
                    return state.permissions;
                }
            },
            mutations:{
                SET_USER(state, payload){
                    state.user = payload
                },
                SET_ROLES(state, payload) {
                    state.roles = payload;
                },
                SET_PERMISSIONS(state, payload) {
                    state.permissions = payload;
                }
            },
            actions:{
                async login({ dispatch }, user) {

                    await repository.createSession();
                    await repository.login(user);
                    await dispatch('get_user');
                    
                },
                async logout({ dispatch }) {
                    await repository.Logout();
                    await dispatch('get_user');
                },
                async register({ dispatch }, user) {

                    await repository.createSession();
                    await repository.register(user);
                    await dispatch('get_user');

                },
                async get_user({ commit }) {

                    await repository.get_user().then( res => {
                        commit('SET_USER', res.data);
                        // console.log(res.data);
                    }).catch( () => {
                        commit('SET_USER', null);
                    });
                },
                async get_all_roles({ commit }){
                    const {data} = await repository.get_all_roles();
                    console.log(data);
                    commit('SET_ROLES', data.roles);
                    commit('SET_PERMISSIONS', data.permissions);
                }
            }
        },
        mascotas: {
            state(){
                return {
                    mascotas: null,
                }
            },
            getters: {
                mascotas(state) {
                    return state.mascotas;
                }
            },
            mutations: {
                SET_MASCOTA(state, mascota){
                    state.mascotas = mascota;
                }
            },
            actions: {
                async get_all_mascotas({ commit }) {
                    await repository.get_all_mascotas().then(res => {
                        commit('SET_MASCOTA', res.data);
                        console.log(res.data);
                    });
                },
                async set_mascota({commit}, mascota){
                    commit;
                    const {data} = await repository.set_mascota(mascota);
                    // console.log(data);
                    return data;
                },
                async get_mascota({commit}, id){
                    commit;
                    const {data} = await repository.get_mascota(id);
                    // console.log(data);
                    return data;                    
                },
                async update_mascota({commit}, mascota){
                    commit;
                    const {data} = await repository.update_mascota(mascota);
                    // console.log(data);
                    return data;
                },
                async delete_mascota({ commit }, id) {
                    commit;
                    const {data} = await repository.delete_mascota(id);
                    // console.log(data);
                    return data;
                }
            }
        },
        roles: {
            state() {
                return {
                    mypermissions: null
                }
            },
            getters: {
                mypermissions(state) {
                    return state.mypermissions
                }
            },
            mutations: {
                SET_MY_PERMISSIONS(state, payload){
                    return state.mypermissions = payload;
                }
            },
            actions: {
                async get_permissions({commit}, id) {
                    const {data} = await repository.get_permissions(id);
                    commit('SET_MY_PERMISSIONS', data);
                    return data;
                },
                async set_role(_, params){
                    const {data} = await repository.set_role(params);
                    console.log(data);
                    return data;
                },
                async set_permissions(_, {id, permissions}){
                    const {data} = await repository.set_permissions(id, permissions);
                    return data;
                },
                async delete_role({ dispatch }, id){
                    const {data} = await repository.delete_role(id);
                    console.log(data);
                    dispatch('get_all_roles');
                    return data;
                }
            }
        }
      }
    
});

export default store;
