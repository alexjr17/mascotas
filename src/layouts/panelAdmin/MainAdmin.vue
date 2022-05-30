<template>
    <main class="flex justify-center">
        <div>
            <router-view name="dashboard-index"></router-view>
            <router-view></router-view>
        </div>  
    </main>
</template>

<script>
export default {
    props: {
        permissions: {
            type: Array
        }
    },
    data () {
        return {
            user: {
                name: ''
            }
        }
    }    
}
</script>