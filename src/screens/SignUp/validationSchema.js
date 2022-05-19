import * as yup from 'yup';

const validationSchema = yup.object({
  fullname: yup.string()
    .label('fullname')
    .required()
    .min(2, 'Must have at least 2 characters'),
  username: yup.string()
    .label('username')
    .required()
    .min(4, 'Must have at least 4 characters'),
  password: yup.string()
    .label('Password')
    .required()
    .min(5, 'Password must have more than 4 characters '),
  confirmpassword: yup.string()
    .oneOf([yup.ref('password')], 'Confirm Password must matched Password')
    .required('Confirm Password is required'),
}); 

export default validationSchema;