import React,{useState} from "react";
import {View,Text , Image,TouchableOpacity,StyleSheet, Dimensions,FlatList} from 'react-native'
import Sagopa_Card from "./Sagopa_Card";
import massaka_data from './massaka_data.json'

const Massaka = (navigation) => {
    const [follow,setfollow] = useState('Takip Et')
    function isFollow () {
        follow=='Takip Et' ? setfollow('Takip Edildi'):setfollow('Takip Et')
    }
    return(
        <View style={styles.container} >
            <Image
            style={styles.myimage}
            source={{uri:'https://haberekspress.com.tr/wp-content/uploads/2021/06/hl-707343458.jpg'}}
            />
            
            <Text style={styles.myheadertext}>Massaka</Text>
            <Text style={styles.myaylik} >aylık 985.211 dinleyici</Text>
            <TouchableOpacity
            style={styles.myfollowbutton}
            onPress={isFollow}
            >
                <Text style={styles.myaylik} >{follow}</Text>
            </TouchableOpacity>
            <FlatList
            data={massaka_data}
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
        fontSize:60,
        color:'white',
        marginTop:10,
        fontFamily:'Montserrat-ExtraBold',
        position:'absolute',
        top:280,
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
export default Massaka;