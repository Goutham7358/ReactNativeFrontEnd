import React, {useState} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen: React.FC = (props) => {
    const [count,setCount] = useState(5)
    const navigation = useNavigation()
    return (
        <View style = {styles.containerStyle}>
            <Text>Full Flow </Text>
            <Text>{count}</Text>
            <TouchableOpacity onPress = {()=>setCount(count+1)}>
            <Text>Click me to update Count</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=>navigation.navigate('SendData')}>
            <Text>Let's Send Some Data</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        alignItems:"center",
        justifyContent:"center"
    }
})