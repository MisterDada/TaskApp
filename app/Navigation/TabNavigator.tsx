import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from '../Screens/Index';
import CreateTask from '../Screens/CreateTask';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}  >
        
      <Tab.Screen name="Home" component={Index} /> 
      <Tab.Screen name="Create Task" component={CreateTask} /> 
    </Tab.Navigator>
  );
}
