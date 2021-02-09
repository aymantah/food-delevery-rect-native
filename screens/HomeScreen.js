import React from 'react';
import { StyleSheet, View, FlatList, StatusBar } from 'react-native';
import appData from './Data'
import Items from './Items'


const HomeScreen = ({navigation}) => {
    return (
      <View>  
        <StatusBar translucent backgroundColor="transparent" />              
                <View style={styles.cont}>
                    <FlatList
                        data={appData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Items ctgr={item}/>}
                    />
                </View>
                
                
            </View>
    );
  };

  export default HomeScreen;

  const styles = StyleSheet.create({
    cont:{
      marginTop:20,
      marginLeft:8,
      marginRight:8,
  },
  });
  