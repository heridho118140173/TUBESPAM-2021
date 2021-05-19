import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity,StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import NavBar from '../../../component/molecule/Navigasi';



export default class MenuHome extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#FFFFFF', flex: 1}}>
        <StatusBar backgroundColor={"#008D88"} />
        <ImageBackground style={{width:'100%', height:'60%', flex:1}} source={require('../../../../background.png')} >
          
          <Text style={{color:'white',textAlign:'center',marginTop:55, fontFamily:'', fontSize:44, fontWeight:'bold',}}>
            Sistem Inventori
          </Text>
          <View style={{
            marginTop:56,
            marginBottom:82, 
            marginHorizontal:35,
            //flex:1,
            height:600,
            backgroundColor:'#33A4A0',
            borderRadius:15, 
            
            }}>
            <View style={{flex:1,marginHorizontal:40, marginBottom:80,marginTop:80,justifyContent: 'space-around'}}>
             <TouchableOpacity style={{flex:1,borderRadius:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between', backgroundColor:'#FFFFFF'}} onPress={() => this.props.navigation.navigate('Dua')} >
               <Image style={{marginLeft:60,width:60,height:60}} source={require('../../../../LogoKelola.png')} />
               <Text style={{paddingLeft:50,fontFamily:'', flex:1,fontSize:34, fontWeight:'bold',}}>Kelola Barang</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{marginTop:40,flex:1,borderRadius:15,alignItems:'center',flexDirection:'row',justifyContent:'space-between', backgroundColor:'#FFFFFF'}} onPress={() => this.props.navigation.navigate('Tujuh')} >
               <Image style={{marginLeft:60,width:60,height:60,}} source={require('../../../../LogoPenjualan.png')} />
               <Text style={{paddingLeft:50,fontFamily:'', flex:1,fontSize:34, fontWeight:'bold'}}>Penjualan</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{marginTop:40,flex:1,borderRadius:15,alignItems:'center',flexDirection:'row',justifyContent:'space-between', backgroundColor:'#FFFFFF'}} onPress={() => this.props.navigation.navigate('Empat')} >
               <Image style={{marginLeft:60,width:60,height:60}} source={require('../../../../LogoCatatan.png')} />
               <Text style={{paddingLeft:50,fontFamily:'', flex:1,fontSize:34, fontWeight:'bold'}}>Catatan</Text>
             </TouchableOpacity>
            </View>
          </View>
          
            
          <View style={{alignItems:'center'}}>
          </View>
          
        </ImageBackground>
       
        <NavBar navigation={this.props.navigation} />
      </View>
    );
  }
}
