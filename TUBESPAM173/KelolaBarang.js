import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class KelolaBarang extends Component {
  render() {
    return (
      <View style={{
        width:"85%",
        height:39,
        marginHorizontal:35,
        borderWidth:1, 
        borderColor:'#008983', 
        borderRadius:5, 
        backgroundColor:'#FFFFFF',
        //flexDirection:'row',
        marginTop:56,
        position:'relative'
        }}>
         <TextInput placeholder= "Cari" style={{ paddingLeft:12,paddingRight:40, alignItems:'center', }} />
         <Image style={{width:24, height:24,position:'absolute', right:15, top:5}} source= {require('./LogoSearch.png')} />
     </View>

    );
  }
}
const styles = StyleSheet.create({
  
});
