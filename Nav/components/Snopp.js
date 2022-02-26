import React from "react";
import {View,Text , Image,TouchableOpacity,StyleSheet, Dimensions} from 'react-native'

const Snopp = (navigation) => {
    return(
        <View>
            <Image
            style={styles.myimage}
            source={{uri:'https://www.linkpicture.com/q/LPic6210bba275159491713821.jpg'}}
            />
            <Text style={{marginBottom:20}} >TUPAC</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    myimage:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height/2
    }
})
export default Snopp;