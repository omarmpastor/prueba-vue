<template>
    <div class="grid">
        <PruPlayer class="player" v-for="(player, index) in listBookmarks" v-bind:player="player" v-bind:key="index" />
    </div>
</template>

<script>
import PruPlayer from './PruPlayer.vue'
import { mapGetters } from 'vuex'

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
    },
    computed: {
     ...mapGetters({
       listBookmarks: 'bookmarks'
     })
   }
}
</script>

<style>

</style>
