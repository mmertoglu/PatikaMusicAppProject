import React,{useState} from 'react';
import {View,Text,TextInput,FlatList,StyleSheet} from 'react-native'
import music_data from './components/music_data.json'
import Card from './components/Card';

function App (props) {
  const [musicList,setMusicList] = useState(music_data)
  function changeText (veri) {
  const filteredList = musicList.filter(song => {
    const searchedText = veri.toLowerCase();
    const currentTitle = song.title.toLowerCase();
    return currentTitle.indexOf(searchedText) > -1
  });
  veri?setMusicList(filteredList):setMusicList(music_data)
  }
  return(
    <View style={styles.container} >
      <TextInput
      style={styles.mytextinput}
      placeholder='Ara...'
      onChangeText={changeText}

      />
      <FlatList
      data={musicList}
      renderItem={({item}) => <Card sarki={item} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#CBC6C6',
   paddingTop:10
  },
  mytextinput:{
    
    borderRadius:10,
    borderWidth:1,
    backgroundColor:'#F9F4F4',
    marginLeft:2,
    marginRight:2,
    
  }
})
export default App;