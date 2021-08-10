import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_endpoint = process.env.VUE_APP_REWARD_ENDPOINT || "http://localhost:1337"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: [],
      use: [],
      get: []
  },
  getters: {
    histories: (state) => state.data,
    use_histories: (state) => state.use,
    get_histories: (state) => state.get,
  },
  mutations: {
    fetch (state, { res }){
        state.data = res.data
    },
    fetch_use (state, { res }){
        state.use = res.data
    },
    fetch_get (state, { res }){
      state.get = res.data
    },  
    add(state, {payload}){
      state.data.push(payload)
    }
  },
  actions: {
    async fetchHistory ({ commit }){
        let res = await Axios.get(api_endpoint + "/histories")
        console.log("========= ")
        console.log(res.data.sort());
        commit('fetch',{ res })
    },
    async fetchUseHistory ({ commit }){
      let res = await Axios.get(api_endpoint + "/histories?status=reward" )
      console.log("========= ")
      console.log(res.data);
      res.data.sort(function (a, b) {
        return b.use_point - a.use_point;
      });
      commit('fetch_use',{ res })
    },
    async fetchGetHistory ({ commit }){
      let res = await Axios.get(api_endpoint + "/histories?status=help" )
      console.log("========= ")
      console.log(res);
      res.data.sort(function (a, b) {
        return b.receive_point - a.receive_point;
      });
      commit('fetch_get',{ res })
    },
    async updateHistory({ commit } , payload){
      console.log(payload)
      let body = {
        receive_point : payload.point,
        use_point: 0,
        id_user: payload.id,
        reward: "-",
        help: payload.help,
        time_text: new Date(Date.now()).toLocaleDateString(),
        status: "help",
        user_name: payload.name,
        username: payload.username,
        time: new Date(Date.now())
      }
        let res = await Axios.post(api_endpoint + "/histories", body)
        console.log(res.data.time)
        commit('add', {res} )
    },
    async updateHistoryReward({commit} , payload){
      console.log(payload)
      let body = {
        receive_point :0,
        use_point:  payload.point,
        id_user: payload.id,
        reward: "-",
        help: payload.help,
        time_text: new Date(Date.now()).toLocaleDateString(),
        status: "reward",
        user_name: payload.name,
        username: payload.username,
        time: new Date(Date.now())
      }
        let res = await Axios.post(api_endpoint + "/histories", body)
        console.log(res.data.time)
        commit('add', {res} )
    },
  },

  modules: {
  }
})