<template>
    <div >
        <div class="flex">
            <select v-model="seleted">
                <option value="" disabled>Selecione el rol</option>
                <option v-for="role in roles" :key="role" :value="role.id" @click="permission(role)">{{role.name}}</option>
            </select>
            <router-link :to="{name: 'roles.create'}">
                <button-component 
                value="Crear Rol"/>
            </router-link>            
        </div>
        <div v-if="checkedpermissions.length != 0">
            <permissions-component 
                :check="checked" 
                @allchecked="allchecked"/>
        </div>
        <button-component 
            value="Eliminar Rol"
            @click="deletee()" />
    </div>
    <!-- {{mypermissions}} -->
</template>

<script>
import PermissionsComponent from '@/components/PermissionsComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { mapGetters } from 'vuex';
export default {
    components:{
        PermissionsComponent,
        ButtonComponent
    },
    data () {
        return {
            checkedpermissions: [],
            role: {
                id: ''
            }
        }
    },    
    async created() {
        await this.$store.dispatch('get_all_roles');
    },
    computed: {
        ...mapGetters({
            roles: 'roles',
            mypermissions: 'mypermissions'
        }),
        checked() {
            return this.checkedpermissions;
        }
    },
    methods:{
        async permission(role){
            this.role = role;
            this.checkedpermissions.length = 0;
            try {
                let res = await this.$store.dispatch('get_permissions', this.role.id);
                for (let index = 0; index < res.length; index++) {
                    this.checkedpermissions.push(res[index]['id']);
                }
            } catch (error) {
                console.log(error);
            }  
        },
        async allchecked(payload){
            try {
                let res = await this.$store.dispatch('set_permissions', {id: this.role.id, permissions: payload});
                alert(`se sincronizaron nuevos permisos, res:${res}`);
            } catch (error) {
                console.log(error);
            }
            this.permission(this.role);
        },
        async deletee(){
            try{
                let res = await this.$store.dispatch('delete_role', this.role.id);
                alert(`se elimino, res:${res}`);
                this.permission([]);
            }catch (err) {
                console.log(err);
            }
        }
    }
}
</script>