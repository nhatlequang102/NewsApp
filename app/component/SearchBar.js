import React,{ useState } from 'react';
import { View, TextInput, StyleSheet,TouchableOpacity,Text } from 'react-native';
import SearchModel from '../component/common/SearchModel'
import {useNavigation} from '@react-navigation/native'
import newsApi from '../api/newApi'



let timeOutId;
const debounce=(func,delay)=>{
    
    return(...args)=>{
        if(timeOutId) clearTimeout(timeOutId)
        timeOutId= setTimeout(()=>{
            func.apply(null,args)
        },delay)
    }
}

const SearchBar = ({setSearchFocused})=>{
    const [query,setQuery]=useState('')
    const [visible,setVisible]=useState(false)
    const [data,setData]=useState([])
    const [notFound,setNotFound]=useState('')

    const handleChange= ({nativeEvent})=>{
        const {text}=nativeEvent;
        setQuery(text)
        setVisible(true)
        debounceSearch(query)
    }

    const handleSearch=async value=>{
        console.log("value",value)
        const res=await newsApi.searchPost(value)
        if(res.success){
            setNotFound('')
            setData(res.news);
        }
        if(!res.success){
            setNotFound(res.message);
        }
    }

    const debounceSearch=debounce(handleSearch,500)
    const navigation=useNavigation()
    return(
        <>
      
        <View style={styles.container}>
            
            <TextInput value={query} style={styles.searchInput} placeholder='Tìm kiếm tại đây...'
            onChange={handleChange}
            onFocus={()=>{
                setSearchFocused(true)
            }}
            onBlur={() => {
                setSearchFocused(false);
                setQuery('');
                setVisible(false);
                setData([]);
                setNotFound('');
              }}
            /> 
        </View>
        
        
        <SearchModel visible={visible} data={data} notFound={notFound}/>
        </>
    )
}

const styles=StyleSheet.create({
    
    container:{
        width:'100%',
        height:50,
        backgroundColor:'white',
        borderRadius:8,
        justifyContent:'center',
        marginTop:5
        
    },
    
    searchInput:{
        width:'80%',
        height:'100%',
        paddingLeft:8,
        fontSize: 16
    }
})

export default SearchBar;