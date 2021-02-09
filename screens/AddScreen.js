import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';


const AddScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <TouchableOpacity>
        <Text>المساعدة</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default AddScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  