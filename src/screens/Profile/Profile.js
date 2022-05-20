import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Alert , TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import AuthStack from '../../Navigation/AuthStack';
import actions from '../../redux/actions';

const Profile = ({navigation}) => {
    const userData = useSelector((state) => state.auth.userData)
    // console.log("user data in profile screen", userData)
    const [isLoading, setLoading] = useState(false)

    const onLogoutAlert = () => {
        Alert.alert(
            'Logout',
            'Are you sure, yout want to logout from this device',
            [{ text: 'Yes', onPress: logout }, { text: 'No', }],
            { cancelable: true }
        )
    }
    const logout = () => {
        setLoading(true)
        setTimeout(() => {
            actions.logout()
            setLoading(false)
        }, 2000);

    }
    return (
        <View style={styles.container}>
            <Text>{userData.user.fullname}</Text>
            <Text style={{ marginBottom: 16 }}>{userData.user.username}</Text>
            <TouchableOpacity
               
                text="Logout"
                onPress={onLogoutAlert}
            ><Text>Logout</Text></TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

//make this component available to the app
export default Profile;
