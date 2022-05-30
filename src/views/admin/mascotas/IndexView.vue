<template>
    <div class="" v-if="permissions.index">
        <router-link :to="{name: 'mascotas-create'}" v-if="permissions.create">
            <button-component 
                value="Nueva mascota"/>
        </router-link>
        <!-- <div v-if="mascotas">{{mascotas.length}}</div> -->
        <table class="flex-block justify-center">
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
            <tbody v-if="mascotas">                
                <tr v-for="mascota in mascotas.data" :key="mascota">
                    <td>{{ mascota.id }}</td>
                    <td>{{ mascota.name }}</td>
                    <td>{{ mascota.spacies }}</td>
                    <td>{{ mascota.race }}</td>
                    <td>{{ mascota.vaccines }}</td>
                    <td>{{ mascota.rides }}</td>
                    <td>
                        <div>
                            <router-link v-if="permissions.update" :to="{name: 'mascotas-edit', params:  {id: mascota.id }}">
                                <button-component 
                                    value="Editar"/>
                            </router-link>
                            <a v-if="permissions.delete" href="#" @click="destroy(mascota.id)"> | Delete</a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        {{permissions}}
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import { mapGetters } from 'vuex';
import ability from '../../../ability/ability';
export default {
    components:{
        ButtonComponent
    },
    data() {
        return {
            permissions: {
                index: ability.can('listar mascotas', 'mascotas.index'),
                create: ability.can('create mascotas', 'mascotas.create'),
                update: ability.can('editar mascotas', 'mascotas.edit'),
                delete: ability.can('delete mascotas', 'mascotas.destroy'),
            }
        }
    },
    beforeMount () {
        this.$store.dispatch('get_all_mascotas');
    },
    computed: {
        ...mapGetters({
            mascotas: 'mascotas'
        })
    },
    methods: {
        async destroy(id) {
            try {
                const res = await this.$store.dispatch('delete_mascota', id);
                alert('se elimino con exito');
                console.log(res);
                await this.$store.dispatch('get_all_mascotas');
            } catch (error) {
                console.log(error);
            }
            
        }
    }
}
</script>