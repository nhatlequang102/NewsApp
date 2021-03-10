import React from 'react'
import { View, Text } from 'react-native'
import VerticalList from './lists/VerticalList'

const EntertainmentNews = ({data}) => {
    return (
        <VerticalList title='Tin Giải Trí' data={data}/>
    )
}

export default EntertainmentNews