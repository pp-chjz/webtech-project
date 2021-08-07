import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

let api_endpoint = 'http://localhost:1337'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[]
  },
  getters:{
    posts: (state) => state.data
  },
  mutations: {
      fetch(state,{res}){
          state.data = res.data
      }
  },
  actions: {
      async fetchPost({commit}){
          let res = await Axios.get(api_endpoint + "/posts")
          commit("fetch", { res })
          console.log(res)
      }
  },
  modules: {
  }
})
