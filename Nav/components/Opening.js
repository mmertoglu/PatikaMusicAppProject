import React,{useState} from "react";
import {Text,View,Image,StyleSheet, Dimensions,TouchableOpacity,TextInput, Alert,StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';


const Opening = (props) => {
   const [username,setusername] = useState('')
   const [password,setPassword] = useState('')

     function toggleSwitch (){
        username=='av.muhammedmertoglu'&&password=='mertoglu'? props.navigation.navigate('MusicList'):Alert.alert('Kullanıcı Adınız ya da Şifreniz Hatalı')
    }
    return(
       <LinearGradient 
       start={{x: 0.2, y: 0.1}} end={{x: 0.6, y: 0.8 }}
       colors={['#52c234', '#061700','#061700']} style={{flex:1}} >
        <StatusBar hidden={true}/>

       <View style={styles.container} >
            <FontAwesome5 name="compact-disc" size={120} color='black' style={{alignSelf:'center',marginTop:40}} />
            <Text style={styles.myheader} >TIGON</Text>
          
           <View style={styles.mylogincontainer} >
              
               <Text style={styles.myemailtext} >Email</Text>
               <TextInput onChangeText={text =>setusername(text)} style={styles.mytextinput} ></TextInput>
               <Text style={styles.myemailtext} >Password</Text>
               <TextInput caretHidden={true} style={styles.mytextinput} onChangeText={text => setPassword(text)}  />
               <View style={{flexDirection:'row',justifyContent:'space-around'}} >
               <TouchableOpacity
               onPress={toggleSwitch}
               >
                   <Text style={styles.mygirisyaptext} >Login</Text>
               </TouchableOpacity>
               <TouchableOpacity>
                   <Text style={styles.mygirisyaptext} >Sign In</Text>
               </TouchableOpacity>
               </View>
               
           </View>
           <View style={{flexDirection:'row',marginTop:40,marginLeft:10}}>
            <View style={{height:1,width:180,backgroundColor:'gray'}} ></View>
            <Text style={{color:'white',marginLeft:10,marginTop:-10,marginRight:10}} >or</Text>
            <View style={{height:1,width:180,backgroundColor:'gray'}} ></View>
           </View>
           <View style={{flexDirection:'row',marginTop:40,backgroundColor:'white',width:'60%',alignSelf:'center',padding:5,borderRadius:10,marginBottom:10}} >
               <FontAwesome5 name="google" size={20} color='#EA4335' />
               <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}} >Login With Google</Text>
           </View>
           <View style={{flexDirection:'row',marginTop:0,backgroundColor:'white',width:'60%',alignSelf:'center',padding:5,borderRadius:10,marginBottom:10}} >
               <FontAwesome5 name="facebook" size={20} color='#1F50E3' />
               <Text style={{color:'black',fontSize:16,marginLeft:10,fontWeight:'bold'}} >Login With Facebook</Text>
           </View>
           
           

        </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
   myheader:{
       fontSize:60,
       color:'black',
       fontFamily:'Montserrat-ExtraBold',
       marginBottom:50,
       marginTop:10,
       alignSelf:'center'
   },
   
    mylogincontainer:{
        alignSelf:'center',
        width:'80%',
        borderRadius:10,
        padding:10,
        
    },
    myheadertext:{
        fontSize:30,
        color:'white',
        fontFamily:'Ubuntu-Bold',
        alignSelf:'center',
        
    },
    myemailtext:{
        color:'white',
        fontSize:16,
        margin:10,
        fontWeight:'bold'
    },
    mytextinput:{
        backgroundColor:'#E1E2DA',
        margin:5,
        padding:5,
        borderRadius:10
    },
    mygirisyaptext:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:25 ,
        marginBottom:10   
    }

})
export default Opening;