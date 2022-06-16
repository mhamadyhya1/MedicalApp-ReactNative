export const API_BASE_URL = "http://192.168.1.106:3900/api";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/patients/login')
export const SIGNUP = getApiUrl('/patients/SignUp');
export const ANNOUNCEMENTS = getApiUrl('/announcement/getAllAnnouncements')
export const SPECIALISTS = getApiUrl('/Specialist/getAllSpecialists')
export const DOCTORS = getApiUrl('/Doctor/getDoctors/')
export const TIMESLOTS = getApiUrl('/Doctor/timeSlot/')
export const ADDAPPOINTMENT = getApiUrl('/Appointment/addAppointment/')
export const GetAppointments = getApiUrl('/Appointment/getAllAppointment')
export const TODAYAPPOINTMENTS =  getApiUrl('/Appointment/TodayAppointments')
export const DELETEAPPOINTMENT = getApiUrl('/Appointment/DeleteAppointment/')