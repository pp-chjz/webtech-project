import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_endpoint = process.env.VUE_APP_REWARD_ENDPOINT || "http://localhost:1337"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: []
  },
  getters: {
    histories: (state) => state.data,
  },
  mutations: {
    fetch (state, { res }){
        state.data = res.data
    },
    add(state, {payload}){
      state.data.push(payload)
    }
  },
  actions: {
    async fetchHistory ({ commit }){
        let res = await Axios.get(api_endpoint + "/histories")
        console.log(res);
        commit('fetch',{ res })
    },
    async updateHistory({ commit } , payload){
      console.log(payload)
      let body = {
        receive_point : payload.point,
        use_point: 0,
        id_user: payload.id,
        reward: "-",
        help: payload.help,
        time: Date.now()
      }
        let res = await Axios.post(api_endpoint + "/histories", body)
        console.log(res.data.time)
        commit('add', {res} )
    },
    async updateHistoryReward({commit} , payload){
      console.log(payload)
      let body = {
        receive_point : 0,
        use_point: payload.point,
        id_user: payload.id,
        reward: "-",
        help: payload.help,
        time: Date.now()
      }
        let res = await Axios.post(api_endpoint + "/histories", body)
        console.log(res.data.time)
        commit('add', {res} )
    },
  },

  modules: {
  }
})