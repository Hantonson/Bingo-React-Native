import { Animated, View } from "react-native";
import { DrumStyles } from "../styles/DrumStyles";
import { useEffect, useMemo, useRef, useState } from "react";
const Drum = ({number}) =>{
    const [displayedNumber, setDisplayNumber] = useState(number);
    const animationTimeRepresentation = useRef(new Animated.Value(0)).current

    const marginTop = animationTimeRepresentation.interpolate({
        inputRange:[0, 0.75, 1, 1, 1.25, 2],
        outputRange:[100, 299,300, 0, 1, 100]
    });
    
    const height = animationTimeRepresentation.interpolate({
        inputRange:[0, 0.75, 1, 1, 1.25, 2],
        outputRange:[100, 0, 0, 0, 0, 100]
    });
    
    const skewX = animationTimeRepresentation.interpolate({
        inputRange:[0, 1, 1, 1, 2],
        outputRange:['0deg','45deg', '45deg', '-45deg', '0deg']
    });

    const rotateX = animationTimeRepresentation.interpolate({
        inputRange:[0, 1, 1, 1, 2],
        outputRange:['0deg','-145deg', '-145deg', '-145deg', '0deg']
    });

    
    const animatedTextStyles = {
        marginTop: marginTop,
        height: height,
        transform: [{skewX: skewX}, {rotateX: rotateX}]
    }
    
    const animate = () => {
        animationTimeRepresentation.setValue(0);
        Animated.timing(animationTimeRepresentation, {
            toValue: 2,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }
    


    useEffect(()=>{
        setTimeout(()=>{
            setDisplayNumber(number);
        },1000);
        animate();
    }, [number]);

    return(
        <View style={{justifyContent:"center", alignItems: "center"}}>
            <View>
                <View style={DrumStyles.drumBall}>
                    <View style={DrumStyles.verticalLine}/>
                    <View style={DrumStyles.verticalLine}/>
                    <View style={DrumStyles.verticalLine}/>
                    <View style={DrumStyles.verticalLine}/>
                    <View style={DrumStyles.verticalLine}/>
                    <View style={DrumStyles.verticalLine}/>
                    <View style={DrumStyles.verticalLine}/>
                </View>
                <Animated.Text style={[DrumStyles.ballDisplay,animatedTextStyles]}>{displayedNumber.toString().padStart(2,'0')}</Animated.Text>
            </View>
        </View>
    );
};

export { Drum };