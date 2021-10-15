import React, { useState } from 'react'
import { useWindowDimensions, Dimensions, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import { colors, spacing } from '../theme'
import Text from './text/text'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import { SafeAreaView } from 'react-native-safe-area-context';



const styles = StyleSheet.create({
    header: {
        marginVertical: spacing[4],
        borderBottomWidth: 1,
        borderColor: colors.grey,
        flexDirection: 'row',
        justifyContent: 'space-between',        
    },
    headerIcon: {
        marginTop: -spacing[14]
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        top: -spacing[3],
        marginRight: spacing[3],
        alignSelf: 'flex-end',
        // backgroundColor: colors.white,
        // height: 35,
        // width: 35,
        // borderRadius: 10
    },
    headerRightIcon: {
        alignSelf: 'center', justifyContent: 'center', marginTop: spacing[1]
    },
    modal: {
        justifyContent: 'flex-start',
        top: 80,
    },
    modalView: {
        backgroundColor: colors.darkGrey,
        borderRadius: 30,
        paddingHorizontal: spacing[5],
        paddingTop: spacing[3]
    },
    filterBytemp: {
        marginVertical: spacing[3]
    },
    filterButton: {
        // flex: 1,
        flexDirection: 'row',
        margin: spacing[4],
        justifyContent: 'space-between',
        marginHorizontal: spacing[0],
    },
    filterBytemp: {
        margin: spacing[3]
    },
    slider: {
        marginLeft: -spacing[3],
        // paddingLeft: spacing[5]
    }

})





export default function PlanetHeader({ backButton = false, filterButton = false }) {
    const navigation = useNavigation();
    return (<View style={styles.header}>
        <View style={styles.headerLeft}>
            {backButton &&
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }} style={styles.headerIcon}>
                    <AntDesign name="left" size={24} color={colors.white} />
                </TouchableOpacity>
            }
            <Text preset='uppercase colorWhite h2 pl pb'>The Planet</Text>
        </View>


    </View>

    )
}
