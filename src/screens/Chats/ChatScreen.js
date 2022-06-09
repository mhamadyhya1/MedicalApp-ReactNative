import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import  Entype  from 'react-native-vector-icons/Entypo';
import { Fonts,Sizes} from "../../constant/styles";

export default function ChatScreen() {
  return (
    <View style={styles.noActiveDataContainerStyle}>
    <Entype name="chat" size={70} color='gray' />
    <Text style={{ ...Fonts.black20Bold, marginTop: Sizes.fixPadding * 2.0 }}>Under Construction</Text>
</View>
  )
}

const styles = StyleSheet.create({
    noActiveDataContainerStyle: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
        alignItems: 'center'
    },
})