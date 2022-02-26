import React from "react";
import {View,Text , Image,TouchableOpacity,StyleSheet, Dimensions} from 'react-native'
import music_data from './music_data.json'

const Cent = (props) => {
    return(
        <View>
            <Image
            style={styles.myimage}
            source={{uri:'https://www.linkpicture.com/q/LPic6210bc4bdad901739351143.jpg'}}
            />
            <Text style={{marginBottom:20}} >TUPAC</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    myimage:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height/3
    }
})
export default Cent;