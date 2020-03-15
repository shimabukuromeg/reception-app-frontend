import axios from '~/plugins/axios'

const parseJWToken = (token) => {
  if (!token) return {}
  let claim = token.split('.')[1]
  claim = claim.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(claim))
}

export const state = () => ({
  accessToken: null,
  currentUser: null,
})

export const getters = {
  isAuthenticated: (state) => {
    return Boolean(state.accessToken)
  },
  tokenExp: (state) => {
    const { exp } = parseJWToken(state.accessToken)
    return exp
  },
  isTokenExpired: (state, getters) => {
    const exp = getters.tokenExp
    return exp <= Math.floor(Date.now() / 1000)
  },
  willTokenBeExpiredSoon: (state, getters) => {
    const exp = getters.tokenExp
    // 有効期限があと30分以内の場合、trueを返す
    return (exp - Math.floor(Date.now() / 1000)) / 60 <= 30
  },
  hasCurrentUser: (state) => {
    return Boolean(Object.keys(state.currentUser).length)
  },
  accessToken: (state) => {
    return state.accessToken
  },
  currentUser: (state) => {
    return state.currentUser
  },
}

export const mutations = {
  setAccessToken (state, token) {
    state.accessToken = token
  },
  clearTokens (state) {
    state.accessToken = null
  },
  setCurrentUser (state, currentUser) {
    state.currentUser = currentUser
  },
  clearCurrentUser (state) {
    state.currentUser = null
  },
}

export const actions = {
  async login ({ dispatch, commit }, payload) {
    const credentials = { email: payload.email, password: payload.password }
    const response = await axios.post('/api/auth/login', credentials)
    dispatch('logout')
    commit('setAccessToken', response.access_token)
    commit('setCurrentUser', response.current_user)
  },
  async logout ({ commit }) {
    commit('clearTokens')
    commit('clearCurrentUser')
  },
  async signUp ({ dispatch, commit }, payload) {
    const response = await axios.post('/api/auth/register', payload)
      .catch(error => {
        throw error
      })
    dispatch('logout')
    commit('setAccessToken', response.access_token)
    commit('setCurrentUser', response.current_user)
  },
}
