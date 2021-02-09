import React from 'react';
import { StyleSheet, View } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export function DrawerParts(props) {

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.Content1}>
                    <View style={styles.Info}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../assets/icon.png')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Ayman Tahri</Title>
                                <Caption style={styles.role}>Covoitureur</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.Section}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Accueil"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profil"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Reglage"
                            onPress={() => {props.navigation.navigate('Setting')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="help-circle-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Aide"
                            onPress={() => {props.navigation.navigate('Faq')}}
                        />
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottom}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
   
);
}

export default DrawerParts;

const styles = StyleSheet.create({
    Content1: {
      flex: 1,
    },
    Info: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 18,
      marginTop: 3,
      fontWeight: 'bold',
    },
    role: {
      fontSize: 13,
      lineHeight: 14,
    },
    Section: {
      marginTop: 55,
      borderTopColor: '#f4f4f4',
        borderTopWidth: 2
    },
    bottom: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 2
    },
  });