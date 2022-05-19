import { LOGIN , SIGNUP } from "../../config/urls";
import { apiPost } from "../../utils/utils";
import store from "../store";
import types from "../types";
const {dispatch} = store; 


export const savedUserData = (data) =>{
    dispatch({
        type:types.LOGIN,
        payload:data
    })
}

export function SignUp(data){
    return apiPost(SIGNUP, data)
}

export function login (data) {
   
    return apiPost(LOGIN , data).then((res)=>{
        console.log(res)
    }
    ).catch((error)=>{
        console.log(error)
    })
}