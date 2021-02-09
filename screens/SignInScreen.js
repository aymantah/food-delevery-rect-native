import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../components/context';



import Users from '../Helpers/users';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);


    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('خطأ في الادخال', 'اسم المستخدم او كلمة المرور لا يمكن ان تكون فارغة', [
                {text: 'حسننا'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('خطأ في الادخال', 'اسم المستخدم او كلمة المرور خاطئة', [
                {text: 'حسننا'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#19382b' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>مرحبا بك</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: 'white'
            }]}
        >
            <Text style={[styles.text_footer, {
                color: 'black'
            }]}>اسم المستخدم</Text>
            <View style={styles.action}>
            {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
                <TextInput 
                    placeholder="ادخل اسم المستخدم"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'black'
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                <FontAwesome 
                    name="user-o"
                    color='black'
                    size={20}
                />
                
            </View>
                    
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>يجب ان يحتوي اسم المستخدم على 4 احرف او اكثر.</Text>
            </Animatable.View>
            }
        
            <Text style={[styles.text_footer, {
                color: 'black',
                marginTop: 35
            }]}>كلمة المرور</Text>
            <View style={styles.action}>
            <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
                <TextInput 
                    placeholder="ادخل كلمة المرور"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'black'
                    }]}
                    autoCapitalize="none"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    secureTextEntry={true}
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <Feather 
                    name="lock"
                    color={'black'}
                    size={20}
                />
                
                    
                               
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>يجب ان تحتوي كلمة المرور على 8 احرف او اكثر.</Text>
            </Animatable.View>
            }
            
            <TouchableOpacity>
                <Text style={{color: '#19382b', marginTop:15, marginBottom:40}}>نسيت كلمة المرور ؟</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {signIn()}}
                >
                <View
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#19382b'
                    }]}>تسجيل الدخول</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color='#19382b'
                        size={20}
                    />
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        

                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#19382b'
                    }]}>فتح حساب</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color='#19382b'
                        size={20}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#19382b'
                    }]}>الرئيسية</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color='#19382b'
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#19382b'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        color: '#05375a',
        textAlign:'right'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginVertical:10
    },
    signIn: {
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
