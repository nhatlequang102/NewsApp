import React from 'react'
import { View, Text } from 'react-native'
import VerticalList from './lists/VerticalList'

const SportNews = ({data}) => {
    return (
        <VerticalList title='Tin Thể Thao' data={data}/>
    )
}

export default SportNews
