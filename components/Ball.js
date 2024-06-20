import { useEffect, useRef } from "react";
import { Animated, Easing, Text, View } from "react-native";
import { BallStyles } from "../styles/BallStyles";

const Ball = ({number, visible=false}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    
    
    const size = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, BallStyles.ballContainer.width],
      });
    
      const animatedStyles =
        {
          fadeAnim,
          width: size,
          height: size
        };

      const animate = (easing) => {
        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1200,
          easing,
          useNativeDriver: true,
        }).start();
      };

    useEffect(() => {
        if (visible)
            animate(Easing.elastic(4));
      }, [visible]);
    return(
        <View style={BallStyles.ballContainer}>
            <Animated.View style={[BallStyles.ballAnimatedView,animatedStyles]}>
                <Animated.Text style={[BallStyles.ballFont, {display: (visible)?"block" : "none"}]}>{number.toString().padStart(2,'0')}</Animated.Text>
            </Animated.View>
        </View>
    );
};

export { Ball };