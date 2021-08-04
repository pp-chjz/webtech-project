import Axios from 'axios'

const auth_key = "auth"
let auth = JSON.parse(localStorage.getItem(auth_key))
const user= auth ? auth.user : ""
const jwt = auth ? auth.jwt : ""
const api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"

export default {
    isAuthen() {
        return (user !== "" ) && ( jwt != "")
    },

    getUser(){
        return user
    },
    getJwt(){
        return jwt
    },




    async login({username,password}){
        //call POSTauth/local
        try{
            let body ={
                identifier: username,
                password: password
            }
            let res = await Axios.post(api_endpoint + "/auth/local" ,body)
            if(res.status === 200){
                console.log(res.data)
                localStorage.setItem(auth_key, JSON.stringify(res.data))
                return{
                    success :true,
                    user:res.data.user,
                    jwt:res.data.jwt
                }
            } else{
                console.log("NOT 200",res)
            }
            console.log(res.data)
        }catch(e){
            console.error(e)
            if(e.response.status === 400){
                console.error(e.response.data.message[0].messages[0].message)
                return{
                    success :false,
                    message: e.response.data.message[0].messages[0].message
                }
            }
        }
    },

    async register({username,email,password} , {line,phone,facebook,add}){
        //call POST/auth/local/register
    },

    logout(){
        localStorage.removeItem(auth_key)
    },


}