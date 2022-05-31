<template>
    <div>
        <form-component @onSubmit="onSubmit()">
            <template #form >
                <div>
                    <label-component 
                        value="Rol"/>
                    <input-component 
                        v-model="rol.name"/>
                </div>
                <div>
                    <button-component
                        type="submit"
                        value="Generar rol">                        
                    </button-component>
                </div>
            </template>
        </form-component>
        <div v-if="rol.id">
            <permissions-component                 
                :checked="checked"
                @allchecked="callChecked"/>
            {{checked}}
        </div>
        
    </div>
</template>
<script>
import FormComponent from '@/components/FormComponent.vue'
import InputComponent from '@/components/forms/InputComponent.vue'
import LabelComponent from '@/components/forms/LabelComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import PermissionsComponent from '@/components/PermissionsComponent.vue'
export default {
    components:{
        FormComponent,
        InputComponent,
        LabelComponent,
        ButtonComponent,
        PermissionsComponent
    },
    data () {
        return {
            rol:{
                id: '',
                name: ''
            }
        }
    },
    methods:{
        async onSubmit() {
            try {
                let res = await this.$store.dispatch('set_role', this.rol);
                alert(`se creo rol, res:${res}`);
                this.rol = res;
            } catch (error) {
                console.log(error);
            }
        },
        async callChecked(payload){
            try {
                let res = await this.$store.dispatch('set_permissions', {id: this.rol.id, permissions: payload});
                alert(`se asigno permisos al rol, res:${res}`);
                this.$router.push({name: 'roles.index', params: {id: this.rol.id}});
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>