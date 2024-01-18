import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {BG_COLOR, Black} from '../../utils/Colors';
// import {  useNavigation } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const LoginForCompany = () => {
// //   const navigation=useNavigation();
//   const GotoForgetPassword=()=>{
//       navigation.navigate("FogetPasswordCompany")
//       // navigation.navigate("UserSelect")
//   onPress={GotoForgetPassword}
//   }

  const [email_true,setEmail_true]=useState(false);
  const [password_true,setpassword_true]=useState(false)

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [badpassword, setBadpassword] = useState('');
  const [bademail, setBademail] = useState('');

  const navigation = useNavigation();
  const GoToSignup = () => {
    navigation.navigate('Signup');
  };
  const GoToForgetPassword = () => {
    navigation.navigate('FogetPasswordCompany');
  };

  const validate = () => {
    if (email == '') {
      setBademail('Please Enter Email ');
    } else if (email != 'virendramajhi03@gmail.com') {
      setBademail('Sorry User Name Not Match Please Try again');
    } else if (email != ' ' || email == 'virendramajhi03@gmail.com') {
      setBademail('');
      setEmail_true(true)
    }

    if(password == " "){
        setBadpassword("Please Enter Password ")
    }else if(password != "123456" ){
        setBadpassword("Sorry Wrong Password Please Try again")
    }else if( password != "" || password == "123456"){
        setPassword("")
        setpassword_true(true)
    }

    if(email_true == true && password_true == true){

        const GoToForgetPassword = () => {
            navigation.navigate('FogetPasswordCompany');
          };
          console.log("HIcall")

    }
  };

  useEffect(() => {
    // validate();
  });
  return (
    <View style={style.container}>
      <Image source={require('../../images/logo.png')} style={style.logo} />
      <Text style={style.title}>Create Account</Text>

      <TextInput
        placeholder="Enter Email"
        style={style.input_email}
        value={email}
        onChangeText={(text)=>{
            setEmail(text)
        }}
      />
      <TextInput
        placeholder="Enter Password"
        style={style.input_password}
        value={password}
        onChangeText={(text)=>{
            setPassword(text)
        }}
      />

      <Text style={style.forget_text} onPress={GoToForgetPassword}>
        {' '}
        Forget Password ?{' '}
      </Text>

      <TouchableOpacity style={style.signup_btn} onPress={GoToSignup}>
        <Text style={style.signup_btn_text}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.login_btn} onPress={GoToForgetPassword}>
        <Text style={style.login_btn_text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForCompany;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
  title: {
    marginTop: moderateVerticalScale(10),
    fontSize: moderateScale(25),
    fontWeight: '900',
    color: Black,
  },
  input_email: {
    width: Dimensions.get('window').width / 1.2,
    height: scale(50),
    borderWidth: 1,
    padding: scale(10),
    borderRadius: 10,
    marginTop: moderateVerticalScale(20),
  },
  input_password: {
    width: Dimensions.get('window').width / 1.2,
    height: scale(50),
    borderWidth: 1,
    padding: scale(10),
    borderRadius: 10,
    marginTop: moderateVerticalScale(20),
  },
  forget_text: {
    marginTop: moderateVerticalScale(10),
    fontSize: moderateScale(15),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: moderateScale(40),
    color: Black,
    fontWeight: '400',
  },
  signup_btn: {
    width: Dimensions.get('window').width / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Black,
    height: moderateScale(45),
    borderRadius: moderateScale(10),
    marginTop: moderateVerticalScale(20),
  },
  signup_btn_text: {
    color: BG_COLOR,
    fontSize: moderateScale(20),
    fontWeight: '500',
  },
  login_btn: {
    width: Dimensions.get('window').width / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BG_COLOR,
    height: moderateScale(45),
    borderRadius: moderateScale(10),
    marginTop: moderateVerticalScale(20),
    borderWidth: 1,
  },
  login_btn_text: {
    color: Black,
    fontSize: moderateScale(20),
    fontWeight: '800',
  },
});
// if forget passwor then
//   <TextInput placeholder='Enter Name'/>
//   <TextInput placeholder='Enter Email'/>
//   <TextInput placeholder='Enter Mobile'/>
//   <TextInput placeholder='Enter Company Name'/>
//   <TextInput placeholder='Enter  Company Location'/>
//   <Text>accept t & c</Text>
//     <Text>LoginForCompany</Text>
