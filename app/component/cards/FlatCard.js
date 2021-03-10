import React from 'react'
import { View, StyleSheet, Image ,TouchableWithoutFeedback} from 'react-native'
import Tittle from '../common/Tittle'
import Subtitle from '../common/Subtitle'
import imgurl from '../../api/img' 
const FlatCard = ({item,onPress}) => {
    const{thumbnail,title,desc}=item;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Image 
                source={{uri:imgurl.defaults.baseURL+thumbnail}} 
                style={styles.image}
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
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:8,
        overflow:"hidden",
        marginBottom:10,
        height:80
    },
    image:{
        flex:0.35,
        height:'100%',

    },
    contentContainer:{
        flex:0.65,
        paddingHorizontal:5
    }
})

export default FlatCard