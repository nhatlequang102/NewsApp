import React from 'react'
import { View, StyleSheet, Image,TouchableWithoutFeedback } from 'react-native'
import Tittle from '../common/Tittle'
import Subtitle from '../common/Subtitle'
import imgurl from '../../api/img' 


const BlockCard = ({style,imageStyle,item,onPress}) => {
    
    const{thumbnail,title,desc}=item;
    
    return (
        <TouchableWithoutFeedback onPress={onPress}> 
        <View style={[styles.container, style]}>
            <Image 
                source={{uri:imgurl.defaults.baseURL+thumbnail}} 
                style={[styles.image,imageStyle]}
            />
            <View style={styles.contentContainer}>
            <Tittle>{title}</Tittle>
            <Subtitle>{desc}</Subtitle>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:300,
        paddingTop:2,
        borderRadius:8,
        overflow:"hidden",
        backgroundColor:'#fff'
    },
    image:{
        width:'100%',
        height:200
    },
    contentContainer:{
        padding:5
    }
})

export default BlockCard



