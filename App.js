/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './app/component/navigation/AppNavigator'
import DrawerNavigator from './app/component/navigation/DrawerNavigator'


export default function App(){
    return (
      <NavigationContainer>
          
          <AppNavigator/>
          
      </NavigationContainer>
    )
}
