import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Alert, View,TouchableOpacity,TextInput,Image,Dimensions,Asyncstorage, ImageBackground,} from 'react-native';
var http = require('../../api/config')
const imageBackground = require('../../../assets/crop.jpg');
  export default class Login extends Component{	
    constructor(props){
    super(props);
    this.state={	
      username:"",
      password:"",
    }	
  }
  
    _onSubmit=()=>{
  fetch(http().HTTP('login'),{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
        })
    })
    .then((response) => response.json())
    .then(res => {
      if(res.recordset.length === 0) {
        return Alert.alert("Loi vui long dang nhap lai")
      }else {
        return this.props.navigation.navigate("Home")
      }
    })
    .catch((e) => {
      console.log(e)
    })
  }
  render() {
    return (
  
    <View style={styles.container}>
    <ImageBackground source={imageBackground} style={styles.containerBackground}>
    <Image style={styles.logo} source={require('../../../assets/logo1.png')}/>
        <TextInput placeholder="Username"
       placeholderTextColor="black"
       keyboardType="default"
       
           underlineColorAndroid="transparent"	
       style={styles.txtInput} 
       onChangeText={(username) => this.setState({username:username})}/>
    <TextInput placeholder="Password"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          keyboardType="default"
          secureTextEntry={true}
          style={styles.txtInput}
          onChangeText={(password) => this.setState({password:password})}/>
             
        <TouchableOpacity onPress={this._onSubmit} style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Đăng nhập</Text>
        </TouchableOpacity>
         				
    </ImageBackground>
    </View>

    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    containerBackground:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'stretch',
     width:null,
     height:null,

  },
  logo:{
    
    justifyContent:'center',
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title:{
    fontSize:30,
    color:'blue'
  },
  txtInput:{
    backgroundColor: 'rgba(0,0,0, 0.1)',
    width: DEVICE_WIDTH - 40,
    padding:10,
    marginHorizontal: 20,
    borderRadius: 20,
    color: 'white',
    marginTop:15,
  },
  btnLogin:{
     width: DEVICE_WIDTH - 40,
     backgroundColor:'rgba(0,145,234,1)',
     padding:8,
     borderRadius: 20,
     marginTop:25,
     marginBottom:150,
 
  },
  txtLogin:{
    color:'#fff',
    textAlign:'center'
  },
  btnSingnUp:{
  width: DEVICE_WIDTH - 40,
  backgroundColor:'rgba(0,145,234,1)',
  padding:8,
  borderRadius: 20,
  marginTop:2,
  color:'#fff',
    textAlign:'center'
 },
});
