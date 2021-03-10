import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import BlockCard from './cards/BlockCard'
import FeaturedCard from './cards/FeaturedCard'
import {useNavigation} from '@react-navigation/native'
import apiClient from '../api/client'


const FeaturedNews = ({item}) => {
    const navigation=useNavigation();
    const [arr, setArr] = useState({})
    useEffect(() => {
        getAll()
    }, [])
    const getAll=async() =>{
        try{
            const reponse=await apiClient.get('/news')
            if(reponse.data.success){
                
                return setArr(reponse.data.news[0] ? reponse.data.news[0] : {})
            }
            return setArr({})
        }catch(error){
            return setArr({});
        }
    
    }
    console.log(arr)
    return (
        <FeaturedCard onPress={()=>navigation.navigate('NewsDetail',{item: arr})} 
        item={arr ? arr : {}} 
        style={{marginVertical:10}}/> 
    )
}



export default FeaturedNews
