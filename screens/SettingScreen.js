import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const SettingScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
        <Text>Reglage</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default SettingScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  