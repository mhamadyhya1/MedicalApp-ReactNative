import React, { useEffect, useState } from "react";
import { Text, View, TextInput, StatusBar, FlatList, TouchableHighlight, Image, StyleSheet } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { SPECIALISTS } from "../../config/urls";
import { useIsFocused } from '@react-navigation/native';

export default function SpecialistScreen({ navigation }){
    const isFocused = useIsFocused()
    const[SpecialistData,setSpecialistData ]=useState([])
    const [isLoading,setisLoading]=useState(false);
    useEffect(()=>{
        if(isFocused){
            fetchSpecialists()
        }
    },[isFocused])
     const fetchSpecialists = () =>{
        fetch(SPECIALISTS)
        .then((response)=>response.json())
        .then((SpecialistData)=>setSpecialistData(SpecialistData))
        .catch(console.error)
        .finally(()=>setisLoading(true))
     }

    function header() {
        return <View style={styles.headerStyle}>
            <View style={styles.headerTitleContainerStyle}>
                <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
                <Text style={{ ...Fonts.black20Bold, marginLeft: Sizes.fixPadding * 2.0 }}>Specialist</Text>
            </View>
            
        </View>
    }

   
    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight key={item._id}
                underlayColor="white"
                activeOpacity={0.9}
                style={{ flex: 1, }}
                onPress={() => navigation.navigate('DoctorsScreen',{Name:item.Name})}
                // onPress={() => navigation.navigate('Specialist', { name: item.name })}
            >
                <View style={styles.specialistStyle}>
                    <Image
                        source={{uri:item.imageUrl}}
                        resizeMode="contain"
                        style={{ height: 80.0, width: 80.0 }}
                    />
                    <Text style={styles.specialistTextStyle}>{item.Name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    function specialities() {
        return <View style={{ backgroundColor: '#FAF9F7', flex: 1, paddingTop: Sizes.fixPadding, }}>
            <FlatList
                data={SpecialistData}
                keyExtractor={(item) => item._id}
                numColumns={2}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding, }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    }

    return <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.primary} />
        {header()}
        {specialities()}
    </View>
}



SpecialistScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

 SpecialistScreen;