import React from 'react';
import { View, StatusBar,StyleSheet, ScrollView,Text } from 'react-native'
import VerticalList from '../lists/VerticalList'

import useCate from '../../hooks/useCate'

const setting=()=>{
    //lay kq tu rs trong small card &
    const [featuredNews,techNews,entertainmentNews,breakingNews,sportNews]=useCate();
    return(
        
        <>
        <View style={styles.headerContainer}>
            <Text style={styles.categorytitle}>
               Tin công nghệ
            </Text>
        </View>
        <ScrollView contentContainerStyle={{padding:15}}>
            <VerticalList data={techNews}/>
        </ScrollView>
        </>
        
       
    )
}

const styles=StyleSheet.create({
    headerContainer:{
        width:'100%',
        height:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:StatusBar.currentHeight,
        backgroundColor:'#3366CC'
    },
    categorytitle:{
        fontSize:25,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'white'
    }
})

export default setting;
