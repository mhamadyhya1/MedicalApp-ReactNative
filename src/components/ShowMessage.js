import { showMessage } from "react-native-flash-message";

const showError = (message)=>{
    showMessage({
        type:"danger",
        type:"danger",
        message
    })
}
const showSuccess = (message)=>{
    showMessage({
        type:"success",
        type:"success",
        message
    })
}

export {
    showError,
    showSuccess,
}