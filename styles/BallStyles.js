import { StyleSheet } from "react-native";

const BallStyles = StyleSheet.create({
    ballFont: {
        width:"auto",
        height:"auto",
        fontSize:15,
        fontWeight:"bold"
    },
    ballAnimatedView: {
        borderRadius:50,
        backgroundColor:"#fff",
        alignItems:"center", 
        justifyContent:"center"
    },
    ballContainer: {
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:"#f00",
        alignItems:"center",
        justifyContent:"center"
    }
});

export { BallStyles };