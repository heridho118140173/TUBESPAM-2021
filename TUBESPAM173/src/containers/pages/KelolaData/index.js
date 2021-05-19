import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button,TouchableOpacity } from 'react-native';

import Tambah from '../../../component/molecule/dataBarang';
import KelolaBarang from '../../../../KelolaBarang';
import NavBar from '../../../component/molecule/Navigasi';

export default class KelolaData extends Component {

    constructor(props) {
        super(props);
        this.state = {
        namabarang:'',
        harga:'',
        listData:[],
        idEdit:null,
        };
        this.url = "http://192.168.43.249/inventori/inventori.php?op=showalluser";
        }
        componentDidMount(){
        this.ambilListData()
        }
    async ambilListData(){
        await fetch(this.url)
        .then((response)=>response.json())
        .then((json)=>{
        console.log('Hasil yang didapat:'+JSON.stringify(json.data.result));

        this.setState({listData:json.data.result});
        })
        .catch((error)=>{
        console.log(error);
        })
        }
        

    render() {
    return (
        <View style={{flex:1}} >
        <View style={{flex:1}}  >
        <ScrollView  >
        <KelolaBarang />
        <View style={{flex:1,width:'100%',height:1500, backgroundColor:"#E5E5E5", alignItems:'center', paddingTop:40,alignItems:'center'}}>

        {/* <View style={{marginTop:40,width:'85%',height:150,backgroundColor:'#FFFFFF',borderRadius:10, flexDirection:'row', paddingVertical:30, paddingHorizontal:90 }}>
            <View style={{paddingTop:20, paddingLeft:25,marginRight:50}}>
            <Text style={{textAlign:'center', justifyContent:'center',fontWeight:'700', fontSize:24, }}>Minyak Lintah</Text>
            <Text style={{ fontsize:14,justifyContent:'center'}}>Rp. 20000 </Text>
            </View>
            <View style={{paddingHorizontal:35,justifyContent:'space-between' }}>
                <View style={{backgroundColor:'#008983', borderRadius:5}}>
                <Text style={{color:'#FFFFFF', padding:6}}>Edit</Text>
                </View> 
                <View>
                <View style={{backgroundColor:'red',borderRadius:5, marginTop:20}}>
                <Text style={{color:'#FFFFFF', padding:6}}>Hapus</Text>
                </View>
                </View>
            </View>
        </View> */}
        

        {
       
        this.state.listData.map((val,index)=>(
  
         <Tambah key={index} nama={val.namabarang} harga={val.harga} id={val.id} navigation={this.props.navigation} />
       
        ))
        }

        </View>
        </ScrollView>
        </View >
        <TouchableOpacity style={{position:'absolute', right:50, top:810}} onPress={() => this.props.navigation.navigate('Tiga')} >
        <Image source={require('../../../../LogoTambah.png')}  />
        </TouchableOpacity>
        <NavBar navigation={this.props.navigation} />
        
        </View>

       )
    }
}
