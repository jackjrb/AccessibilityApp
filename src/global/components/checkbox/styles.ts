import { StyleSheet } from "react-native";

import colors from "../../styles/colors";


export const getStyles = (isChecked:boolean) =>
  StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 10,
    },
    button:{
        borderRadius:10,
        borderColor:isChecked ? colors.primary: colors.title,
        borderWidth:1,
        backgroundColor:isChecked ? colors.primary:colors.background,
        width:10,
        height: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        fontSize:12,
        color: colors.text,
    }
})