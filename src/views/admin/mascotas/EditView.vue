<template>
    <div>
        <form-component @onSubmit="submitUpdate">
            <template #form>
                <div>
                    <label-component value="Nombre"/>
                    <input-component 
                        v-model="mascota.name"
                    />
                </div>
                <div>
                    <label-component value="Especie"/>
                    <input-component 
                        v-model="mascota.spacies"
                    />
                    {{mascota.specie}}
                </div>
                <div>
                    <label-component value="Raza"/>
                    <input-component 
                        v-model="mascota.race"
                    />
                </div>
                <div>
                    <label-component value="Vacunas"/>
                    <input-component 
                        v-model="mascota.vaccines"
                    />
                </div>
                <div>
                    <label-component value="Paseos"/>
                    <input-component 
                        v-model="mascota.rides"
                    />
                </div>
            </template>
            <template #actions>
                <button-component 
                    value="Actualizar"
                    type="submit" />
            </template>
        </form-component>
    </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue'
import LabelComponent from '@/components/forms/LabelComponent.vue'
import InputComponent from '@/components/forms/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
    components: {
        FormComponent,
        LabelComponent,
        InputComponent,
        ButtonComponent
    },
    data() {
        return {
            mascota: ''
        }
    },
    
    async mounted() {
        try {
            const res = await this.$store.dispatch('get_mascota', this.$route.params['id']);
            console.log(res);
            this.mascota = res;
        } catch (error) {
            console.log(error);
        }        
    },
    methods: {
        async submitUpdate() {
            try {
                const res = await this.$store.dispatch('update_mascota', this.mascota);
                alert('registro actualizado con exito');
                console.log(res);
                await this.$router.push({name: 'mascotas-index'});
            } catch (error) {
                console.log(error);
            }
        }

    }
}
</script>