<template>
    <div>
        <form-component @onSubmit="submitCreate">
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
                    value="Guardar"
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
            mascota: {
                name: '',
                spacies: '',
                race: '',
                vaccines: '',
                rides: ''
            }
        }
    },
    methods: {
        async submitCreate() {
            try {
                const res = await this.$store.dispatch('set_mascota', this.mascota);
                alert('se guardo el registro');
                console.log(res);
                await this.$router.push({name: 'mascotas-edit', params: { id: res.id }});
            } catch (error) {
                console.log(error);
            }
            
        }
    }
}
</script>