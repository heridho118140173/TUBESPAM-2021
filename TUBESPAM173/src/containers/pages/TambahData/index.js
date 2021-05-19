import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity } from 'react-native';

export default class SplashSreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        namabarang:'',
        harga:'',
        listData:[],
        idEdit:null,
        };
        this.url = "http://192.168.43.249/inventori/inventori.php";
        }
  
        klikSimpan(){
            if(this.state.namabarang == '' ||
            this.state.harga == ''){
            alert('Silakan masukkan nama dan harga');
            }else{
            if(this.state.idEdit){
            var urlAksi =
            this.url+"/?op=update&id="+this.state.idEdit;
             }else{
            var urlAksi = this.url+"?op=create";
             }
            fetch(urlAksi,{
             method:'post',
             headers:{
            
                'Accept': 'application/json', 'Content-type': 'application/json'
            
             },
            
             body:JSON.stringify({
				namabarang: this.state.namabarang,
				harga: this.state.harga,
				
			}),
            })
            .then((response)=>response.json())
            .then((json)=>{
            this.setState({namabarang:''});
            this.setState({harga:''});
            this.props.navigation.navigate('Dua')
            })
            }
            }

    render() {
      return (
        <View>
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
             <TextInput placeholder= "Nama Barang" style={{ paddingLeft:12,paddingRight:40, alignItems:'center' }} value={this.state.namabarang} onChangeText={(text)=>this.setState({namabarang:text})} />
             
         </View>
        
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
            marginBottom:50,
            position:'relative'
            }}>
             <TextInput placeholder= "Harga" style={{ paddingLeft:12,paddingRight:40, alignItems:'center', }} value={this.state.harga} onChangeText={(text)=>this.setState({harga:text})} />
             
         </View>
         <TouchableOpacity style={{backgroundColor:'#008983', borderRadius:5}} onPress={()=>this.klikSimpan()} >
                    <Text style={{color:'#FFFFFF', padding:6, textAlign:'center'}}>Tambah data</Text>
                  </TouchableOpacity> 
         

         </View>
      );
    }
  }
  