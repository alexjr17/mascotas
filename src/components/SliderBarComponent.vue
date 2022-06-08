<template>
    <nav v-if="show" class="px-3 py-2 h-full bg-slate-400 w-auto">
        <h2 class="pb-8">DASHBOARD</h2>
        <ul v-for="item in items" :key="item" class="grid gap-y-2">    
            <router-link :to="{name: item.route}" class="px-5 py-2 bg-gray-600 rounded-md" v-if="ability.can(`${item.can}`, `${item.route}`)">
                {{item.titulo}}
                <!-- <ul v-if="item.subroute != ''">
                    <ul v-for="item in item.subroute" :key="item" class="grid gap-y-2">  
                        <router-link :to="{name: item.route}" class="px-5 py-2 bg-gray-600 rounded-md">
                            {{item.titulo}}
                        </router-link>
                    </ul>
                </ul> -->
            </router-link>
        </ul>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
           
        }
    },
    computed: {
        ...mapGetters({
            ability: 'ability'
        })
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        show: {
            type: Boolean,
            required: true
        }
    }
}
</script>