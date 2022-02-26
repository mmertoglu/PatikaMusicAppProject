import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Musiclist from './Musiclist';
import Tupac from './Tupac';



const Tab = createBottomTabNavigator();

 function Navig() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Musiclist" component={Musiclist} />
        <Tab.Screen name="Tupac" component={Tupac} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Navig