import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import PlanetHeader from '../components/PlanetHeader';
import { colors, spacing } from '../theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
});

export default function MyWebView({ route }) {
    const { uri } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backButton={true} />
            <WebView
                source={{ uri: uri }}
            />
            <StatusBar barStyle="light-content" />
        </SafeAreaView>
    )
}
