import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,ScrollView,Image,Dimensions } from 'react-native'

import newsApi from '../../api/newApi'
import HorizotalList from '../lists/HorizotalList'

import Close from '../common/Close'
import {useNavigation} from '@react-navigation/native'
import imgurl from '../../api/img'

const{width,height}=Dimensions.get('window')
const NewDetails = ({route}) => {
    const[news,setNews]=useState({})
    const [relatedNews,setRelatedNews]=useState([])
    const {id:postId,category:postCategory}=route.params.item
    
    const navigation=useNavigation()

    const fetchPost=async(id)=>{
        
        const result=await newsApi.getSingle(id)
        setNews(result)

    }

    const fetchRelatedPosts=async(category)=>{
        const result=await newsApi.getByCategory(postCategory,6)
        setRelatedNews(result.filter(item=>item.id!=postId))
        
    }

    useEffect(()=>{
        fetchPost(postId)
        fetchRelatedPosts(postCategory);
    },[])

    const {title,content,thumbnail}=news

    return (
        <>
        
        <ScrollView  style={{marginVertical:10}}>
            <Image style={styles.image} source={{uri:imgurl.defaults.baseURL+thumbnail}}/>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}
                </Text>
            </View>
            <View style={styles.relatedPostContainer}>
                <HorizotalList data={relatedNews} title='Bài viết liên quan'/>
            </View>
            
        </ScrollView>
        <Close onPress={()=>navigation.navigate('Home')}/>
        </>
    )
}

const styles=StyleSheet.create({
    image:{
        width:width,
        height:height/3
    },
    contentContainer:{
        padding:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    content:{
        fontSize:16,
        color:'#4e4d4d'
    },
    relatedPostContainer:{
        padding:10
    }

})



export default NewDetails