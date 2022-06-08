<template>
    <div class="" v-if="mascotas">
        <router-link :to="{name: 'mascotas.create'}" v-if="ability.can('create mascotas', 'mascotas.create')">
            <button-component 
                value="Nueva mascota"/>
        </router-link>
        <table class="flex-block justify-center" v-if="ability.can('ver mascotas', 'mascotas.index')">
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
                            <router-link :to="{name: 'mascotas.edit', params:  {id: mascota.id }}" v-if="ability.can('editar mascotas', 'mascotas.edit')">
                                <button-component 
                                    value="Editar"/>
                            </router-link>
                            <a href="#" @click="destroy(mascota.id)" v-if="ability.can('delete mascotas', 'mascotas.destroy')"> | Delete</a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import { mapGetters } from 'vuex';
export default {
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
        ...mapGetters({
            ability: 'ability'
        })
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