import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import AuthentificationScreen from './screens/Authentification'
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from './components/context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParts } from './screens/DrawerParts'
import ProfileScreen from './screens/ProfileScreen'
import BottomTabScreen from './screens/BottomTabScreen'
import SettingScreen from './screens/SettingScreen'
import FaqScreen from './screens/FaqScreen'

const Drawer = createDrawerNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();
const FaqStack = createStackNavigator();


const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#e24040'
    },
    headerTintColor:'#fff'
  }}>
  <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
    title:'Profil',
    headerLeft:() => (
      <Icon.Button name="ios-menu" size={25} backgroundColor='#e24040'
      onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }} />
</ProfileStack.Navigator>
);

const SettingStackScreen = ({navigation}) => (
  <SettingStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#e24040'
    },
    headerTintColor:'#fff'
  }}>
  <SettingStack.Screen name="Setting" component={SettingScreen} options={{
    title:'Reglege',
    headerLeft:() => (
      <Icon.Button name="ios-menu" size={25} backgroundColor='#e24040'
      onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }} />
</SettingStack.Navigator>
);

const FaqStackScreen = ({navigation}) => (
  <FaqStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#e24040'
    },
    headerTintColor:'#fff'
  }}>
  <FaqStack.Screen name="Faq" component={FaqScreen} options={{
    title:'Aide',
    headerLeft:() => (
      <Icon.Button name="ios-menu" size={25} backgroundColor='#e24040'
      onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }} />
</FaqStack.Navigator>
);


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('haha')
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null)
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('haha')
      setIsLoading(false);
    },
  }));


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      
    }, 100);
  });

  if(isLoading) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return(
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { userToken !== null ? (
         <Drawer.Navigator drawerContent={props => <DrawerParts { ...props} /> }>
        <Drawer.Screen name="First" component={BottomTabScreen} />
        {/* <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Faq" component={FaqStackScreen} />
        <Drawer.Screen name="Setting" component={SettingStackScreen} />
        <Drawer.Screen name="draw" component={DrawerParts} /> */}
      </Drawer.Navigator> 
      )
      :
      <AuthentificationScreen />
      }
      
    </NavigationContainer>
    </AuthContext.Provider>
  )
}


export default App;
