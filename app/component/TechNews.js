import React from 'react'
import { View, Text } from 'react-native'
import HorizotalList from './lists/HorizotalList'

const TechNews = ({data}) => {
    return <HorizotalList title='Tin công nghệ' data={data}/>
    
}

export default TechNews