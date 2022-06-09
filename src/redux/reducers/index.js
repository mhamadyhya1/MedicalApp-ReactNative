import { combineReducers } from "redux";
import types from "../types";
import auth from "./auth";

const appReducer = combineReducers({
    auth,
})
const rootReducer = (state, action) => {
    if (action.type == types.LOGOUT) {
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer