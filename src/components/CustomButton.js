import { memo } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = (props) => {
    const {btnTitle,onBtnPress} = props;
    return (
        <TouchableOpacity
        style={styles.btnContainer}
        onPress={onBtnPress}>
            <Text style={styles.btnTxt}>
                {btnTitle||"Upload"}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnContainer:{
        marginTop:'2%',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        width:350,
        backgroundColor:'rgb(0, 114, 214)',
        borderRadius:30,
    },
    btnTxt:{
        fontSize: 20,
        fontWeight: 500,
        color:'yellow',
    }
});

export default memo(CustomButton);