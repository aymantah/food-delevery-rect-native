import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import MapScreen from './MapScreen';
import AddScreen from './AddScreen';




const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const MapStack = createStackNavigator();
const AddStack = createStackNavigator();







const BottomTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'الرئيسية',
          tabBarColor:'#19382b',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'الملف الشخصي',
          tabBarColor:'#316d54',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStackScreen}
        options={{
          tabBarLabel: 'السلة',
          tabBarColor:'#092f1f',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddStackScreen}
        options={{
          tabBarLabel: 'مساعدة',
          tabBarColor:'#377b5f',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-information-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default BottomTabScreen;




const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#19382b'
      },
      headerTintColor:'#fff'
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'الرئيسية', headerTitleAlign:'centre', 
      }} />
  </HomeStack.Navigator>
  );
  
  const SearchStackScreen = ({navigation}) => (
    <SearchStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#316d54'
      },
      headerTintColor:'#fff'
    }}>
    <SearchStack.Screen name="Search" component={SearchScreen} options={{
      title:'الملف الشخصي', headerTitleAlign:'centre'}} /> 
  </SearchStack.Navigator>
  );
  
  const MapStackScreen = ({navigation}) => (
    <MapStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#092f1f'
      },
      headerTintColor:'#fff'
    }}>
    <MapStack.Screen name="Map" component={MapScreen} options={{
      title:'سلة المشتريات', headerTitleAlign:'centre'}} /> 
  </MapStack.Navigator>
  );

  const AddStackScreen = ({navigation}) => (
    <AddStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#377b5f'
      },
      headerTintColor:'#fff'
    }}>
    <AddStack.Screen name="Add" component={AddScreen} options={{
      title:'Proposer',
      title:'المساعدة', headerTitleAlign:'centre'}} /> 
  </AddStack.Navigator>
  );

  