import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';


const Tambah= (props) =>{
  
  const url = "http://192.168.43.249/inventori/inventori.php";
  const klikDelete = async (id) => {
    await fetch(url+"?op=delete&id="+id)
    .then((response)=>response.json())
    .then((json)=>{
    alert('Data berhasil didelete');
    
    })
    .catch((error)=>{
    console.log(error)
   })
    }

    


  return(
    <View style={{marginTop:40,width:'85%',height:150,backgroundColor:'#FFFFFF',borderRadius:10, flexDirection:'row', paddingVertical:30, paddingHorizontal:90 }}>
              <View style={{paddingTop:20, paddingLeft:25,marginRight:50}}>
                <Text style={{textAlign:'center', justifyContent:'center',fontWeight:'700', fontSize:24, }}>{props.nama}</Text>
                <Text style={{ fontsize:14,justifyContent:'center'}}>{props.harga} </Text>
              </View>
              <View style={{paddingHorizontal:35,justifyContent:'space-between' }}>
                  <TouchableOpacity style={{backgroundColor:'#008983', borderRadius:5}} onPress={() => props.navigation.navigate('Enam',{id:props.id})} >
                    <Text style={{color:'#FFFFFF', padding:6}}>Edit</Text>
                  </TouchableOpacity> 
                  <View>
                    <TouchableOpacity style={{backgroundColor:'red',borderRadius:5, marginTop:20}} onPress={() =>klikDelete(props.id) } >
                    <Text style={{color:'#FFFFFF', padding:6}}>Hapus</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
  )
}

export default Tambah;