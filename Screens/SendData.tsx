import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface SendDataProps {
    type: string
}

export const SendDataScreen: React.FC<SendDataProps> = (props) => {
    const [data, setData] = useState("")
    const [displayData, setDisplayData] = useState("AAA")

    // useEffect(()=>{
    //     const getDataNode = async () =>{
    //         const data = await fetch("http://d9a36f1af36a.ngrok.io/display");
    //         const dataBody = await data.json()
    //         console.log(dataBody.data)
    //         setDisplayData(dataBody.data)
    //     }

    //     getDataNode();
    // },[])

    const getDataNode = async () =>{
        const data = await fetch("http://e8960ead5497.ngrok.io/display");
        const dataBody = await data.json()
        console.log(dataBody.data)
        setDisplayData(dataBody.data)
    }

    const sendToNode = () => {
        if (data) {
            fetch('http://e8960ead5497.ngrok.io/display', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: data
                })
            });
        }
    }
    return (
        <View>
            <Text>Enter {props.type}</Text>
            <TextInput
                style={{ height: 50, borderColor: 'green', borderWidth: 1 }}
                onChangeText={(updatedText) => setData(updatedText)}
            />
            <TouchableOpacity onPress={sendToNode}>
                <Text>Let's push it to Node</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={getDataNode}>
                <Text>Let's get data from Node</Text>
            </TouchableOpacity>
            <Text>{displayData}</Text>
        </View>
    );
}