import { Pressable, Text } from "react-native";
import { BingoButtonStyles } from "../styles/BingoButtonStyles";

const BingoButton = (
    {
        title,
        onPress,
        buttonStyle,
        textStyle,
        negativeBackground=false
    }
) => {

    const finalButtonStyle = (buttonStyle)? buttonStyle : 
                                            [
                                                BingoButtonStyles.button,
                                                (negativeBackground)?
                                                BingoButtonStyles.negativeButtonBackground:
                                                BingoButtonStyles.buttonBackground
                                            ];
                                            
    const finalTextStyle = (textStyle)? textStyle : BingoButtonStyles.buttonText;

    return(
        <Pressable onPress={onPress} style={finalButtonStyle}>
            <Text style={finalTextStyle}>{title}</Text>
        </Pressable>
    );
}

export { BingoButton };