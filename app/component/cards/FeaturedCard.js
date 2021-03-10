import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TouchableWithoutFeedback,Image } from 'react-native'
import imgurl from '../../api/img' 
const FeaturedCard = ({item,onPress}) => {
    const{thumbnail,title}=item;
    return (
        
        <TouchableWithoutFeedback onPress={onPress}> 
        <View style={{marginTop:10}}>
            <Image
                source={{uri:imgurl.defaults.baseURL+thumbnail}}
                style={{width:'100%',height:250,borderBottomRightRadius:35,marginBottom:10,borderRadius:10}}
                imageStyle={{borderBottomRightRadius:35}}
            />
            <View style={styles.dark}></View>   
            <Text numberOfLines={2} style={styles.text}>{title}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default FeaturedCard

const styles = StyleSheet.create({
    container:{
        

        
    },
    dark:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        height:250,
        marginBottom:10,
        backgroundColor:'#000',
        opacity:0.2,
        borderRadius:10,
        borderBottomEndRadius:35,
    },

    text:{
        marginTop:180,
        marginLeft:12,
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        position:'absolute'
        
    },
    viewtext:{
        paddingTop:200,
        paddingLeft:12,
    }
})
