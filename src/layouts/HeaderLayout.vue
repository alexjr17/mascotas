<template>
    <div>
        <nav-component
         :items="['Dashboard']"
         :login="true">
        </nav-component>
    </div>
</template>

<script>
import NavComponent from '../components/NavComponent.vue'

export default {
    components: {
        NavComponent
    }
}
</script>