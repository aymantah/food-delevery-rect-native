import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const FaqScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
        <Text>Aide</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default FaqScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  