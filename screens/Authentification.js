import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import BottomTabScreen from './BottomTabScreen';


import SplashScreen from './SplashScreen';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';

const Authentification = createStackNavigator();


const AuthentificationScreen = ({navigation}) => (
    <Authentification.Navigator headerMode='none'>
        <Authentification.Screen name="SplashScreen" component={SplashScreen}/>
        <Authentification.Screen name="SignInScreen" component={SignInScreen}/>
        <Authentification.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Authentification.Screen name="First" component={BottomTabScreen}/>

    </Authentification.Navigator>
);

export default AuthentificationScreen;