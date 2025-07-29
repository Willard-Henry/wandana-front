import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", label: "English" },
    { code: "tw", label: "Twi" },
    { code: "ga", label: "Ga" },
    { code: "ewe", label: "Ewe" },
];

export default function LanguageModal({ onClose }) {
    const { t, i18n } = useTranslation();

    const changeLanguage = async (langCode) => {
        try {
            await i18n.changeLanguage(langCode);

            onClose();
        } catch (error) {
            console.error("Error changing language:", error);
        }
    };

    return (
        <View style={styles.overlay}>
            <View style={styles.modal}>
                <Text style={styles.title}>{t("common:chooseLanguage")}</Text>
                {/* <--- Translate this */}
                {languages.map((lang) => (
                    <TouchableOpacity
                        key={lang.code}
                        onPress={() => changeLanguage(lang.code)}
                        style={[
                            styles.button,
                            i18n.language === lang.code && styles.selectedButton,
                        ]}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                i18n.language === lang.code && styles.selectedButtonText,
                            ]}
                        >
                            {lang.label}
                        </Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    onPress={onClose}
                    style={[styles.button, { backgroundColor: "#ddd" }]}
                >
                    <Text style={[styles.buttonText, { color: "#444" }]}>
                        {t("common:close")}
                    </Text>
                    {/* <--- Translate this */}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        width: 280,
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    button: {
        backgroundColor: "#7f00ff",
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
    selectedButton: {
        backgroundColor: "#5f00cc", // Slightly darker purple
        borderWidth: 2,
        borderColor: "#f0e6ff",
    },
    selectedButtonText: {
        fontWeight: "bold",
    },
});
