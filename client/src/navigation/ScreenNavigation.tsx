import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerShown: false, // shows the header
            headerStyle: {
              //   backgroundColor: '#6200EE', // header background color
              backgroundColor: 'black',
            },
            headerTintColor: '#fff', // back button and title color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerTransparent: false, // try true if you want content to go under header
            gestureEnabled: true, // enable swipe back
            headerShadowVisible: true, // show shadow (iOS)
            headerBackTitleVisible: false, // hide back button text (iOS)
            animation: 'slide_from_right', // screen transition animation
            presentation: 'card', // default screen presentation
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('Settings')}>
                <Text style={{color: '#fff', marginRight: 10}}>Settings</Text>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => alert('Menu')}>
                <Text style={{color: '#fff', marginLeft: 10}}>Menu</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;
