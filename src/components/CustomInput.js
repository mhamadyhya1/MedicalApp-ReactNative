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
                fontSize: 17,
                marginLeft: 20,
                fontWeight: 'bold',
                color:"#000"

            }}>{label}</Text>

            <View style={styles.inputStyle}>
                <Icon style={styles.icon} name={name} size={32} />
                <TextInput
                    value={value}
                    placeholder={placheHolder}
                    onChangeText={onChangeText}
                    style={{fontSize:18}}
                    placeholderTextColor="gray"
                    {...props}
                    {...error ? <Text style={styles.errorMessage}>{error}</Text> : null}
                />
            </View>
        </View>




    );
};


const styles = StyleSheet.create({


    errorMessage: {
        color: "#b32e2e",
        marginLeft: 25,
        marginBottom: 12,
    },

    inputStyle: {

        backgroundColor: "white",
        width: "100%",
        marginHorizontal:1,
        borderRadius: 15,
        flexDirection:'row',
        alignItems:'center'
    },
    icon: {
        paddingHorizontal:10,
        color:"#414a4c"

    }





});

export default CustomTextInput;






