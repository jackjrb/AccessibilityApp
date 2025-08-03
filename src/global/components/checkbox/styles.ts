import { StyleSheet } from "react-native";
import colors from "../../styles/colors";


export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 10,
    },
    button:{
        borderRadius:10,
        borderColor:colors.text,
        borderWidth:1,
        backgroundColor:colors.background,
        width:10,
        height: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        fontSize:12
    }
})