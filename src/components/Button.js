import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { colors, spacing } from '../theme'
import Text from './text/text'

const styles = StyleSheet.create({
    filterButtonPressable: {
        padding: spacing[3],
        backgroundColor: colors.white,
        marginRight: spacing[4],
        borderRadius: spacing[3],
        paddingHorizontal: spacing[8],
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    }
})
export default function Button({ title, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.filterButtonPressable}>
            <Text preset='uppercase'>{title}</Text>
        </Pressable>
    )
}
