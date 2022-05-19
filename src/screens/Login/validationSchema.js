import * as yup from 'yup';

const validationSchema = yup.object({
    username:yup.string()
     .label('username')
     .required(),
    password:yup.string()
      .label('password')
      .required()
})