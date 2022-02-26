import React from "react";
import {View,Text , Image,TouchableOpacity,StyleSheet, Dimensions} from 'react-native'

const Tupac = () => {
    return(
        <View>
            <Image
            style={styles.myimage}
            source={{uri:'https://www.linkpicture.com/q/LPic6210b6e169953774980467.jpg'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    myimage:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height/4
    }
})
export default Tupac;