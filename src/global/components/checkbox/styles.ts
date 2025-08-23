import { StyleSheet } from "react-native";

import colors from "../../styles/colors";


export const getStyles = (isChecked:boolean) =>
  StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 20,
        paddingHorizontal: 8
    },
    button:{
        borderRadius:5,
        borderColor:isChecked ? colors.primary: colors.text,
        backgroundColor:isChecked ? colors.primary:colors.background,
        borderWidth:1,
        width:18,
        height: 18,
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        fontSize:14,
        color: colors.text,
    }
})