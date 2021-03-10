import React from 'react'
import { View, StyleSheet,Text } from 'react-native'

const WhiteTittle = ({children,numberOfLines=2,size=19}) => {
    return  (
            <Text  
                numberOfLines={numberOfLines} 
                style={{ fontWeight:'bold',fontSize:size,color:'black'}}>
                {children}
            </Text>
    )
    
}



export default WhiteTittle