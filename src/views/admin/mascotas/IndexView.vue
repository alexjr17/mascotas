<template>
    <div class="" v-if="mascotas">
        <router-link :to="{name: 'mascotas.create'}" v-if="permission_create">
            <button-component 
                value="Nueva mascota"/>
        </router-link>
        <table class="flex-block justify-center" v-if="permission_index">
            <thead>
                <tr>
                    <th>N</th>
                    <th>Nombre</th>
                    <th>Especie</th>
                    <th>Raza</th>
                    <th>vacunas</th>
                    <th>paseos</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>                
                <tr v-for="mascota in mascotas.data" :key="mascota">
                    <td>{{ mascota.id }}</td>
                    <td>{{ mascota.name }}</td>
                    <td>{{ mascota.spacies }}</td>
                    <td>{{ mascota.race }}</td>
                    <td>{{ mascota.vaccines }}</td>
                    <td>{{ mascota.rides }}</td>
                    <td>
                        <div>
                            <router-link v-if="permission_update" :to="{name: 'mascotas.edit', params:  {id: mascota.id }}">
                                <button-component 
                                    value="Editar"/>
                            </router-link>
                            <a v-if="permission_destroy" href="#" @click="destroy(mascota.id)"> | Delete</a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import ability from '../../../ability/ability';
export default {
    // inject:{
    //     ability: { from: ability}
    // },
    components:{
        ButtonComponent
    },
    created() {
        this.get_mascotas();
    },
    data() {
        return {
            mascotas: '',
            user: {id: 1}
        }
    },    
    computed: {
        permission_index()  { return ability(this.user).can('listar mascotas', 'mascotas.index')},
        permission_create()  { return ability(this.user).can('create mascotas', 'mascotas.create')},
        permission_update()  { return ability(this.user).can('editar mascotas', 'mascotas.edit')},
        permission_destroy()  { return ability(this.user).can('delete mascotas', 'mascotas.destroy')}    
    },
    methods: {
        async get_mascotas() {
            let res = await this.$store.dispatch('get_all_mascotas');
            this.mascotas = res;
            await this.$store.dispatch('my_permissions');
        },
        async destroy(id) {
            try {
                await this.$store.dispatch('delete_mascota', id);
                alert('se elimino con exito');
                // console.log(res);
                this.get_mascotas();
            } catch (error) {
                console.log(error);
            }
            
        }
    }
}
</script>