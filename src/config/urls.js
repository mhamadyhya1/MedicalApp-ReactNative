export const API_BASE_URL = "http://192.168.1.102:3900/api";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/patients/login')
export const SIGNUP = getApiUrl('/patients/SignUp');