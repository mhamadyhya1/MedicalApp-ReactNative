import { View, Text,Image,TextInput , TouchableOpacity} from 'react-native'
import styles from './styles';
import React,{useState} from 'react';
import Logo from './assests/Logo.png'
import { useFormik , Formik } from 'formik';
import validationSchema from '../SignUp/validationSchema';
import {showError} from '../../components/ShowMessage';
import actions from '../../redux/actions';
import MainStack from '../../Navigation/MainStack';
import TabRoutes from '../../Navigation/TabRoutes';




export default function LoginUI({navigation}) {
  const updateState = (data) =>useFormik(()=>({...values , ...data}))
  const formik = useFormik({
    initialValues:{
      username:'',
      password:'',
    },
    validationSchema:validationSchema,
    validateOnBlur:true,
  })
  const { values}=formik;
  
  const onLogin =async ()=>{
    try{
      const res = await actions.login({
        username:values.username,
        password:values.password,
      })
      console.log("response:",res)
      
      
    } catch (error){
      console.log("error" ,error)
      showError(error.message)}
  }
  return (
    
    <View style={styles.container}>
       <Image source={require('./assests/Logo.png')}
      /> 
    <Text style={styles.LoginText}>Login</Text>
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          value={values.username}
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
        />
      </View>
      <Text style={styles.errorMessage}>{formik.touched.username && formik.errors.username}</Text>
      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          value={values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
        />
        
      </View>
      <Text style={styles.errorMessage}>{formik.touched.password && formik.errors.password}</Text>
      
       
    <TouchableOpacity activeOpacity={0.8} style={styles.LoginBtn} onPress={onLogin}>
      <Text style={styles.LoginBtnText}>Login</Text>
    </TouchableOpacity>
     
      <View style={{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row",
        padding:10
      }}>
        <Text>Don't have account?</Text>
          <TouchableOpacity style={{marginLeft:10}} onPress={()=>navigation.navigate("SignUp")}>
            <Text style={styles.Signupnav}>Sign Up</Text>
          </TouchableOpacity>
        

      </View>
     
</View>
  )
  
}
