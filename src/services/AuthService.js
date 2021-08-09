import Axios from 'axios'
import { createNamespacedHelpers } from 'vuex'

const auth_key = "auth"
// let auth = JSON.parse(localStorage.getItem(auth_key))
// console.log('----- set user --------')
// const user= auth ? auth.user : ""
// const jwt = auth ? auth.jwt : ""
const api_endpoint = "http://localhost:1337"

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

    async register({name,username,email,password,c_password,phone,line,facebook,add}){
        //call POST/auth/local/register
        try{
            let url = `${api_endpoint}/auth/local/register`
            let body = {
                name: name,
                username: username,
                email: email,
                password:password,
                c_password: c_password,
                phone: phone,
                line: line,
                face: facebook,
                add: add,
                point:0
            }
            if(password === c_password && name != '' )
            {
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

    async post({ topic,text,priority,status,time,point }){
        let auth = JSON.parse(localStorage.getItem(auth_key))
        console.log('----- set user --------')
        const user= auth ? auth.user : ""
        const jwt = auth ? auth.jwt : ""
        console.log( point )
        try{
            let url = `${api_endpoint}/posts`
            let body = {
                topic: topic,
                info: text,
                priority: priority,
                status: status,
                user_post_id: user.id.toString(),
                user_post_name: user.name,
                phone_user:user.phone,
                line_user: user.line,
                face_user:user.face,
                add_user: user.add,
                time: time,
                get_point : point
                // user_post_id: "test"
            }
            if(topic != '' && text != '')
            {
                let res = await Axios.post(url, body)
                if(res.status === 200){
                    // console.log(user)
                    console.log(jwt)
                    console.log(res.data)
                    // localStorage.setItem(auth_key, JSON.stringify(res.data))
                    return{
                        success :true,
                        user:res.data.user,
                        jwt:res.data.jwt
                    }
                } else{
                    console.log("NOT 200",res)
                }
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

    async help({ point , id }){
        console.log( point )
        console.log( id )
        let url = `${api_endpoint}/users/${id.toString()}`
        console.log(url)
            let body ={
                point: point
            }
            let res = await Axios.put(url, body)
            console.log('----- res data --------')
            console.log(res.data)
            
            localStorage.setItem(auth_key, JSON.stringify(res.data))
            
            console.log(JSON.parse(localStorage.getItem(auth_key)))
            return{
                success :true,
                
            }
    },
    

    logout(){
        localStorage.removeItem(auth_key)
    },


}