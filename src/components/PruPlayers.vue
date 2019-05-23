<template>
    <div class="grid-x">
        <PruPlayer class="player" v-for="(player, index) in players" v-bind:player="player" v-bind:key="index" />
    </div>
</template>

<script>
import PruPlayer from './PruPlayer.vue'

export default {
    name: 'PruPlayers',
    data: function() {
        return {
            players: []
        };
    },
    components: {
        PruPlayer
    },
    mounted() {
        this.loadPlayers();
    },
    methods: {
        loadPlayers() {
            const url = `jugadores.json`;
            fetch(url)
            .then(res => res.json())
            .then(res => {
                this.players = res;
            })
        }
    }
}
</script>

<style>
    .player {
        margin-right: .5rem;
    }
</style>
