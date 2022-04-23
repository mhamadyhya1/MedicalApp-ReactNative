import { View, Text,Image,StyleSheet,TextInput , TouchableOpacity} from 'react-native'
import React from 'react'

export default function SignUP() {
  return (
    <View>
        <TextInput
        placeholderTextColor="#003f5c"
        placeholder='Mhamad'
        secureTextEntry={true}/>
    </View>
  )
}
