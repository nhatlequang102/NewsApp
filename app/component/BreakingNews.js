import React from 'react'
import { View, Text } from 'react-native'
import HorizotalList from './lists/HorizotalList'

const BreakingNews = ({data}) => {
    return <HorizotalList title='Tin Hot' data={data}/>
    
}

export default BreakingNews
