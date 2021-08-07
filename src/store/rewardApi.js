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
    rewards: (state) => state.data,
  },
  mutations: {
    fetch (state, { res }){
        state.data = res.data
    },
    add(state, {payload}){
      state.data.push(payload)
    },
    edit(state, payload ){
      state.data[payload.index] = payload
    },
    // delete(state, { payload }) {
    //     state.reward[payload.index] = payload.data
    // }
  },
  actions: {
    async fetchReward ({ commit }){
        let res = await Axios.get(api_endpoint + "/rewards")
        console.log(res);
        commit('fetch',{ res })
    },
    async addReward({ commit }, payload){
      let url = api_endpoint + "/rewards"
      let body = {
        name : payload.name,
        point: payload.point,
        quantity: payload.quantity
      }
      let res = await Axios.post(url, body)
        let data = res.data
        commit('add', data)
    },

    async editReward({ commit }, payload){
      let url = api_endpoint + "/rewards/" + payload.id
      let body = {
        name : payload.name,
        point: payload.point,
        quantity: payload.quantity
      }
      let res = await Axios.put(url, body)
      console.log(res);
      if(res.status === 200){
        let data = res.data
        data.index = payload.index

      }else{
        console.err(res)
      }
      commit("edit", {payload})
    },
    // async deleteReward({ commit }, payload) {
    //     let url = api_endpoint + "/rewards/" + payload.id
    //     //let headers = AuthService.getApiHeader()
    //     let res = await Axios.delete(url)
    //     if (res.status === 200) {
    //         commit("delete", res)
    //         return {
    //             success: true,
    //             data: res
    //         }
    //     }
    // }

  },
  modules: {
  }
})