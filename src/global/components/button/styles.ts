import { StyleSheet } from "react-native";
import colors from "../../styles/colors";


export const styles = StyleSheet.create({
  button:{
    borderRadius:25,
    backgroundColor:colors.primary,
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  textButton:{
    fontSize:14,
    color:colors.title,
  }
})