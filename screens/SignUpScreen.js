import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const SignUpScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#19382b' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>فتح حساب</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>اسم المستخدم</Text>
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
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                
                <FontAwesome 
                    name="user-o"
                    color="black"
                    size={20}
                />
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 30
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
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                
                    <Feather 
                    name="lock"
                    color="black"
                    size={20}
                />
                
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 30
            }]}>تاكيد كلمة المرور</Text>
            <View style={styles.action}>
            <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
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
                    placeholder="اعد ادخال كلمة المرور"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <Feather 
                    name="lock"
                    color="black"
                    size={20}
                />

            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    عند النقر على زر التاكيد, فانك تقبل  
                </Text>
            </View>
            <View style={styles.textPrivate2}>
                <Text style={[styles.color_textPrivate, {fontWeight:'bold'}]}>{" "}شروط الخدمة</Text>
                <Text style={styles.color_textPrivate}>{" "}و</Text>
                <Text style={[styles.color_textPrivate, {fontWeight:'bold'}]}>{" "}سياسة الخصوصية</Text>
            </View>
            
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {}}
                >
                <View
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#19382b'
                    }]}>تــأكــيـد </Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color='#19382b'
                        size={20}
                    />
                </View>
                
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#19382b'
                    }]}>عــودة</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color='#19382b'
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignUpScreen;

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
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#19382b',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingHorizontal: 10,
        color: '#05375a',
        textAlign:'right'
    },
    button: {
        alignItems: 'center',
        marginTop: 40
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
    },
    textPrivate: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: 20,
        alignSelf:'flex-end'
    },
    textPrivate2: {
        flexDirection: 'row',
        alignSelf:'flex-end'
    },
    color_textPrivate: {
        color: 'grey'
    },
  });
