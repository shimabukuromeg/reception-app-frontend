import moment from '~/plugins/moment'

export const state = () => ({
  checkIns: []
})

export const getters = {
  checkIns: (state) => state.checkIns
}

export const mutations = {
  addCheckIn(state, {checkIn}) {
    state.posts.push(checkIn)
  },
  updateCheckIn(state, {checkIn}) {
    state.checkIns = state.checkIns.map((p) => (p.id === checkIn.id ? checkIn : p))
  },
  clearCheckIns(state) {
    state.checkIns = []
  }
}

export const actions = {
  async checkInPost({commit}, payload) {
    await this.$axios.$post(`/api/v1/checkins`, payload)
  },
  async retrieveCheckIns({commit}, payload) {
    await this.$axios.$get(`/api/v1/checkins`, payload)
  },
}
