<template>
    <div class="grid">
        <PruPlayer class="player" v-for="(player, index) in players" v-bind:player="player" v-bind:key="index" />
    </div>
</template>

<script>
import PruPlayer from './PruPlayer.vue'

export default {
    name: 'PruBookmarks',
    data: function() {
        return {
            players: []
        };
    },
    components: {
        PruPlayer
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style>

</style>
