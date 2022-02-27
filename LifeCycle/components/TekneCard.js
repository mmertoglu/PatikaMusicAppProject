import React from "react";
import {View,Text,Image,StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import tekne_data from './tekne_data.json'
const TekneCard = (props) => {
    return(
        <View style={{backgroundColor:'#BAFF00',alignItems:'center'}} >
            <Image
            style={styles.img}
            source={{uri:props.tekne.url}}
            />
           <View style={styles.cardcontainer} >
            <Text style={[styles.teknenamestyle,{color:'black'}]} >{props.tekne.isim}</Text>
            <TouchableOpacity style={styles.mybutton} >
                <Text style={styles.teknenamestyle} >Kirala</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cardcontainer:{
        padding:5,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%'
        
    },
    img:{
        width:Dimensions.get('screen').width/1.2,
        height:Dimensions.get('screen').height/4,
        margin:5
    },
    teknenamestyle:{
        color:'black',
        fontSize:24,
        fontWeight:'bold',
       
    },
    mybutton:{
        
        padding:5,
        borderRadius:20,
        width:80,
        alignItems:'center'
    }
})
export default TekneCard