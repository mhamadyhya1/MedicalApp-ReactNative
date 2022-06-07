export const API_BASE_URL = "http://192.168.1.110:3900/api";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/patients/login')
export const SIGNUP = getApiUrl('/patients/SignUp');
export const ANNOUNCEMENTS = getApiUrl('/announcement/getAllAnnouncements')
export const SPECIALISTS = getApiUrl('/Specialist/getAllSpecialists')
export const DOCTORS = getApiUrl('/Doctor/getDoctors/')
export const TIMESLOTS = getApiUrl('/Doctor/timeSlot/')