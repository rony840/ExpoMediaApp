import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Alert } from "react-native";
import { WebView } from "react-native-webview";
import CustomButton from "../components/CustomButton";
import CustomTextDisplay from "../components/CustomTextDisplay";
import CustomTextInput from "../components/CustomTextInput";

const Web = () => {
    const [inputUrl, setInputUrl] = useState("");
    const [webUrl, setWebUrl] = useState(null);

    const handleGoToUrl = () => {
        if (!inputUrl) {
            Alert.alert("Error", "Please enter a valid URL.");
            return;
        }

        // Ensure URL starts with "http://" or "https://"
        let formattedUrl = inputUrl.trim();
        if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
            formattedUrl = "https://" + formattedUrl;
        }

        setWebUrl(formattedUrl);
    };

    return (
        <SafeAreaView style={styles.container}>
            <CustomTextDisplay txtToDisp={"Web View"} />

            {webUrl && (
                <View style={styles.webViewContainer}>
                    <WebView source={{ uri: webUrl }} style={styles.webView} />
                </View>
            )}
            <CustomTextInput
                customPlaceholder={"Enter URL to see in WebView"}
                onTxtEntry={setInputUrl}
                customValue={inputUrl}
            />

            <CustomButton btnTitle={"Go to URL"} onBtnPress={handleGoToUrl} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: "20%",
    },
    webViewContainer: {
        padding:10,
        width: "100%",
        height: 450,
        marginTop: 10,
        backgroundColor:"#d2d2d2",
    },
    webView: {
        flex: 1,
    },
});

export default Web;
