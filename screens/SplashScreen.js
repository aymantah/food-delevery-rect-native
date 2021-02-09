import React from 'react';
import { View, Text, TouchableOpacity, Dimensions,StyleSheet,StatusBar,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SignInScreen from './SignInScreen'


const SplashScreen = ({navigation}) => {


    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#19382b' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logoo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
            <Animatable.Text animation="bounceIn"
                duraton="1500" style={styles.logotext}>Ach_Khassek</Animatable.Text>
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: 'white'
            }]}
            animation="fadeInUpBig"
        >
            <Text style={styles.text}>كنت فدارك ولا فمكان العمل ديالك, {"\n"}خصاتك شي حاجة و ماقدرتيش تخرج تجيبها.{"\n"} فريق أش_خاصك جابليك الحل.{"\n"}قولينا اش خاصك, و غانوصلوهلك حتا لعندك.{"\n"}#حمي راصك, و بقا فدارك.</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=> navigation.navigate('First')}>
                <View style={styles.signIn}>
                    <Text style={styles.textSign}>تصفح</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color='#19382b'
                        size={20}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate(SignInScreen)}>
                <View style={styles.signIn}>
                    <Text style={styles.textSign}>تسجيل الدخول</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color='#19382b'
                        size={20}
                    />
                </View>
            </TouchableOpacity>
            
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#19382b'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical:60,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  logotext: {
    fontSize:24,
    color:'white'
},
  title: {
      color: '#19382b',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  text: {
      color: 'black',
      textAlign: 'center',
      marginTop:-10,
      marginBottom:20
  },
  button: {
      alignItems: 'center',
      marginTop: 25,
      marginLeft:5
  },
  signIn: {
      width: 150,
      height: 35,
      justifyContent: 'center',
      flexDirection: 'row',
  },
  textSign: {
      color: '#19382b',
      fontWeight: 'bold',
      fontSize:16
  }
});

