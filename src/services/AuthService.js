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




    async login({email,password}){
        //call POSTauth/local
        try{
            let body ={
                identifier: email,
                password: password
            }
            let res = await Axios.post(api_endpoint + "/auth/local" ,body)
            if(res.status === 200){
                console.log(res.data.user.roles)
                localStorage.setItem(auth_key, JSON.stringify(res.data))
                return{
                    success :true,
                    roles: res.data.user.roles,
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

    async register({username,email,password,c_password,phone,line,facebook,add}){
        //call POST/auth/local/register
        try{
            let url = `${api_endpoint}/auth/local/register`
            let body = {
                username: username,
                email: email,
                password:password,
                c_password: c_password,
                phone: phone,
                line: line,
                face: facebook,
                add: add
            }
            let res = await Axios.post(url, body)
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
        }catch(e){
            console.error(e)
            if(e.response.status === 400){
                // console.error(e.response.data.message[0].messages[0].message)
                return{
                    success :false,
                    message: e.response.data.message[0].messages[0].message
                }
            } else {
                return{
                    success: false,
                    message : "Unknow error: " + e.response.data
                }
            }
         
        }
    },

    logout(){
        localStorage.removeItem(auth_key)
    },


}