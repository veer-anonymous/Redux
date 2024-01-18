import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
import React from 'react';
import {moderateScale, moderateVerticalScale, scale, verticalScale} from 'react-native-size-matters';
import {BG_COLOR, Black} from '../../utils/Colors';
// import {TextInput} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SignupForCopany = () => {

    const navigation=useNavigation();
    const GoToLogin=()=>{
        navigation.navigate("Login")
    }
  return (
    <View style={style.container}>
      <Image source={require('../../images/logo.png')} style={style.logo} />
      <Text style={style.title}>Create Account</Text>
      <TextInput placeholder="Enter Name" style={style.input_name} />
      <TextInput placeholder="Enter Email" style={style.inpu_email} />
      <TextInput placeholder="Enter Mobile" style={style.input_mobile} />
      <TextInput
        placeholder="Enter Company Name"
        style={style.input_company_name}
      />
      <TextInput placeholder="Enter Address" style={style.input_address} />
      <TextInput placeholder="Enter password" style={style.inpu_password} />
      <TouchableOpacity style={style.signup_btn}>
        <Text style={style.signup_btn_text}> Sing Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.login_btn} onPress={GoToLogin}>
        <Text style={style.login_btn_text}>Login</Text>
      </TouchableOpacity>
    
    </View>
  );
};

export default SignupForCopany;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: moderateVerticalScale(100),
    height: moderateVerticalScale(100),
  },
  title: {
    fontWeight: '800',
    fontSize: scale(25),
    color: Black,
    marginTop: moderateVerticalScale(10),
  },
  input_name:{
    width:Dimensions.get("window").width/1.2,
    paddingLeft:moderateScale(20),
    borderWidth:1,
    borderRadius:scale(10),
    marginTop:verticalScale(10)
  },
  inpu_email:{
    width:Dimensions.get("window").width/1.2,
    paddingLeft:moderateScale(20),
    borderWidth:1,
    borderRadius:scale(10),
    marginTop:verticalScale(10)
  },
  input_mobile:{
    width:Dimensions.get("window").width/1.2,
    paddingLeft:moderateScale(20),
    borderWidth:1,
    borderRadius:scale(10),
    marginTop:verticalScale(10)
  },
  input_company_name:{
    width:Dimensions.get("window").width/1.2,
    paddingLeft:moderateScale(20),
    borderWidth:1,
    borderRadius:scale(10),
    marginTop:verticalScale(10)
  },
  input_address:{
    width:Dimensions.get("window").width/1.2,
    paddingLeft:moderateScale(20),
    borderWidth:1,
    borderRadius:scale(10),
    marginTop:verticalScale(10)
  },
  inpu_password:{
    width:Dimensions.get("window").width/1.2,
    paddingLeft:moderateScale(20),
    borderWidth:1,
    borderRadius:scale(10),
    marginTop:verticalScale(10)
  },
  signup_btn:{
    width:Dimensions.get("window").width/1.2,
    height:moderateVerticalScale(45),
    borderRadius:scale(10),
    marginTop:verticalScale(10),
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Black
  },
  signup_btn_text:{
    color:BG_COLOR,
    borderRadius:scale(10),
    fontSize:scale(20),
    fontWeight:"800"
  },
  login_btn:{
    width:Dimensions.get("window").width/1.2,
    height:moderateVerticalScale(45),
    borderRadius:scale(10),
    marginTop:verticalScale(10),
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:BG_COLOR,
    borderWidth:1

  },
  login_btn_text:{
    color:Black,
    borderRadius:scale(10),
    fontSize:scale(20),
    fontWeight:"800"
  }
});
