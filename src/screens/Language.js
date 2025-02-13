import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";
import "../locales/i18n"; // Import i18n setup
import CustomTextDisplay from "../components/CustomTextDisplay";

const Language = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  // Function to change language
  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <SafeAreaView style={styles.screenCont}>
      <CustomTextDisplay txtToDisp={t("language_selection")} />
      <Text style={styles.label}>{t("select_language")}</Text>

      {/* Fix: Wrap Picker inside a View with defined width */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={changeLanguage}
          style={styles.picker}
          mode="dropdown" // Ensures dropdown mode on Android
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Hindi" value="hi" />
          <Picker.Item label="Español" value="es" />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenCont: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    margin:'10%',
    marginTop: 20,
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    marginTop:'10%',
    width: 200, // Fix: Set a defined width for Picker
    height:60,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    

    
  },
  picker: {
    height: 60,
    width: "100%", // Make sure Picker takes full width of the container
  },
});

export default Language;
