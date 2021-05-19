import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuHome from './src/containers/pages/MenuHome';
import KelolaData from './src/containers/pages/KelolaData';
import SplashScreen from './src/containers/pages/SplashScreen';
import TambahData from './src/containers/pages/TambahData';
import Calculator from './src/containers/pages/Calculator/App';
import Catatan from './src/containers/pages/Catatan/App';
import EditData from './src/containers/pages/EditData';
import Penjualan from './src/containers/pages/Penjualan';


const RootStack = createStackNavigator();
export default function App () {
  
    return (
      <NavigationContainer>
        <RootStack.Navigator initialRouteName ="Splash" headerMode='none' >
            <RootStack.Screen name="Splash" component={SplashScreen} />
            <RootStack.Screen name="Satu" component={MenuHome} />
            <RootStack.Screen name="Dua" component={KelolaData} /> 
            <RootStack.Screen name="Tiga" component={TambahData} />
            <RootStack.Screen name="Empat" component={Catatan} />
            <RootStack.Screen name="Lima" component={Calculator} />
            <RootStack.Screen name="Enam" component={EditData} />
            <RootStack.Screen name="Tujuh" component={Penjualan} />
       
        </RootStack.Navigator>
      </NavigationContainer>
    );
  
}
