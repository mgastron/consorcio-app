import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UnitExpensesScreen from './src/screens/UnitExpensesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProfileDetailsScreen from './src/screens/ProfileDetailsScreen';
import MyUnitsScreen from './src/screens/MyUnitsScreen';
import CommunicationsScreen from './src/screens/CommunicationsScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import OnboardingScreen2 from './src/screens/OnboardingScreen2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UnitExpenses">
        <Stack.Screen 
          name="UnitExpenses" 
          component={UnitExpensesScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProfileDetails" 
          component={ProfileDetailsScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MyUnits" 
          component={MyUnitsScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Communications" 
          component={CommunicationsScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="OnboardingStep2" 
          component={OnboardingScreen2} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 