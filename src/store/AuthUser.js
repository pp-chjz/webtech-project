import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '@/services/AuthService'
import Axios from "axios"

Vue.use(Vuex)

let auth_key = 'auth'
let auth = JSON.parse(localStorage.getItem(auth_key))
const api_endpoint = "http://localhost:1337"


const initalState = {
    user: auth ? auth.user : "",
    jwt: auth ? auth.jwt : "",
    isAuthen:  auth ? true : false,
}

export default new Vuex.Store({
  state: initalState,
  mutations: {
      loginSuccess(state,user,jwt){
          state.user = user
          state.jwt = jwt
          state.isAuthen = true
      },
      logoutSuccess(state,user,jwt){
        state.user = ""
        state.jwt = ""
        state.isAuthen = false
      },
      edit(state, payload){
        console.log("@@@@@@@@@@@@@@@@@@@@")
          console.log(state.user)
          state.user = payload.data
          console.log(state.user)
      }
  },
  actions: {
      async login({ commit }, {email ,password} ){
        // console.log(email + password)
        let res = await AuthService.login( {email,password} )
        // console.log("========")
        // console.log(res)
        // console.log("========")
        if(res.success){
            commit('loginSuccess',res.user,res.jwt)
        }
        return res
      },
      async logout({commit}){
          AuthService.logout()
          commit('logoutSuccess')
      },
      async plus_point({commit} ,payload){
        let url = api_endpoint + "/users/" + payload.id 
        // let headers = AuthService.getApiHeader()
        let body= {
          point: payload.point
        }
        let res = await Axios.put(url, body)
        // console.log("point = " + payload.point)
        // console.log("eeeeeeeeeeeee")
        // console.log(res.data)


        if(res.status === 200){
          commit("edit",res)
          return{
            success:true,
            data: res
          }
        }
      }
  },
  getters:{
        user:(state) => state.user,
        jwt:(state) => state.jwt,
        isAuthen:(state) => state.isAuthen
  },
  modules: {
  }
})
