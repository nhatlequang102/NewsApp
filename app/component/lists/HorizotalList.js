import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import SmallCard from '../cards/SmallCard'
import Tittle from '../common/Tittle'
import {useNavigation} from '@react-navigation/native'

const HorizotalList = ({title,data}) => {
    const navigation=useNavigation();
    return (
        <>
        <Tittle size={20}>{title}</Tittle>
        <View style={styles.listStyle}>
        <FlatList data={data} 
        keyExtractor={item =>item.id} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <SmallCard onPress={()=>navigation.push('NewsDetail',{item})} item={item}/>}
        
         />
         </View>
        </>
    )
    
    
}

const styles=StyleSheet.create({
    listStyle:{
        marginVertical:15,

    }
})

export default HorizotalList
