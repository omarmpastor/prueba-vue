<template>
    <span>
        <span v-on:click="onClick">
            <i v-if="isActive" class="fas fa-star"></i>
            <i v-else class="far fa-star"></i>
        </span>
    </span>
</template>

<script>
export default {
    name: 'PruStar',
    props: {
        isActive: {
            type: Boolean
        }
    },
    methods: {
        onClick() {
            this.$emit('starIsActive', !this.isActive)
        }
    }
}
</script>

<style>

</style>
