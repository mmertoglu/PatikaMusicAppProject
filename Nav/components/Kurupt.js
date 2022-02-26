import React,{useState} from "react";
import {View,Text , Image,TouchableOpacity,StyleSheet, Dimensions,FlatList} from 'react-native'
import Sagopa_Card from "./Sagopa_Card";
import kurupt_data from './kurupta_data.json'

const Kurupt = (navigation) => {
    const [follow,setfollow] = useState('Takip Et')
    function isFollow () {
        follow=='Takip Et' ? setfollow('Takip Edildi'):setfollow('Takip Et')
    }
    return(
        <View style={styles.container} >
            <Image
            style={styles.myimage}
            source={{uri:'https://www.cheatsheet.com/wp-content/uploads/2019/09/rapper-kurupt.jpg'}}
            />
            <Text style={styles.myheadertext}>Kurupt</Text>
            <Text style={styles.myaylik} >aylık 1.022.448 dinleyici</Text>
            <TouchableOpacity
            style={styles.myfollowbutton}
            onPress={isFollow}
            >
                <Text style={styles.myaylik} >{follow}</Text>
            </TouchableOpacity>
            <FlatList
            data={kurupt_data}
            renderItem={({item}) => <Sagopa_Card sarki={item} /> }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0D0D0D',
        
    },
    myimage:{
        width:Dimensions.get('window').width/1,
        height:Dimensions.get('window').height/2.2
    },
    myheadertext:{
        fontSize:36,
        color:'white',
        marginTop:10,
        fontFamily:'Montserrat-ExtraBold',
        position:'absolute',
        top:300
    },
    myaylik:{
        color:'#C2BCC6',
        fontSize:14,
        fontWeight:'bold',
        marginTop:5
    },
    myfollowbutton:{
        borderWidth:1,
        borderColor:'white',
        width:100,
        height:40,
        borderRadius:12,
        alignItems:'center',
        marginTop:10,
        marginLeft:2,
        padding:5
    }
})
export default Kurupt;