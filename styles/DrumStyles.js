import { StyleSheet } from "react-native";

const DrumStyles = StyleSheet.create({
    drumBall:{
        width:300,
        height:300,
        borderRadius:150,
        borderColor:'#000',
        borderWidth:5,
        backgroundColor:'#fff',
        justifyContent:"space-around",
        alignItems: "center",
        flexDirection:"row",
        overflow:"hidden"
    },
    verticalLine:{
        height:"100%",
        width:5,
        backgroundColor:'#000' 
    },
    ballDisplay:{
        position:"absolute", 
        alignContent:"center", 
        backgroundColor:'#fff', 
        overflow:"hidden", 
        fontSize:85, 
        fontWeight:"bold", 
        zIndex:1000, 
        marginLeft: 100, 
        width:100
    }
});

export { DrumStyles };