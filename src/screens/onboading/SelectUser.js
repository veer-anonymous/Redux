import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import { BG_COLOR,Black } from '../../utils/Colors'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const SelectUser = () => {

  const navigator=useNavigation();

const Jobposting=()=>{
  navigator.navigate("Jobposting")
}

  const Jobsearching=()=>{
    navigator.navigate("Jobsearching")
  }


  return (
    <View style={style.constainer}>
    <Image source={require("../../images/logo.png")} style={style.logo}   />
      <Text style={style.titile}> What  you are looking for ? </Text>
      <TouchableOpacity style={style.wantToHire} onPress={Jobposting}>
      <Text style={style.wantToHire_text}>Want to Hiere Candidate</Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={Jobsearching} style={style.wantToJob}>
      <Text style={style.wantToJob_text}>Want to Get Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectUser

const style=StyleSheet.create({
    constainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:BG_COLOR
    },
    titile:{
        fontSize:moderateScale(20),
        fontWeight:"600",
        color:Black
    },
    wantToHire:{
        width:Dimensions.get("window").width/1.2,
        height:verticalScale(45),
        backgroundColor:Black,
        borderRadius:moderateScale(10),
        justifyContent:"center",
        alignItems:"center",
        marginTop:moderateVerticalScale(20)
    },
    wantToHire_text:{
      color:BG_COLOR,
      fontSize:moderateScale(22),
      fontWeight:"500"
    },
    wantToJob:{
      width:Dimensions.get("window").width/1.2,
      height:verticalScale(45),
      backgroundColor:BG_COLOR,
      borderRadius:moderateScale(10),
      justifyContent:"center",
      alignItems:"center",
      marginTop:moderateVerticalScale(20),
      borderWidth:1
    },
    wantToJob_text:{
      color:Black,
      fontSize:moderateScale(22),
      fontWeight:"700"
    },
    logo:{
      width:scale(150),
      height:scale(150),
      marginBottom:moderateVerticalScale(10)
    }
})