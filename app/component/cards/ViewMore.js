import React from 'react'
import { View, Text,StyleSheet,TouchableWithoutFeedback } from 'react-native'


const ViewMore = ({style,onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container,style]}>
            <Text style={styles.text}>Xem thêm..</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        width:'100%',
        height:50,
        backgroundColor:'white'
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        color:'#7a74e0'
    }
})

export default ViewMore