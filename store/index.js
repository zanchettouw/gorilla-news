export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async loadPosts({ commit }, apiUrl) {
    const blogPosts = await this.$axios.$get(apiUrl)
    commit('setPosts', blogPosts)
  }
}

export const getters = {
  posts: state => state.posts
}
