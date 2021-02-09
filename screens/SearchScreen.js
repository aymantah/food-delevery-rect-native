import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../components/context';




const SearchScreen = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext);
    return (
      <View style={{flex:1}}>
                <View style={styles.Content1}>
                    <View style={styles.Info}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>أيمن الطهري</Title>
                                <Caption style={styles.role}>العروي</Caption>
                            </View>
                            <Avatar.Image 
                                source={require('../assets/logoo.png')}
                                size={80}
                            />
                        </View>
                    </View>
                    
                </View>
            <TouchableOpacity style={styles.bottom} onPress={() => {signOut()}}>
              <Text style={{color: '#19382b',marginTop:6,fontSize:15,fontWeight:'bold', marginRight:5}}>تسجيل الخروج</Text>
              <Icon name="exit-to-app" color='#19382b' size={30} />            
            </TouchableOpacity>
      </View>
        
    );
  };

  export default SearchScreen;

  const styles = StyleSheet.create({
    Content1: {
      flex: 1,
      alignSelf:'flex-end',
      marginRight:20
    },
    Info: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 20,
      marginTop: 22,
      marginRight:20,
      fontWeight: 'bold',
      color:'#19382b',

    },
    role: {
      fontSize: 15,
      lineHeight: 14,
      color:'#19382b',
      alignSelf:'flex-end',
      marginRight:25
    },
    Section: {
      marginTop: 55,
      borderTopColor: '#f4f4f4',
        borderTopWidth: 2
    },
    bottom: {
        marginBottom: 15,
        marginRight:15,
        alignSelf:'flex-end',
        flexDirection:'row'
    },
  });
  