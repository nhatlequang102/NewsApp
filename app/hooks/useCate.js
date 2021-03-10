import {useState,useEffect} from 'react'
import newsApi from '../api/newApi'

export default useNews=() =>{
    const[featuredNews,setFeaturedNews]=useState({})
    const[breakingNews,setBreakingNews]=useState([])
    const[techNews,setTechNews]=useState([])
    const[entertainmentNews,setEntertainmentNews]=useState([])
    const[sportNews,setSportNews]=useState([])

    const qty=999
    

    const filterFeaturedNews=(data) =>{
        return data.filter(item=> item.featured ==='on').reverse()[0]
    }

    const filterByCategory=(data,category)=>{
        const result= data.filter(item=> item.category ===category).reverse().splice(0,qty);

        

        
        return result
    }

    const filterMutilpleNews=async()=>{
        
        const allNews=await newsApi.getAll()
        

        setFeaturedNews(filterFeaturedNews(allNews))

        setBreakingNews(filterByCategory(allNews,'breaking-news'));
        setSportNews(filterByCategory(allNews,'sport'))
        setTechNews(filterByCategory(allNews,'tech'))
        setEntertainmentNews(filterByCategory(allNews,'entertainment'))
        
    }

    useEffect(()=>{
        filterMutilpleNews();
    },[]);

    return [featuredNews,techNews,entertainmentNews,breakingNews,sportNews];
} 