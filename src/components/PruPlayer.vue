<template>
    <div class="card">
        <div class="card-divider">
            {{ player.number }}
            <PruStar class="pru-star" :isActive="isBookmark" v-on:starIsActive="onBookmark" />
        </div>
        <div class="card-section">
            <h4>{{ player.name }}</h4>
        </div>
    </div>
</template>

<script>
import PruStar from './PruStar.vue';

export default {
    name: 'PruPlayer',
    data: function() {
        return {
            isBookmark: false
        }
    },
    props: ['player'],
    components: {
        PruStar
    },
    methods: {
        onBookmark(isActive) {
            this.isBookmark = isActive
        }
    }
}
</script>

<style>
    .card {
        width: 200px;
    }

    .pru-star {
        margin-left: auto;
    }
</style>
