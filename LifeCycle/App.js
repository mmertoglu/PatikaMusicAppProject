import React,{useState,useEffect} from "react";
import {View,Text,TouchableOpacity,FlatList} from 'react-native';
import TekneCard from "./components/TekneCard";
import tekne_data from './components/tekne_data.json'


function App (props) {
  
  return(
  <View>
    <FlatList
    data={tekne_data}
    renderItem={({item}) => <TekneCard tekne={item} /> }
    />
  </View>
  )
}
export default App;