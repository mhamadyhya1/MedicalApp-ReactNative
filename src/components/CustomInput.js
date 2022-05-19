import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomTextInput = ({
    label,
    value,
    placheHolder,
    name,
    size,
    isSecure,
    onChangeText,
    error,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 15,
                marginLeft:25,
                top:30,
                fontWeight: 'bold'
            }}>{label}</Text>

            <View >
            <Icon style={styles.icon} name={name} size={32}/>
            <TextInput
                value={value}
                placeholder={placheHolder}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                placeholderTextColor="gray"
                {...props}
                {...error ? <Text style={styles.errorMessage}>{error}</Text>:null}
            />
            </View> 
            </View>
           
            

        
    );
};


const styles = StyleSheet.create({
    
    
      errorMessage:{
        color:"#b32e2e",
        marginLeft:25,
        marginBottom:12,
      },
      
      inputStyle:{
          
          backgroundColor:"white",
          width:"90%",
          left:25,
          borderRadius:15,
          borderBottomLeftRadius:0,
          borderTopLeftRadius:0,
      },
      icon:{
          top:38,
          
      }

    
      
    
        
});

export default CustomTextInput;





            
