import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';

export default class SplashSreen extends Component {
    render() {
      return (
        <TouchableOpacity style={{backgroundColor:'#008D88', flex:1}} onPress={() => this.props.navigation.navigate('Satu')} >

      <StatusBar backgroundColor={"#008D88"} />
         
            
            <Text style={{color:'white',textAlign:'center',marginTop:440, fontFamily:'', fontSize:44, fontWeight:'bold',}}>
              Gudangku
            </Text>

            <Image style={{position:'absolute',right:240,top:250, marginTop:55}} source={require('../../../../LogoSplash.png')} />
            
         
         
        </TouchableOpacity>
      );
    }
  }
  