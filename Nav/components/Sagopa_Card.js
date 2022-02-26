import React,{useState} from "react";
import {View,Text,StyleSheet,Image, Dimensions,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Sagopa_Card = ({sarki}) => {
    const [isfavorite,setisfavorite] = useState(false)
    function updateFavorite () {
        isfavorite==false?setisfavorite(true):setisfavorite(false)
    }
    const [isDownload,setisDownload] = useState('#D3CDD7')
    function updateDownload () {
        isDownload=='#D3CDD7'?setisDownload('#31E210'):setisDownload('#D3CDD7')
    }
    return(
        <View style={styles.mysongview} >
            <Image
            style={styles.mypicture}
            source={{uri:sarki.picture}}
            />
            <View style={styles.mysecondview} >
           <View>
            <Text style={styles.mysongtext} >{sarki.song}</Text>
           <View style={{flexDirection:'row'}} >
           <TouchableOpacity
           onPress={updateDownload}
           >
           <FontAwesome5   name={'arrow-alt-circle-down'} size={16}  color={isDownload} style={styles.mydownloadbutton} />
           </TouchableOpacity>
           <Text style={styles.myartisttext} >{sarki.Artist}</Text>
           </View>
           
            </View>
            <View style={{flexDirection:'row'}} >
            <FontAwesome5   name={'play'} size={18} color='#31E210' style={{marginRight:20,marginTop:10}} />
           
           <TouchableOpacity
           onPress={updateFavorite}
           >
            <FontAwesome5   name={'heart'} solid={isfavorite} size={18} color='#31E210' style={[styles.myheart,{backgroundColor:isfavorite}]} />
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mysongview:{
        backgroundColor:'#0D0D0D',
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        marginTop:10,
        justifyContent:'flex-start',
        
       
        
    },
    mysongtext:{
        color:'white',
        fontSize:16,
        fontFamily:'Ubuntu-Bold'
    },
    mypicture:{
        width:Dimensions.get('screen').width/6,
        height:Dimensions.get('screen').height/16,
        borderRadius:0,
        marginRight:20
    },
    myartisttext:{
        color:'#C2BCC6',
        fontSize:12,
        fontWeight:'bold',
        marginTop:5,
        
    },
    mydownloadbutton:{
        marginRight:10,
        marginTop:5,
        
    },
    mysecondview:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:320

    },
    myheart:{
        marginLeft:0,
        borderRadius:80,
        marginRight:20,
        marginTop:10
    }
})  
export default Sagopa_Card;