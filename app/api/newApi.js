import apiClient from './client'

const getAll=async() =>{
    try{
        const reponse=await apiClient.get('/news')
        if(reponse.data.success){
            return  reponse.data.news
        }
    }catch(error){
        console.log('Gặp lỗi khi lấy các tin tức ! ',error.message)
        return[];
    }

}

const getSingle=async(id)=>{
    try{
        const reponse=await apiClient.get(`/news/single/${id}`)
        if(reponse.data.success){
            return  reponse.data.news
        }
    }catch(error){
        console.log('Gặp lỗi khi lấy  tin tức ! ',error.message)
    }
}

const getByCategory=async(category,qty)=> {
    const endpoint=qty ? `/news/${category}/${qty}` : `/news/${category}`
    console.log("endpoint",endpoint)
    try{
        const reponse=await apiClient.get(endpoint)
        if(reponse.data.success){
            return  reponse.data.news
        }
    }catch(error){
            return[];
            console.log('Gặp lỗi khi lấy thể loại tin tức ! ',error.message)
    }
}

const searchPost=async(query)=>{
    console.log("query",query)
    const body = {
        query
    }
    if(!query) return {}
    try {
        const response=await apiClient.post(`/news/search/${query}`,body,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        console.log('Loi khi tim kiem-searchPost   ',error)
    }
    
}

export default{
    getAll,
    getByCategory,
    getSingle,
    searchPost,
}