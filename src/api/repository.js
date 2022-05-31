import api from './api.js'

export default

    //////////////////////////////////////////
    // autenticated
    //////////////////////////////////////////

    {
    createSession(){
        return api.get('/sanctum/csrf-cookie');
    },
    login(params){
        return api.post('/login', params);
    },
    register(params){
        return api.post('/register', params);
    },
    Logout(){
        return api.post('/logout');
    },
    get_user() {
        return api.get('api/users/profile');
    },

    //////////////////////////////////////////
    // roles y Permissions
    //////////////////////////////////////////

    get_all_roles() {
        return api.get('api/roles');
    },
    get_permissions(id) {
        return api.get(`api/roles/${id}/permissions`);
    },
    set_role(params){
        return api.post('api/roles', params);
    },
    set_permissions(id, params){
        return api.put(`api/roles/${id}/permissions`, params);
    },
    delete_role(id){
        return api.delete(`api/roles/${id}`);
    },
    my_permissions() {
        return api.get('api/roles/mypermissions');
    },

    //////////////////////////////////////////
    // mascotas
    //////////////////////////////////////////

    get_all_mascotas() {
        return api.get('api/mascotas');
    },
    set_mascota(params){
        return api.post('api/mascotas', params);
    },
    get_mascota(id){
        return api.get(`api/mascotas/${id}/edit`);
    },
    update_mascota(params){
        return api.put(`api/mascotas/${params.id}`, params);
    },
    delete_mascota(id) {
        return api.delete(`api/mascotas/${id}`);
    }
    
}