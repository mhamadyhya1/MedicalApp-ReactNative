import { ADDAPPOINTMENT, DOCTORS, LOGIN , SIGNUP } from "../../config/urls";
import { apiPost , setUserData , clearUserData} from "../../utils/utils";
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
export function CreateAppointment(data){
    return apiPost(ADDAPPOINTMENT,data)
}

export function login (data) {
   return new Promise((resolve , reject)=>{
    return apiPost(LOGIN , data).then((res)=>{
        setUserData(res.data).then(()=>{
            resolve(res)
            savedUserData(res.data)
        });
        return
    }
    ).catch((error)=>{
        reject(error)
    })
   })
    
}

export const logout = () => {
    clearUserData();
    dispatch({type:types.LOGOUT});
    
    
}