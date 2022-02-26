// In App.js in a new project

import * as React from 'react';
import { View, Text,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Musiclist from './components/Musiclist';
import Tupac from './components/Tupac';
import Card from './components/Card';
import Massaka from './components/Massaka';
import Killa from './components/Killa';
import Biggie from './components/Biggie';
import Eminem from './components/Eminem';
import Dre from './components/Dre';
import Snopp from './components/Snopp';
import Ice from './components/Ice';
import Cent from './components/Cent';
import Kurupt from './components/Kurupt';
import Eazy from './components/Eazy';
import Ezhel from './components/Ezhel';
import Kst from './components/Kst';
import Kendrick from './components/Kendrick';
import Dubc from './components/Dubc';
import Sagopa from './components/Sagopa';
import Opening from './components/Opening';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      >
        
         <Stack.Screen name="Opening" component={Opening}/>
        <Stack.Screen name="MusicList" component={Musiclist} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Tupac" component={Tupac} />
        <Stack.Screen name="Massaka" component={Massaka}/>
        <Stack.Screen name="Killa" component={Killa}/>
        <Stack.Screen name="Biggie" component={Biggie}/>
        <Stack.Screen name="Eminem" component={Eminem}/>
        <Stack.Screen name="Dre" component={Dre}/>
        <Stack.Screen name="Snopp" component={Snopp}/>
        <Stack.Screen name="Ice" component={Ice}/>
        <Stack.Screen name="Cent" component={Cent}/>
        <Stack.Screen name="Kurupt" component={Kurupt}/>
        <Stack.Screen name="Eazy" component={Eazy}/>
        <Stack.Screen name="Ezhel" component={Ezhel}/>
        <Stack.Screen name="Kst" component={Kst}/>
        <Stack.Screen name="Kendrick" component={Kendrick}/>
        <Stack.Screen name="Dubc" component={Dubc}/>
        <Stack.Screen name="Sagopa" component={Sagopa}/>
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;