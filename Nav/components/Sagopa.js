import React,{useState} from "react";
import {View,Text , Image,TouchableOpacity,StyleSheet, Dimensions,FlatList} from 'react-native'
import Sagopa_Card from "./Sagopa_Card";
import sagopa_data from './sagopa_data.json'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tupac = (navigation) => {
    const [follow,setfollow] = useState('Takip Et')
    function isFollow () {
        follow=='Takip Et' ? setfollow('Takip Edildi'):setfollow('Takip Et')
    }
    return(
        <View style={styles.container} >
            <Image
            style={styles.myimage}
            source={{uri:'https://www.linkpicture.com/q/LPic6210dcecc3dc51625820727.jpg'}}
            />
            <Text style={styles.myheadertext}>Sagopa Kajmer</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
            <View >
            <Text style={styles.myaylik} >aylık 2.752.414 dinleyici</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:5}} >
            <TouchableOpacity
            style={styles.myfollowbutton}
            onPress={isFollow}
            >
                <Text style={styles.myaylik} >{follow}</Text>
            </TouchableOpacity>
            <FontAwesome5 name="ellipsis-v" color='#B2AEB4' size={24} style={{marginLeft:60,marginTop:10}} />
            </View>
            </View>
            <FontAwesome5 name="play-circle" size={52} color='#31E210' style={{marginRight:20,marginTop:20}} />
            <FontAwesome5 name="share-alt" size={14} color='#0D0D0D' style={styles.mypublish} />
           
            </View>
            <FlatList
            data={sagopa_data}
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
        fontSize:40,
        color:'white',
        marginTop:10,
        fontFamily:'Montserrat-ExtraBold',
        position:'absolute',
        top:290
    },
    myaylik:{
        color:'white',
        fontSize:14,
        fontWeight:'bold',
        marginTop:5
    },
    myfollowbutton:{
        borderWidth:1,
        borderColor:'#C2BCC6',
        width:100,
        height:40,
        borderRadius:12,
        alignItems:'center',
        marginTop:10,
        marginLeft:2,
        padding:5
    },
    mypublish:{
        marginRight:20,
        marginTop:10,
        backgroundColor:'#31E210',
        position:'absolute',
        right:0,
        top:47,
        borderRadius:20,
        padding:5
    }
})
export default Tupac;