import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 const NavBar =(props) => {
    
    return (
        <View style= {{height:97, backgroundColor:'#008D88', flexDirection:'row',}}>
                <View style={{ flex :1, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={{width:80, height:47, backgroundColor:'white', alignItems:'center', justifyContent:'center'}} onPress={() => props.navigation.navigate('Satu')} >
                    <Image source={require('../../../../LogoHome.png')}  />
                    </TouchableOpacity>
                    <Text>Home</Text>
                </View>
                <View style={{ flex :1, alignItems:'center', justifyContent:'center'}} >
                 
                    <Image style={{width:72, height:72, position:'absolute', top:-30}} source={require ('../../../../LogoCal.png')} />
                    <TouchableOpacity onPress={() => props.navigation.navigate('Lima')} >
                    < Text>Calculator</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex :1, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={{width:80, height:47, backgroundColor:'white', alignItems:'center', justifyContent:'center'}} onPress={() => props.navigation.navigate('Empat')} >
                    <Image source={require('../../../../LogoNavCat.png')} />
                    </TouchableOpacity>
                    <Text>Catatan</Text>
                </View>
                </View>
         )
    }

export default NavBar;