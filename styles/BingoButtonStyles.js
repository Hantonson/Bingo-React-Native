import { StyleSheet } from "react-native";

const BingoButtonStyles = StyleSheet.create({
    button:{
        borderRadius:50,
        width:"auto",
        height:"auto",
        borderColor:'#000',
        borderWidth:1,
    },
    buttonText:{
        fontSize:24,
        paddingHorizontal:20,
        paddingVertical:15,
        fontWeight:"bold"
    },
    buttonBackground:{
        backgroundColor:'#b0b0b0'
    },
    negativeButtonBackground:{
        backgroundColor:'#3a3a3a'
    }
});

export { BingoButtonStyles };