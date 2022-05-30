<template>
    <nav class="static">
        <!-- <div @mouseover="mouseon" class="bg-banner-nav h-72"
            :class="{'blur-sm': over}">

        </div> -->
        <div class="fixed top-2 left-0 w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between z-20 blur-none">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">                    
                    <!-- Mobile menu button-->
                    <button @click="menuMobil = !menuMobil" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>                    
                    </button>                    
                </div>

                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex flex-nowrap space-x-1">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <router-link :to="{name: `${item}`}" v-for="item in items" :key="item" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                                {{item}}
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <router-link :to="{name: 'Login'}" class="text-white px-3 py-2 rounded-md text-sm font-medium">Login</router-link>
                    <!-- Profile dropdown -->
                    <div class="ml-3 relative" v-if="auth">
                        <div>
                            <button @click="drop = !drop" type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span class="sr-only">Open user menu</span>
                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            </button>
                        </div>
                        
                        <div v-if="drop" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div v-if="menuMobil" class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-10 pb-3 space-y-1">
                <router-link :to="{name: `${item}`}" v-for="item in items" :key="item" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
                    {{item}}
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        login: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data(){
        return {
            drop: false,
            menuMobil : false,
            over: false,
            authUser: false
        }
    },
    // computed: {
    //     auth(){
    //         return this.authUser;
    //     }
    // },
    // methods: {
    //     mousein(){
    //         this.over = !this.over;
    //     },
    //     mouseon(){
    //         this.over = false;
    //     }
    // }
}
</script>