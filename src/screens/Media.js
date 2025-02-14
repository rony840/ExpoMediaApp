import React, { useState } from "react";
import { SafeAreaView, Image, View, Alert, StyleSheet, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import CustomButton from "../components/CustomButton";
import CustomTextDisplay from "../components/CustomTextDisplay";
import CustomTextInput from "../components/CustomTextInput";

const Media = () => {
    const [mediaUri, setMediaUri] = useState(null);
    const [mediaType, setMediaType] = useState(null);
    const [inputUrl, setInputUrl] = useState("");

    const player = useVideoPlayer(mediaUri || "", (player) => {
        player.loop = true;
    });

    const { isPlaying } = useEvent(player, "playingChange", { isPlaying: player.playing });

    // Pick media from gallery
    const pickMedia = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert("Permission Required", "Allow access to gallery in settings.");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images','livePhotos','videos'],
            allowsEditing: true,
            quality: 1,
        });
        console.log('image pick res: ',result)

        if (!result.canceled) {
            const selected = result.assets[0];
            setMediaUri(selected.uri);
            setMediaType(selected.type);
        }
    };

    // Capture image using camera
    const takePhoto = async () => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert("Permission Required", "Allow access to camera in settings.");
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setMediaUri(result.assets[0].uri);
            setMediaType("image");
        }
    };

    // Load media from user-input URL
    const loadFromUrl = () => {
        if (!inputUrl) {
            Alert.alert("Invalid URL", "Please enter a valid image or video URL.");
            return;
        }
        setMediaUri(inputUrl);
        setMediaType(inputUrl.endsWith(".mp4") ? "video" : "image");
    };

    return (
        <SafeAreaView style={styles.container}>
            <CustomTextDisplay txtToDisp={"Image/Video Picker"} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* Display media */}
            {mediaUri && mediaType === "image" && (
                <Image resizeMode="contain" source={{ uri: mediaUri }} style={styles.media} />
            )}
            {mediaUri && mediaType === "video" && (
                <View>
                    <VideoView
                        style={styles.media}
                        player={player}
                        allowsFullscreen
                        allowsPictureInPicture

                    />
                    <CustomButton
                        btnTitle={isPlaying ? "Pause" : "Play"}
                        onBtnPress={() => (isPlaying ? player.pause() : player.play())}
                    />
                </View>
            )}

            {/* Input URL */}
            <CustomTextInput
                customPlaceholder={"Paste image/video URL"}
                onTxtEntry={setInputUrl}
                customValue={inputUrl}
            />

            <CustomButton btnTitle={"Pick from Gallery"} onBtnPress={pickMedia} />
            <CustomButton btnTitle={"Take Photo"} onBtnPress={takePhoto} />
            <CustomButton btnTitle={"Load from URL"} onBtnPress={loadFromUrl} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    scrollContainer:{
        width:350,
        padding:20,

    },
    media: {
        width: "100%",
        height: 500,
        margin: 10,
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        marginVertical: 10,
        paddingHorizontal: 10,
    },
});

export default Media;
