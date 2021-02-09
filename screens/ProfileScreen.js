import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const ProfileScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
        <Text>Profil</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default ProfileScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  