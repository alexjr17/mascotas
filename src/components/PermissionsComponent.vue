<template>        
    <div  v-for="permission in permissions" :key="permission">
        <input type="checkbox" :id="permission.id" :value="permission.id" v-model="checks">
        <label for="permissions.name">{{permission.description}}</label>
        {{permission.id}}
    </div>
    {{checks}}
    <button-component 
        @click="allchecked()"
        value="Asignar permiso"/>
</template>
<script>
import { mapGetters } from 'vuex';
import ButtonComponent from './ButtonComponent.vue';
export default {
    components: {
        ButtonComponent
    },
    data() {
        return {
            checks: this.myPermissions()
        }        
    },
    props: {
        check: {
            type: Array,
            required: false
        }
    },
    computed: {
        ...mapGetters({
            permissions: 'permissions',
        })
    },
    methods: {
        allchecked() {
            this.$emit("allchecked", this.checks);
            // this.checks.length = 0;
        },
        myPermissions() {
            if(this.check){
                return [].concat(this.check);
            }
            return [];
        }
    }
}
</script>