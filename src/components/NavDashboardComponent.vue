<template>
    <div class="max-h-full">
        <nav class="bg-blue-400 rounded-r-md">
            <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-12">
                    <!-- items -->
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="-mr-2 flex">
                                <!-- Mobile menu button -->
                                <button @click="navSlider()" type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span class="sr-only">Open main menu</span>
                                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Profile dropdown -->
                    <div class="ml-3 relative">
                        <div class="flex flex-row space-x-4 items-center">
                            <h1>{{name_user}}</h1>
                            <button @click="proFile()" type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            
                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            </button>
                        </div>
                        
                        <div v-if="showFile" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <a href="#" @click="logout()" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false,
            showFile: false
        }
    },
    props: {
        name_user: {
            type: String,
            required: false,
            default: 'profile'
        }
    },
    methods: {
        navSlider() {
            this.show = !this.show;
            this.$emit('sliderbar', this.show);
        },
        proFile() {
            this.showFile = !this.showFile;
        },
        async logout () {
            try {
                await this.$store.dispatch('logout');
                await this.$router.push({ name: 'Login' });
            } catch (error) {
                 // console.log(error);
            } finally {
                // console.log('Logueado');
            }
            
        }
    },
    
    // computed: {
    //     shownav(){
    //         return this.show;
    //     }

    // }
}
</script>