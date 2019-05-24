<template>
    <div class="card">
        <div class="card-divider">
            {{ player.number }}
            <PruStar class="pru-star" :isActive="isSelected(player.number)" v-on:starIsActive="onBookmark" />
        </div>
        <div class="card-section">
            <h4>{{ player.name }}</h4>
        </div>
    </div>
</template>

<script>
  import PruStar from './PruStar.vue';
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'PruPlayer',
    data: function () {
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
        this.modifyBookmark({
          number: this.player.number,
          name: this.player.name
        })
      },
      ...mapActions({
        modifyBookmark: 'modify'
      })
    },
    computed: {
      isBookmarked() {
        return this.isSelected(this.player.number)
      },
      ...mapGetters([
        'isSelected'
      ])
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
