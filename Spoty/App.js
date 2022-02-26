import React,{useState} from 'react';
import {View , Text,FlatList,Image,StyleSheet,TextInput } from 'react-native';
import music_data from './src/music_data.json'
import Card from './src/Card'


function App () {
  const [myMusicList,setmyMucisList] = useState(music_data)
  const [isSoldOut,setisSoldOut] = useState('');
 
  
  const toggleSwitch = (veri) => {
    const filteredList = (myMusicList.filter(newmusic => newmusic.Artist.toLowerCase().includes(veri)
    ||newmusic.myalbum.toLowerCase().includes(veri)))
    veri?setmyMucisList(filteredList):setmyMucisList(music_data)
    return veri
  }
  return(
    <View style={styles.container} >
      <Text style={styles.myheadertext} >SPOTIFY</Text>
      
      <TextInput
      style={styles.mytextinput}
      placeholder='Search...'
      onChangeText={toggleSwitch}
      />
    <FlatList
    contentContainerStyle={{paddingBottom:160}}
    data={myMusicList}
    renderItem={({item}) => <Card album={item} /> }
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0D0D0D',
   
  },
  myheadertext:{
    fontSize:50,
    color:'#96F593',
    alignSelf:'center',
    fontFamily:'Ubuntu-Bold',
    margin:10
    
    
  },
  mytextinput:{
    backgroundColor:'#EBEBF6',
    borderWidth:1,
    borderColor:'white',
    borderRadius:20,
    margin:5
   
  }
})
export default App;
