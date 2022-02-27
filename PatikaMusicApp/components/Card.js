import React from 'react';
import { View, Text, Image,StyleSheet, Dimensions } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';


function Card(props) {
    return (
        <View style={styles.container}>
            <Image
            style={styles.myimg}
                source={{ uri: props.sarki.imageUrl }}
            />
            <View style={styles.myartistcontainer}>
            <View  style={styles.container2} >
                <Text style={styles.mysongtext} >{props.sarki.title}</Text>
                <View style={{ flexDirection: 'row'}} >
                    <Text style={styles.myartisttext} >{props.sarki.artist}</Text>
                    <Text style={styles.myyeartext} >{props.sarki.year}</Text>

                </View>
            </View>
            {props.sarki.isSoldOut==true?
            <View style={styles.mysoldout} >
                <Text style={styles.soldouttext} >Tükendi</Text>
                </View>
                :null}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:1,
        backgroundColor:'white',
        margin:2,
        padding:5
    },
    myimg:{
        width:Dimensions.get('screen').width/4.2,
        height:Dimensions.get('screen').height/8,
        borderRadius:80,
        marginRight:10
        
    },
    myartistcontainer:{
        flexDirection:'row',
        alignItems:'center',
        width:'75%',
        justifyContent:'space-between'
    },
    mysongtext:{
        color:'black',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:5
        
    },
    myartisttext:{
        color:'black',
        fontSize:14,
        fontWeight:'bold',
        marginRight:5
       
    },
    myyeartext:{
        color:'gray',
        fontSize:12,
        alignSelf:'center'
    },
    container2:{
        width:180,
        
    },
    mysoldout:{
        borderRadius:10,
        borderColor:'#E57777',
        borderWidth:2,
        marginRight:20,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        marginBottom:30
    },
    soldouttext:{
        color:'#E57777'
    }
})
export default Card;