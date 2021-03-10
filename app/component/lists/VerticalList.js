import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import VerticalCard from '../cards/VerticalCard'
import Tittle from '../common/Tittle'
import {useNavigation} from '@react-navigation/native'

const VerticalList = ({title,data}) => {
    const navigation=useNavigation()
    return (
        <View>
            {title && <Tittle>{title}</Tittle>}
            <View style={styles.container}>
            {data.map(item => (
            <VerticalCard  
                item={item} 
                key={item.id} 
                onPress={()=>navigation.navigate('NewsDetail',{item})}
            />
            ))}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginVertical:15
    }
})

export default VerticalList
