import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

let api_endpoint = 'http://localhost:1337'
const auth_key = "auth"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],
    filtered:[]
  },
  getters:{
    posts: (state) => state.data,
    filterPost: (state) => state.filtered
  },
  mutations: {
      fetch(state,{res}){
          state.data = res.data
      },
      fetchFiltered(state,{res}){
        state.filtered = res.data
      }
  },
  actions: {
      async fetchPost({commit}){
        let auth = JSON.parse(localStorage.getItem(auth_key))
        const user= auth ? auth.user : ""
        const jwt = auth ? auth.jwt : ""
          let res = await Axios.get(api_endpoint + "/posts")
          commit("fetch", { res })
          console.log(res)
      },
      async fetchFilteredPost({commit}){
        let auth = JSON.parse(localStorage.getItem(auth_key))
        const user= auth ? auth.user : ""
        const jwt = auth ? auth.jwt : ""
        let res = await Axios.get(api_endpoint + "/posts?user_post_id=" + user.id.toString() )
        commit("fetch", { res })
        console.log(res)
        console.log("test filter")
    },
  },
  modules: {
  }
})
