<template>
    <CardAuth>        
        <form-component @onSubmit="submit()">
            <template #form>
                <div>
                    <label-component 
                        value="Email"/>
                    <input-component 
                        v-model="user.email"/>
                    <small class="text-red-500" v-if="err.email">{{err.email}}</small>
                </div>

                <div>
                    <label-component 
                        value="Contraseña"/>
                    <input-component 
                        type="password"
                        v-model="user.password"/>
                    <small class="text-red-500" v-if="err.password">{{err.password}}</small>
                </div>

                <div class="pt-4 flex justify-between">
                    <button-component
                        id="submit"
                        type="submit">
                        enviar</button-component>
                    <router-link to='/Register'>
                        <a href="#" class="text-blue-500 mr-3 hover:underline">Registrarse</a>
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
    mounted () {
        
    },
    data () {
        return {
            user: {
                email: '',
                password: ''
            },
            err: {
                email: '',
                password: '',
                otro: ''
            }
        }
    },
    methods: {
        async submit(){
            try {
                // document.getElementById('submit').
                await this.$store.dispatch('login', this.user);
                // await console.log('Bienvenido '+ this.$store.getters.user);
                this.$router.push({ name: 'Dashboard'});                
            } catch (err) {
                // console.log(err.response.data);
                if(err.response.data.errors.email){
                    this.err.email = err.response.data.errors.email[0];
                }else {
                    this.err.email = '';
                } 
                if(err.response.data.errors.password){
                    this.err.password = err.response.data.errors.password[0];
                }else {
                    this.err.password = '';
                }       
            } finally {
                console.log('fin trycatch');
            }
        },        
    }
}
</script>
