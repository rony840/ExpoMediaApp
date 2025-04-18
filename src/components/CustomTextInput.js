import { memo } from "react";
import { StyleSheet, TextInput } from "react-native";

const CustomTextInput = (props) => {
    const{onTxtEntry, customPlaceholder, customValue} = props;
    return (
        <TextInput
        style={styles.txtInput}
        placeholder={customPlaceholder||"Enter the url here"}
        onChangeText={onTxtEntry}
        value={customValue}>

        </TextInput>
    );
};

const styles = StyleSheet.create({
    txtInput:{
        padding:20,
        marginTop:'2%',
        height:60,
        width:250,
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'black',
        fontSize:16,
        borderRadius:30,
        color: 'black'
    }
});

export default memo(CustomTextInput);