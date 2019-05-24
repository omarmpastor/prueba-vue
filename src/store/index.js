import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  bookmarks: JSON.parse(localStorage.getItem('prueba')) || []
}

const getters = {
  bookmarks: state => state.bookmarks,
  isSelected: state =>
    number => state.bookmarks.some(bookmark => bookmark.number === number)
}

const mutations = {
  EDIT_BOOKMARKS(state, { bookmark }) {
    if (state.bookmarks.some(item => item.number === bookmark.number)) {
      // Eliminamos
      state.bookmarks = state.bookmarks.filter(item => item.number !== bookmark.number)
    } else {
      state.bookmarks.push(bookmark)
    }
  }
}

const actions = {
  modify({ commit, state }, bookmark) {
    commit('EDIT_BOOKMARKS', { bookmark })

    window.localStorage.setItem('prueba', JSON.stringify(state.bookmarks))
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store