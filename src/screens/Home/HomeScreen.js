import React, { useEffect, useRef, useState, } from "react";
import {
    Text, View,SafeAreaView, FlatList, StatusBar,
    Image, TouchableHighlight, TouchableOpacity,
} from "react-native";
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import styles from "./styles";
import { ANNOUNCEMENTS } from "../../config/urls";





export default function HomeScreen({ navigation }){
    const [AnnouncementData, setAnnouncementData] = useState([]);
    const [isLoading,setisLoading]=useState(false);
    useEffect(()=>{
        fetch(ANNOUNCEMENTS)
        .then((response)=>response.json())
        .then((AnnouncementData)=>setAnnouncementData(AnnouncementData))
        .catch(console.error)
        .finally(()=>setisLoading(true))

    },[])

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
    ];

    
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
    const showAnnouncements=({item})=>{
        
           return (
                
                    <TouchableOpacity key={item._id}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('AnnouncementDetailScreen',
                        {image:item.imageUrl , Title:item.Title , Details:item.Details})}
                        style={styles.labAndCheckUpContainer}
                    >
                        <View>
                            <Image
                                source={{ uri: item.imageUrl }}
                                style={styles.ImageStyle}
                                resizeMode="cover"
                            />
                        </View>
        
                        <View style={styles.labInformationContainer}>
                            <Text numberOfLines={3} style={{ ...Fonts.black16Bold, fontWeight: "bold" }}>
                                {item.Title}
                            </Text>
                            <Text numberOfLines={2} style={{ ...Fonts.grayBold, marginTop: Sizes.fixPadding - 5.0 }}>
                                {item.Details}
                            </Text>
        
                        </View>
                        <View style={{
                            alignItems: 'center', justifyContent: 'center',
                            marginRight: Sizes.fixPadding + 10.0
                        }}>
                            <Ionicons name="chevron-forward" size={25} color="black" />
                        </View>
                    </TouchableOpacity>
                
            )
        
    }
        
    
   const Announcements = () =>{
    return(
        <View>
            <FlatList
            data={AnnouncementData}
            listKey={(item)=>item._id}
            keyExtractor={(item)=>item._id}
            renderItem={showAnnouncements}
            showsVerticalScrollIndicator={false}
            />

            
        </View>
    )
   };
  

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <StatusBar translucent={false} backgroundColor={Colors.primary} />
            <FlatList
                ListHeaderComponent={
                    <>
                        
                        {title({ title: 'Services' })}
                        {specialists()}
                        {title({ title: 'Announcements' })}
                        {<Announcements/>}
                        
                    </>
                }
                
            />
        </SafeAreaView>
    );
            }   

HomeScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

