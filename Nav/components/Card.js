import React from "react";
import {View, Text, Image,StyleSheet, Dimensions , TouchableOpacity} from 'react-native';



const Card = (props) => {
    return(
        <TouchableOpacity
       onPress={()=>props.navigation.navigate(props.album.mycomponent)}
        >
        <View style={[styles.container,{backgroundColor:props.album.color}]} >
            <Image
            style={styles.myimgstyle}
            source={{uri:props.album.ImgUrl}} />
            <View style={styles.myartistalbumcontainer} >
            <Text style={styles.myartistText} >{props.album.Artist}</Text>
            <Text style={styles.myartistText} >{props.album.myalbum}</Text>
            
            </View>
            {props.album.SoldOut==true?(
            <View style={styles.mysoldout} >
            <Text style={[styles.myartistText,{marginRight:20}]} >Tükendi</Text>
            </View>
            ):null}
            
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:5,
        marginTop:20,
        borderRadius:20,
       
        
        
    },
    myimgstyle: {
        width:Dimensions.get('window').width/4,
        height:Dimensions.get('window').height/8,
        borderRadius:100,
       
    },
    myartistText:{
        color:'white',
        fontSize:14,
        marginLeft:20,
        fontWeight:'600'
        
    },
    myartistalbumcontainer:{
        justifyContent:"space-evenly",
        
    },
    mysoldout:{
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        height:40,
        marginTop:25,
        justifyContent:'center'
        
    }
})

export default Card;