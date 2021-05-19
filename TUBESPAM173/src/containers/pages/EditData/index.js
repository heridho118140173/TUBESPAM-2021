import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity } from 'react-native';

export default class EditData extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        namabarang:'',
        harga:'',
        // id:this.props,
        listData:[],
        idEdit:null,
        };
        this.url = "http://192.168.43.249/inventori/inventori.php";
        }
        componentDidMount(){
            this.ambilListData()
            }
        async ambilListData(){
            await fetch(this.url+'?op=detail&id='+6)
            .then((response)=>response.json())
            .then((json)=>{
            console.log('Hasil yang didapat:'+JSON.stringify(json.data.result));
                
            const TampungNama = json.data.result[0].namabarang
            const TampungHarga = json.data.result[0].harga

            this.setState({namabarang:TampungNama});
            this.setState({harga:TampungHarga});
        })
            .catch((error)=>{
            console.log(error);
            })
            }
        
            klikSimpan(){
                if(this.state.nama == '' || this.state.alamat == ''){
                alert('Silakan masukkan nama dan alamat');
                }else{
                
                var urlAksi =
                this.url+"/?op=update&id="+6;
                
                fetch(urlAksi,{method:'post',headers:{
                'Content-Type':'application/x-www-form-urlencoded'
                
                },
                
                body:"namabarang="+this.state.namabarang+"&harga="+this.state.harga
                })
                .then((response)=>response.json())
                .then((json)=>{
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
                    <Text style={{color:'#FFFFFF', padding:6, textAlign:'center'}}>Simpan Perubahan</Text>
                  </TouchableOpacity> 

         

         </View>
      );
    }
  }
  