import React,{useState} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import useNews from '../../hooks/useNews'
import Screen from '../common/Screen'
import SearchBar from '../SearchBar'
import BreakingNews from '../BreakingNews'
import SportNews from '../SportNews'
import EntertainmentNews from '../EntertainmentNews'
import TechNews from '../TechNews'
import FeaturedNews from '../FeaturedNews'
import ActivityIndicator from '../common/ActivityIndicator'
import DrawerNavigator from '../navigation/DrawerNavigator'


const Home = () => {
    const [isSearchFocused,setSearchFocused]=useState(false)
    const [featuredNews,techNews,entertainmentNews,breakingNews,sportNews]=useNews();


    return(
      <>
      
      <Screen isSearchFocused={isSearchFocused}>
          
          <SearchBar setSearchFocused={setSearchFocused}/>
          <FeaturedNews />
          <BreakingNews data={breakingNews}/>
          <SportNews data={sportNews}/>
          <TechNews data={techNews}/>
          <EntertainmentNews data={entertainmentNews}/>
          
      </Screen>
      </>
    )
}



export default Home

