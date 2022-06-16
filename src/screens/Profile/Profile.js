import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar, Dimensions, SafeAreaView, StyleSheet , Alert } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  Feather  from 'react-native-vector-icons/Feather';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { useSelector } from "react-redux";
import actions from '../../redux/actions';

const { width } = Dimensions.get('screen');

export default function Profile({ navigation }){
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
const userData = useSelector((state) => state.auth.userData)

    function userInfo() {
        return (
            <View style={styles.profileInfoContainerStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../assets/images/user/user_1.jpg')}
                        style={{ height: 55.0, width: 55.0, borderRadius: 27.0 }}
                        resizeMode="contain"
                    />
                    <Text style={{ ...Fonts.black22Bold, marginLeft: Sizes.fixPadding }}>
                       {userData.user.fullname}
                    </Text>
                </View>

            </View>
        )
    }

    function divider() {
        return (
            <View style={{ height: 1.00, backgroundColor: Colors.lightGray }}></View>
        )
    }

    function title({ title }) {
        return (
            <Text style={{
                ...Fonts.black20Bold,
                marginVertical: Sizes.fixPadding + 5.0,
                marginHorizontal: Sizes.fixPadding * 2.0
            }}>
                {title}
            </Text>
        )
    }

    function infoAll({ icon, backColor, frontColor, title, }) {

        return (
            <View style={styles.infoContainerStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{
                        ...styles.infoContainerCircleStyle,
                        backgroundColor: backColor,
                        borderColor: frontColor,
                    }}>
                        {icon}
                    </View>
                    <Text style={{ ...Fonts.black16Bold, marginLeft: Sizes.fixPadding }}>
                        {title}
                    </Text>
                </View>
                <Feather name="chevron-right" size={24} color="black" />
            </View>
        )

    }

    function shortDivider() {
        return (
            <View style={{
                height: 0.50,
                backgroundColor: Colors.lightGray,
                marginHorizontal: Sizes.fixPadding * 2.0,
                marginVertical: Sizes.fixPadding
            }}></View>
        )
    }

    return <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
        <StatusBar translucent={false} backgroundColor={Colors.primary} />
        <ScrollView>
            {userInfo()}
            {divider()}
            {title({ title: 'Account Info' })}
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('PatientDirectory')}>
                {infoAll(
                    {
                        icon: <Ionicons name="person" size={20} color={Colors.primary} />,
                        backColor: '#E9EBFE',
                        frontColor: Colors.primary,
                        title: 'Edit Profile',

                    }
                )}
            </TouchableOpacity>
            
            {shortDivider()}
            {title({ title: 'About App' })}
            
            <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('AboutUs')}>
                {infoAll(
                    {
                        icon: <MaterialCommunityIcons name="hand-pointing-up" size={29} color={Colors.primary} />,
                        backColor: '#E9EBFE',
                        frontColor: Colors.primary,
                        title: 'About Us',
                    }
                )}
            </TouchableOpacity>
            
            {shortDivider()}
            <TouchableOpacity
                style={{ marginTop: Sizes.fixPadding }}
                activeOpacity={0.9}
                onPress={onLogoutAlert}
            >
                {infoAll(
                    {
                        icon: <Ionicons name="log-in-outline" size={29} color='#42B1A6' />,
                        backColor: '#D9EFED',
                        frontColor: '#42B1A6',
                        title: 'Logout',
                    }
                )}
            </TouchableOpacity>
        </ScrollView>
       
    </SafeAreaView>
}

const styles = StyleSheet.create({
    profileInfoContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding
    },
    infoContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding + 3.0
    },
    infoContainerCircleStyle: {
        height: 52.0, width: 52.0, borderRadius: 26.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.0
    },
    
    

})
