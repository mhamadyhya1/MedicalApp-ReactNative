import types from "../types";

const initial_state = {
    userData:{}
}

const auth = function(state= initial_state, action){
    switch (action.type) {
        case types.LOGIN:
            const data = action.payload
            return {userData: data}        
        case types.LOGOUT:
            return {
                ...state,
                userData:null,
            };
        default:
            return state;    
    }
}

export default auth;