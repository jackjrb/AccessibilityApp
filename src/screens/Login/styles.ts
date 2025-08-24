import { StyleSheet } from "react-native";

import colors from "../../global/styles/colors";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:colors.background,
    paddingHorizontal:16,
  },
  title:{
    fontSize:RFValue(24),
    fontWeight:'bold',
    marginBottom:24,
    color:colors.title,
    textAlign:'center'
  },
  image:{
    width: '100%',
    height: 200,
    marginBottom: 24,
    resizeMode: 'contain',
  }
})