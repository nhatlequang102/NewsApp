import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import WeatherHome from '../weather/WeatherHome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DrawerNavigator from './DrawerNavigator'

const Tab = createBottomTabNavigator()
const BottomNavigator= () => {
  return (
    <>
      
      
        <Tab.Navigator
         screenOptions={({route})=>({
            tabBarIcon:({color})=>{
              let iconName;
              if(route.name==="Trang chủ"){
                iconName = 'home'
              }else if(route.name==="Thời tiết"){
                iconName = "weather-partly-snowy-rainy"
              }else if(route.name==="Thành phố"){
                  iconName="city"
              }
                
              return <MaterialCommunityIcons name={iconName} size={25} color={color} />
            }
          })}
          tabBarOptions={{
            activeTintColor:"#ffffff",
            inactiveTintColor:"#a3c2fa",
            activeBackgroundColor:"#2163f6",
            inactiveBackgroundColor:"#2163f6"
          }}
        >
          <Tab.Screen name="Trang chủ" options={{headerShown:false}} component={DrawerNavigator}/>  
          <Tab.Screen name="Thời tiết" component={WeatherHome} 
           initialParams={{city:"hanoi"}}
          />
          
        </Tab.Navigator>
      
   </>
  );
};


export default BottomNavigator;