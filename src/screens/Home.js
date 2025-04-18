import { Alert, Image, SafeAreaView, StyleSheet, Text } from "react-native";
import CustomTextDisplay from "../components/CustomTextDisplay";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { signUp } from "../services/Auth";

const base64 = 'iVBORw0KGgoAAAANSUhEUgAAACsAAAAuCAYAAACxkOBzAAAAUGVYSWZNTQAqAAAACAAEAQAABAAAAAEAAAAAAQEABAAAAAEAAAAAh2kABAAAAAEAAAA+ARIABAAAAAEAAAAAAAAAAAABkggAAwAAAAEAAAAAAAAAAMw+X5YAAAERaUNDUFNraWEAABiVY2BgfMAABCwGDAy5eSVFQe5OChGRUQrsDxgYgRAMEpOLCxhwA6Cqb9cgai/r4lGHC3CmpBYnA+kPQBxSBLQcaKQLkC2SDmFHgNhJEHYOiF1eUlACZDeA2EUhQc5A9hQgWyAdiZ2ExE4uKAKpXwJk2+TmlCYj3M3Ak5oXGgykLYBYhqGYIYjBncGJQQFIJjLkMpQylADZ5QyZQDoDyDJi0ANiBYYQhiKgfB5QfRpDKgPIyQoQI/PnA436wsDAPBEhljSdgWF7OwODxG2EmMoiBgb+FgaGbdcQYogwLEgsSoSHDpOxMQ43K4Dd7M6QD4TpDDlAlygweAJdlQx0JcitBgyGDGYAb75FPmHjJfMAAAAEc0JJVAgICAh8CGSIAAACjElEQVRYhe1YW27EMAjEkY/YO/ZcvUjpx8YO4AHsPFat1JGqTVjAY4yBbvn4/OJSiIiI9o+OUgqQebpaPlhaAwRGokNYiYiYX4s1cfPL7QslO/xKglL+Is+aIyCywp15JytJWNIsvxg2YwTgO7lgKUdg5LrtnZMNVWQsSasoy1URadIRdzdgSHkkYWRB8NzUUMRBtCGZpjORt1F0q46eduqlxkDaYWIl2TEjSJMqBRnpposqAgMmL92ZMhCQFX6rukyANFqryb/N94gW2sRZbN0pHWTVM+PjQ5eFzR8RnalYyk76qzZ8Kof3T1lHG1AF8RacagjWlseNVrXazkDVRvBuCWZpeVcmqGqAatiQx8IYETfmlyEPHlYDFDZ7EW3EpX0WydbJomdLuJPtQgLpBXLa00XkcX2eeB45a7JWCUaaCOa2hY38HWk7kJWQx62iaKcPkKQzUfbSySWLbr46Ms/SO7/uTG/Ai/JKxGHOzuQjAR1tMFEi0KkEt9PNWXjZHF17rFjZ6xxzsd07mL+CV5oivXDWCHxEJBvCCxYZzkY9el5FH2RWvaBB4775Cq+39ad2bgurIjUbReQymsiQPe30KtSSMq8NBfD2iia6jLB836zioHHmVgS4J2fPrHR1wl7EHFkvEe0IZm/dKqL8ocXS5TrPatNsa0RDc5OzHb7vht1ENrUkkd0eIxosehab9OHVw9+C8IKtzJrvwJakyfCM3t8F9SMHkX9pLaLO89RmwnkWAbVM2mXo/67VmTjSW+pgaCOS+MoIgXS9vtI2PU0WDdJILpvZSmNDfuw6yx1s5kIiAtGImP1wkk9dJ5GNfDZFJJnM9nayGa6UwbeTvYJ/sk/hn+xT+FNkfwBShW7TTaAQLQAAAABJRU5ErkJggg==';
const Home = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSignup = async () =>{
        try{
            const response = await signUp(email,password)
            Alert.alert("User Signed up: ", email)
        }catch (error) {
            console.error("Sign Up Error:", error);
        }
    };

    return(
        <SafeAreaView style={styles.screenCont}>
            <CustomTextDisplay txtToDisp={"Base64 File Preview"} />

            {/* Display Base64 Image */}
            <Image 
                source={{ uri: `data:image/png;base64,${base64}` }} 
                style={styles.image} 
            />            
            <CustomTextInput customPlaceholder={"Email"} onTxtEntry={setEmail}/>
            <CustomTextInput customPlaceholder={"Password"} onTxtEntry={setPassword}/>
            <CustomButton btnTitle={"Sign in/up"} onBtnPress={()=>handleSignup()}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenCont: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    image: {
        marginTop:'2%',
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    base64Text: {
        fontSize: 12,
        color: "#333",
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 5,
        maxHeight: 100,
        overflow: "hidden",
    },
})


export default Home;