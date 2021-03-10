import React from 'react';
import { View, StatusBar,StyleSheet, ScrollView,Text } from 'react-native'
import VerticalList from '../lists/VerticalList'

const NewsList=({route})=>{
    const data=route.params //lay kq tu rs trong small card &
    
    const header=data[0].category.split('-').join(' ').toUpperCase()
    return(
        <>
        <View style={styles.headerContainer}>
            <Text style={styles.categorytitle}>
               {header}
            </Text>
        </View>
        <ScrollView contentContainerStyle={{padding:15}}>
            <VerticalList data={data}/>
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

export default NewsList;