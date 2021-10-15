import React from 'react'
import { StyleSheet, View, Image, Linking, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/PlanetHeader'
import Text from '../components/text/text'
import { colors, spacing } from '../theme'
import { EvilIcons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.black,
    },
    image: {
        height: 150,
        marginBottom: spacing[4],
        alignSelf: 'center'
    },
    description: {
        margin: spacing[4]
    },
    wiki: {
        textDecorationLine: 'underline',
        flexDirection: 'row'
    },
    source: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: spacing[4]
    },
    rotate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: colors.grey,
        borderWidth: 1,
        padding: spacing[4],
        marginHorizontal: spacing[4],
        marginBottom: spacing[4]
    }
})

export const RotationView = ({ name, value }) => {
    return (
        <View style={styles.rotate}>
            <Text preset='colorWhite uppercase '>{name}</Text>
            <Text preset='colorWhite h5'>{value}</Text>
        </View>
    )
}

export default function Details({ route, navigation }) {
    const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink, structure, surface, surfaceImage } = route.params.planet;

    return (
        <SafeAreaView style={styles.body} >
            <PlanetHeader backButton={true} />

            <Image
                style={styles.image}
                source={surfaceImage}
                resizeMode='contain'
            />
            <View style={styles.description}>
                <Text preset='h1 uppercase aselftCenter pb '>{name}</Text>
                <Text>{description}</Text>
            </View>

            <View style={styles.source}>
                <Text preset='aselftCenter colorWhite'>Source : </Text>
                <TouchableOpacity style={styles.wiki} onPress={() => {
                    navigation.navigate('MyWebView', { uri: wikiLink });
                }}>
                    <Text style={styles.wiki}>Wikipedia</Text>
                    <EvilIcons name="external-link" size={24} color={colors.white} />
                </TouchableOpacity>
            </View>

            <RotationView name={'Rotation Time'} value={rotationTime} />
            <RotationView name={'Revolution Time'} value={revolutionTime} />
            <RotationView name={'Radius'} value={radius} />
            <RotationView name={'Avarage Temp.'} value={avgTemp} />


        </SafeAreaView>
    )
}
