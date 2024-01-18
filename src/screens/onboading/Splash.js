import {View, Text, StyleSheet, Image} from 'react-native';
import React, { useEffect } from 'react';
import {BG_COLOR, Black} from '../../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{

            navigation.navigate("UserSelect")
        },3000)
    },)
  return (
    <View style={style.container}>
      <Image source={require('../../images/logo.png')} style={style.logo} />
      <Text style={style.text}>Search MyJob   ....</Text>
      <Text style={style.sub_text}>Post & Find Jobs in One Place</Text>
    </View>
  );
};

export default Splash;

const style = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BG_COLOR,
  },
  logo: {
    width: scale(200),
    height: verticalScale(190),
  },
  text: {
    width: '70%',
    // height:"27%",
    // backgroundColor:"lightblue",
    fontSize: 30,
    fontWeight: '900',
    // letterSpacing:2,
    color: Black,
  },
  sub_text: {
    fontSize: moderateScale(16),
    fontStyle: 'italic',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: moderateVerticalScale(100),
    textDecorationLine: 'underline',
    textDecorationStyle:"double",
    
    
  },
});
