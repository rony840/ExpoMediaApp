import { memo } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomTextDisplay = (props) => {
    const {txtToDisp} = props;
    return (
            <Text style={styles.txtDisp}>
                {txtToDisp||"Home"}
            </Text>
    );
};

const styles = StyleSheet.create({
    txtDisp:{
        marginTop:'2%',
        fontSize: 30,
        fontWeight: 700,
        color:'rgb(94, 94, 94)',
    }
});

export default memo(CustomTextDisplay);