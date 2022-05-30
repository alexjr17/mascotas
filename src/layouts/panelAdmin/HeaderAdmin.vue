<template>
    <nav-dashboard :name_user="name"></nav-dashboard>
</template>

<script>
import NavDashboard from '../../components/NavDashboardComponent.vue'
import { mapGetters } from "vuex";
export default {
    components: {
        NavDashboard
    },
    computed:{
    ...mapGetters({
      name: 'user',
    })
  }
}
</script>