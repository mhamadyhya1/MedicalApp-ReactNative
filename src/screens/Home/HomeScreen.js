import React, { useRef, useState, } from "react";
import {
    Text, View,SafeAreaView, FlatList, StatusBar, ImageBackground,
    Image, TouchableHighlight, TouchableOpacity,
} from "react-native";
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from "./styles";



export default function HomeScreen({ navigation }){
    

    const specialistsList = [
        {
            id: '1',
            name: 'Doctor',
            image: require('../../../assets/images/icons/stethoscope.png'),
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

    const labAndCheckUpList = [
        {
            id: '1',
            labName: 'New York City DOHMH Public Health Laboratory',
            labAddress: '455 1st Avenue, New York, NY 10016, United States',
            image: require('../../../assets/images/lab/lab_1.jpg')
        },
        {
            id: '2',
            labName: 'Enzo Clinical Labs-Upper East Side (STAT Lab)',
            labAddress: '44 E 67th St, New York, NY 10022, United States',
            image: require('../../../assets/images/lab/lab_2.jpg')
        },
        {
            id: '3',
            labName: 'New York Startup Lab LLC',
            labAddress: '244 5th Ave #2575, New York, NY 10001, United States',
            image: require('../../../assets/images/lab/lab_3.jpg')
        },
        {
            id: '4',
            labName: 'MEDTRICS LAB LLC',
            labAddress: '138 W 25th St 10th floor, New York, NY 10001, United States',
            image: require('../../../assets/images/lab/lab_4.jpg')
        },
        {
            id: '5',
            labName: 'Enzo Clinical Labs',
            labAddress: '15005 21st Ave ,Flushing, NY 11357, United States',
            image: require('../../../assets/images/lab/lab_5.jpg')
        },
        {
            id: '6',
            labName: 'Shiel Medical',
            labAddress: '128 Mott St,New York, NY 10013,United States',
            image: require('../../../assets/images/lab/lab_6.jpg')
        },
    ];

    function search() {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Search')

            }}>
                <View style={styles.searchStyle}>
                    <Ionicons name="search" size={24} color="gray" />
                    <Text style={{ ...Fonts.gray17Regular, marginLeft: Sizes.fixPadding }}>What type of appointment?</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function newlyLanched() {
        return (
            <ImageBackground
                source={require('../../../assets/images/banner.jpg')}
                resizeMode="contain"
                style={{
                    height: 100.0,
                    marginTop: Sizes.fixPadding + 5.0,
                    marginHorizontal: Sizes.fixPadding * 2.0,
                }}
                borderRadius={5}
            >
            </ImageBackground>
        )
    }

    function title({ title }) {
        return (
            <Text style={{ ...Fonts.black20Bold, marginVertical: Sizes.fixPadding, fontWeight:"bold", marginHorizontal: Sizes.fixPadding * 2.0 }}>
                {title}
            </Text>
        )
    }

   const  specialists=()=>{

        const renderItem = ({ item }) => (
            <TouchableHighlight
                underlayColor="white"
                activeOpacity={0.9}
                onPress={() => navigation.navigate('SpecialistScreen')}
            >
                <View style={styles.specialistInfoContainer}>
                    <Image
                        source={item.image}
                        resizeMode="contain"
                        style={{ height: 80.0, width: 80.0 }}
                    />
                    <Text style={{
                        ...Fonts.black15Bold,
                        fontWeight:"bold",
                        marginTop: Sizes.fixPadding,
                        marginHorizontal: Sizes.fixPadding,
                        textAlign: 'center'
                    }}>
                        {item.name}
                    </Text>
                </View>
            </TouchableHighlight>
        )

        return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={specialistsList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ marginHorizontal: Sizes.fixPadding }}
            />
        )
    }

    function viewAll() {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ViewAll')}>
                <View style={styles.viewAllStyle}>
                    <Text style={{ ...Fonts.primaryColor17Bold, marginRight: Sizes.fixPadding - 5.0 }}>View All</Text>
                    <Ionicons name="chevron-forward" size={23} color="black" />
                </View>
            </TouchableOpacity>
        );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('LabTestAndCheckUp', {
                image: item.image, name: item.labName, address: item.labAddress
            })}
            style={styles.labAndCheckUpContainer}
        >
            <Image
                source={item.image}
                style={styles.ImageStyle}
                resizeMode="cover"
            />
            <View style={styles.labInformationContainer}>
                <Text numberOfLines={3} style={{ ...Fonts.black16Bold, fontWeight:"bold" }}>
                    {item.labName}
                </Text>
                <Text numberOfLines={2} style={{ ...Fonts.grayBold, marginTop: Sizes.fixPadding - 5.0 }}>
                    {item.labAddress}
                </Text>

            </View>
            <View style={{
                alignItems: 'center', justifyContent: 'center',
                marginRight: Sizes.fixPadding + 10.0
            }}>
                <Ionicons name="chevron-forward" size={25} color="black" />
            </View>
        </TouchableOpacity>
    );

    function header() {

        const refRBSheet = useRef();
        const [city, setCity] = useState('Wallington');
        const cityList = ['Wallingtone', 'Central Park', 'Nerobi'];

        return (
            <View style={styles.headerStyle}>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                    <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        height={200}
                        openDuration={250}
                        customStyles={{
                            container: {
                                paddingHorizontal: Sizes.fixPadding * 2.0,
                            }
                        }}
                    >
                        <View>
                            <Text style={{ ...Fonts.black20Bold, alignSelf: 'center' }}>Choose City</Text>
                            {cityList.map((city) =>
                                <TouchableOpacity
                                    key={city}
                                    onPress={() => {
                                        setCity(city)
                                        refRBSheet.current.close()
                                    }}>
                                    <Text
                                        style={{ ...Fonts.black16Regular, marginVertical: Sizes.fixPadding }}>{city}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </RBSheet>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="location-sharp" size={22} />
                        <Text style={{ ...Fonts.black18Regular, marginLeft: 10.0 }}>{city}</Text>
                    </View>
                </TouchableOpacity>
                <Ionicons name="notifications" size={24} color="black" onPress={() => navigation.navigate('Notification')} />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <StatusBar translucent={false} backgroundColor={Colors.primary} />
            <FlatList
                ListHeaderComponent={
                    <>
                        {/* {header()} 
                         {search()}
                        {newlyLanched()} */}
                        {title({ title: 'Services' })}
                        {specialists()}
                        {title({ title: 'Announcements' })}
                        {/* {viewAll()} */}
                    </>
                }
                data={labAndCheckUpList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

HomeScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

// const styles = StyleSheet.create({
    
// })

