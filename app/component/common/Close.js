import React from 'react'
import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native'

import {AntDesign} from 'react-native-vector-icons'
const Close = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={onPress}>
            <Image  style={styles.icon} source={require('../../../assets/out.png') }/>
            </TouchableHighlight>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:0,
        marginVertical:20

    },
    icon:{
        height:40,
        width:40,
        backgroundColor:'rgba(92,90,91,0.7)',
        padding:10,
        borderRadius:50
    }
})
export default Close