<template>
    <div class="flex flex-row">
        <div class="max-h-screen">
            <slider-bar-component :show="show" :items="item"></slider-bar-component>
        </div> 
        <div class="w-full">
            <nav-dashboard 
                :name_user="name" 
                @sliderbar="bar"
            />
            <main-admin></main-admin>
        </div>        
    </div>
     {{permissions}}
</template>

<script>
import NavDashboard from '../../components/NavDashboardComponent.vue'
import MainAdmin from '../../layouts/panelAdmin/MainAdmin.vue'
import SliderBarComponent from '@/components/SliderBarComponent.vue';
import { mapGetters } from "vuex";
import navItems from "./NavItems.js"
export default {
    components: {
        NavDashboard,
        MainAdmin,
        SliderBarComponent
    },
    data() {
        return {
            show: false,
            item: navItems
        }
    },
    computed:{
        ...mapGetters({
            name: 'user'
        })
    },
    methods: {
        bar(payload) {
            this.show = payload;
        }
    }
}
</script>