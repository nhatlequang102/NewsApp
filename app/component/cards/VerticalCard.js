import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import FlatCard from './FlatCard'

import ViewMore from './ViewMore'
import newsApi from '../../api/newApi'
import {useNavigation} from '@react-navigation/native'

const VerticalCard = ({item,onPress}) => {
    const navigation=useNavigation()
    const handleViewMore=async(category)=>{
        const result =await newsApi.getByCategory(category)
        navigation.navigate('NewsList',result)
    }
    if(item.type==='viewMore'){
        return <ViewMore onPress={()=>handleViewMore(item.category)}/>;
    }

    return (
        <FlatCard item={item} onPress={onPress}/>
    )
}



export default VerticalCard