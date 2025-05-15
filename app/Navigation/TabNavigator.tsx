import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from '../Screens/index';
import createTask from '../Screens/createTask';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}  >
        
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="Create Task" component={createTask} /> 
    </Tab.Navigator>
  );
}
