<template>
    <div class="w-full">
        <div class="mt-2 w-auto">
            <form @submit.prevent="$emit('onSubmit')" class="w-full">
                <div class="bg-white w-full">
                    <slot name="form" />
                </div>
                <div v-if="hasActions" class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
                    <slot name="actions" />
                </div>
            </form>
        </div>
    </div>
</template>
<script>

export default {
    emits:['onSubmit'],
    computed: {
        hasActions(){
            return !! this.$slots.actions;
        }
    }
}
</script>