<template>
  <div>
    <!-- {{authenticated}}
    {{user}} -->
    <!-- <header-layout :name="name"></header-layout> -->
    <main-layout></main-layout>
    <div class="flex justify-center items-center h-screen">
      <router-link :to="{name: 'Login'}">
        <button-component
          value="Login"/>
      </router-link>
    </div>
  </div>
</template>

<script>
// import HeaderLayout from './layouts/HeaderLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import { mapGetters } from 'vuex'
import ButtonComponent from './components/ButtonComponent.vue'

export default {
  components: {
    // HeaderLayout,
    MainLayout,
    ButtonComponent
  },
  mounted () {
    // this.$router.push({name: 'Login'})
  },
  // beforeCreate: function(){
  //     this.$store.dispatch('get_user');
  //     console.log('get user');
  // },
  computed:{
    ...mapGetters({
      authenticated: 'authenticated',
      user: 'user',
    })
  }
}
</script>
