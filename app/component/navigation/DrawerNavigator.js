import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator,DrawerContentScrollView,
    DrawerItem,DrawerItemList, } from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native'
import Home from '../screens/Home'
import setting from '../screens/setting'
import Entertainment from '../screens/Entertainment'
import breaknew from '../screens/breaknew'
import sport from '../screens/sport'

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
       
        <DrawerItem
          label="Đăng xuất"
          onPress={()=>props.navigation.popToTop()}
        />

      </DrawerContentScrollView>
    );
  }



const  DrawerNavigator=() =>{
    
    return (
        
            <Drawer.Navigator drawerContent={props=><CustomDrawerContent {...props} />}>
                
                <Drawer.Screen name="Trang chủ" component={Home} />
                <Drawer.Screen name="Tin công nghệ" component={setting}/>
                <Drawer.Screen name="Tin giải trí" component={Entertainment}/>
                <Drawer.Screen name="Tin hot" component={breaknew}/>
                <Drawer.Screen name="Tin thể thao" component={sport}/>
                
                
                
            </Drawer.Navigator>
           
        
    )
}   

const styles = StyleSheet.create({
    tcL:{
        backgroundColor:"red"
    }
})
export default DrawerNavigator