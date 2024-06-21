import { Modal, View, useWindowDimensions } from "react-native";
import { BingoModalStyles } from "../styles/BingoModalStyles";

const BingoModal = ({children, visible, onRequestClose, scaller=0.8}) => {
    const {width, height} = useWindowDimensions();
    
    return(
        <Modal animationType="fade" visible={visible} onRequestClose={onRequestClose} transparent>
            {/* Modal Container (Screen) */}
            <View style={BingoModalStyles.modalContainer}>
                {/* Modal Body */}
                <View style={[BingoModalStyles.modalBody,{width:(width*scaller), height:(height*scaller)}]}>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

export { BingoModal };