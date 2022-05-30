<template>
    <CardAuth>
        <form-component @onSubmit="submit()">
            <template #form>
                <div>
                    <label-component 
                        value="Nombre"/>
                    <input-component 
                        v-model="user.name"/>
                </div>
                <div>
                    <label-component 
                        value="Correo"/>
                    <input-component 
                        v-model="user.email"/>
                </div>
                <div>
                    <label-component 
                        value="Password"/>
                    <input-component 
                        v-model="user.password"/>
                </div>
                <div>
                    <label-component 
                        value="Confirmar password"/>
                    <input-component 
                        v-model="user.password_confirmation"/>
                </div>
                <div class="pt-4 flex justify-between">
                    <button-component
                        type="submit">
                        enviar</button-component>
                    <router-link to='/Login'>
                        <a href="#" class="text-blue-500 mr-3 hover:underline">Login</a>
                    </router-link>
                </div>
            </template>
            
        </form-component>
    </CardAuth>
</template>

<script>
import FormComponent from '../../components/FormComponent.vue'
import InputComponent from '../../components/forms/InputComponent.vue'
import LabelComponent from '../../components/forms/LabelComponent.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import CardAuth from './HeaderAuth.vue'
export default {
    components: {
       FormComponent,
       InputComponent,
       LabelComponent,
       ButtonComponent,
       CardAuth
    },
    data () {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        async submit(){
            try {
                console.log(this.user);
                await this.$store.dispatch('register', this.user);
                this.$router.push({ name: 'Dashboard'});
            } catch (error) {
                // console.log(error);
            }         
        }
    }
}
</script>