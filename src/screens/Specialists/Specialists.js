import React from "react";
import { Text, View, TextInput, StatusBar, FlatList, TouchableHighlight, Image, StyleSheet } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";


const SpecialistScreen = ({ navigation }) => {

    function header() {
        return <View style={styles.headerStyle}>
            <View style={styles.headerTitleContainerStyle}>
                <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
                <Text style={{ ...Fonts.black20Bold, marginLeft: Sizes.fixPadding * 2.0 }}>Speciality</Text>
            </View>
            <View style={styles.headerSearchStyle}>
                <Ionicons name="search" size={24} color="gray" />
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder="Search Specialities"
                        style={{ ...Fonts.gray17Regular, marginLeft: Sizes.fixPadding, }}
                    />
                </View>
            </View>
        </View>
    }

    const specialistsList = [
        {
            id: '1',
            name: 'Cough & Fever',
            image: require('../../../assets/images/icons/patient.png'),
        },
        {
            id: '2',
            name: 'Homoeopath',
            image: require('../../../assets/images/icons/stethoscope.png'),
        },
        {
            id: '3',
            name: 'Gynecologist',
            image: require('../../../assets/images/icons/woman.png'),
        },
        {
            id: '4',
            name: 'Pediatrician',
            image: require('../../../assets/images/icons/pediatrician.png'),
        },
        {
            id: '5',
            name: 'Physiotherapist',
            image: require('../../../assets/images/icons/physiotherapist.png'),
        },
        {
            id: '6',
            name: 'Nutritionist',
            image: require('../../../assets/images/icons/nutritionist.png'),
        },
        {
            id: '7',
            name: 'Spine and Pain Specialist',
            image: require('../../../assets/images/icons/pain.png'),
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight
                underlayColor="white"
                activeOpacity={0.9}
                style={{ flex: 1, }}
                onPress={() => navigation.navigate('Specialist', { name: item.name })}
            >
                <View style={styles.specialistStyle}>
                    <Image
                        source={item.image}
                        resizeMode="contain"
                        style={{ height: 80.0, width: 80.0 }}
                    />
                    <Text style={styles.specialistTextStyle}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    function specialities() {
        return <View style={{ backgroundColor: '#FAF9F7', flex: 1, paddingTop: Sizes.fixPadding, }}>
            <FlatList
                data={specialistsList}
                keyExtractor={(item) => `${item.id}`}
                numColumns={2}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding, }}
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

export default SpecialistScreen;