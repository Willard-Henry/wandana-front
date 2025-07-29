import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../src/config/i18n'; // your i18n instance

const languages = [
    { code: 'en', label: 'English' },
    { code: 'twi', label: 'Twi' },
    { code: 'ga', label: 'Ga' },
    { code: 'ewe', label: 'Ewe' },
];

const LANGUAGE_KEY = 'appLanguage';

export default function LanguageModal({ onClose }) {
    const changeLanguage = async (langCode) => {
        try {
            await i18n.changeLanguage(langCode);
            await AsyncStorage.setItem(LANGUAGE_KEY, langCode); // Save it
            onClose(); // Close the modal
        } catch (error) {
            console.error('Error changing language:', error);
        }
    };

    return (
        <View style={styles.overlay}>
            <View style={styles.modal}>
                <Text style={styles.title}>Choose Language</Text>
                {languages.map((lang) => (
                    <TouchableOpacity
                        key={lang.code}
                        onPress={() => changeLanguage(lang.code)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>{lang.label}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    onPress={onClose}
                    style={[styles.button, { backgroundColor: '#ddd' }]}
                >
                    <Text style={[styles.buttonText, { color: '#444' }]}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: 280,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#7f00ff',
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
});
