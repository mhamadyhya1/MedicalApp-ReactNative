import React from "react";
import { SafeAreaView } from "react-native";
import { Text, View, Image, StatusBar, FlatList, TouchableOpacity, StyleSheet , TextInput } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const AnnouncementDetailScreen = ({ route ,navigation })=>
{
const {image , Title , Details}=route.params;

    function AnnouncementInfo() {
        return (
            <View style={styles.labInfoContainerStyle}>
                <Image source={{uri:image}}
                    style={{ width:null,flex:1,height:250,borderRadius: Sizes.fixPadding + 5.0, }}
                    resizeMode="cover"
                />
                
            </View>
        )
    }
    function DetailShow(){
        return(
             <View style={{ marginRight: 100.0, marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.gray15Regular, marginVertical: Sizes.fixPadding +9.0,marginLeft:12 }}>{Details}</Text>
            </View> 
        )
    }

    

    function titleInfo({ title }) {
        return (
            <Text style={{ ...Fonts.black22Bold,fontWeight:"bold", marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 2.0 }}>{title}</Text>
        )
    }
    

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={Colors.primary} />
            <FlatList
                ListHeaderComponent={
                    <>
                        
                        {AnnouncementInfo()}
                        {titleInfo({ title: 'Details' })}
                        {<DetailShow/>}
                    </>
                }
            />
        </SafeAreaView>
    )
}

AnnouncementDetailScreen.navigationOptions = {
    title: 'Lab tests & health checkup',
    headerTitleStyle: { ...Fonts.black20Bold, marginLeft: -Sizes.fixPadding * 2.0 },
    headerStyle: {
        elevation: 0,
    },
    
}
export default AnnouncementDetailScreen;
const styles = StyleSheet.create({
    labInfoContainerStyle: {
        flexDirection: 'row',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding
    },
    labTimeStyle: {
        marginTop: Sizes.fixPadding - 5.0,
        marginBottom: Sizes.fixPadding - 3.0
    },
    addressTextStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding
    },
    mapContainerStyle: {
        borderRadius: Sizes.fixPadding + 5.0,
        marginTop: 5,
        overflow: 'hidden',
        elevation: 3.0,
        marginHorizontal: Sizes.fixPadding * 2.0
    },
    facilitiesContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding - 3.0,
    }
})
