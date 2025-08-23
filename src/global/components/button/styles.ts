import { StyleSheet } from "react-native";

import colors from "../../styles/colors";
import { RFValue } from "react-native-responsive-fontsize";


export const styles = StyleSheet.create({
  button:{
    borderRadius:25,
    backgroundColor:colors.primary,
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  textButton:{
    fontSize:RFValue(14),
    color:colors.text,
  }
})