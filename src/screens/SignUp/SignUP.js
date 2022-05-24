import { View, Text, TouchableOpacity,ScrollView} from 'react-native'
import React, { useState} from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomTextInput from '../../components/CustomInput';
import styles from './styles';
import validationSchema from './validationSchema';
import { useFormik } from 'formik';
import actions from '../../redux/actions';
import { showError , showSuccess } from '../../components/ShowMessage';

export default function SignUP({navigation}) {


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("")
  const updateState = (data) => useFormik(() => ({ ...values, ...data }))

  
   
  const formik = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      password: '',
      confirmpassword: '',
      phonenumber: '',
      DOB: '',
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit:validationSchema

  })


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[2]}/${tempDate[1]}/${tempDate[3]}`
      : '';
  };

  const {
    values,
  } = formik;
   
   console.log("Errors: ", formik.errors)
   console.log(values.DOB)

  const onSignUp = async () => {
    
      try {
        const res = await actions.SignUp({
          fullname: values.fullname,
          username: values.username,
          password: values.password,
          phonenumber: values.phonenumber,
          DOB: getDate(),
        })
        console.log("res for signup ==>>", res)
        showSuccess("Register Successful")
        navigation.goBack();
      } catch (error) {
        console.log("Error:", error.message)
        showError(error.message)
      }
    
  }
  return (
    <ScrollView >
      <View style={styles.container} >
        <Text style={styles.RegisterText}>Register New Account</Text>
      
      <View style={styles.InputContainer}>
      <CustomTextInput
          name="user"
          label="Full name"
          placeholder="Enter Full Name"
          value={formik.values.fullname}
          onChangeText={formik.handleChange('fullname')}
          onBlur={formik.handleBlur('fullname')}
          error={formik.touched.fullname && formik.errors.fullname ? formik.errors.fullname : ''}
        />
        <Text style={styles.errorMessage}>{formik.touched.fullname && formik.errors.fullname ? formik.errors.fullname : ''}</Text>

        <CustomTextInput
          name="user"
          label="username"
          placeholder="Enter Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
          error={formik.touched.username && formik.errors.username ? formik.errors.username : ''}
        />

        <Text style={styles.errorMessage}>{formik.touched.username && formik.errors.username}</Text>
        <CustomTextInput
          name="key"
          label="Password"
          placeholder="Enter New Password"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
        />
        
        <Text style={styles.errorMessage}>{formik.touched.password && formik.errors.password ? formik.errors.password : ''}</Text>
        <CustomTextInput
          name="key"
          label="Confirm Password"
          placeholder="Confirm you New Password"
          secureTextEntry={true}
          value={formik.values.confirmpassword}
          onChangeText={formik.handleChange('confirmpassword')}
          onBlur={formik.handleBlur('confirmpassword')}
        />

        <Text style={styles.errorMessage}>{formik.touched.confirmpassword && formik.errors.confirmpassword ? formik.errors.confirmpassword : ''}</Text>
        <CustomTextInput
          name="phone"
          label="Phone Number"
          placeholder="Enter Your Phone Number"
          keyboardType="numeric"
          value={formik.values.phonenumber}
          onChangeText={formik.handleChange('phonenumber' , parseInt(values.phonenumber))}
          onBlur={formik.handleBlur('phonenumber')}
        />
        <Text style={styles.errorMessage}>{formik.touched.phonenumber && formik.errors.phonenumber ? formik.errors.phonenumber : ''}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={showDatePicker}>
          <CustomTextInput
            editable={false}
            name="calendar-o"
            label="Date Of Birth"
            placeholder="Date Of Birth"
            value={formik.values.DOB}
            onChangeText={formik.handleChange('DOB')}
            onBlur={formik.handleBlur('DOB')} />
        </TouchableOpacity>
        <Text style={styles.DatePicker}>{getDate()}</Text>
         <View style={styles.BackToLogin}>
         <Text>Back To </Text>
          <TouchableOpacity style={styles.Loginclicker} onPress={()=>navigation.navigate("LoginUI")}>
            <Text>Login Page</Text>
          </TouchableOpacity>
         </View>
        
      
        <TouchableOpacity activeOpacity={0.8} style={styles.LoginBtn} onPress={onSignUp}>
          <Text style={styles.LoginBtnText}>Register</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
        

      </View>
    </ScrollView>
  )
}

