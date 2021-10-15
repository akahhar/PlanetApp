import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './text/text'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { spacing } from '../theme';

const styles = StyleSheet.create({
    filterBytemp: {
        margin: spacing[3]
    },
    slider: {
        marginLeft: -spacing[3],
        // paddingLeft: spacing[5]
    }
})
export default function MulitSliderComponent({ filterBy, filterbyText, step }) {

    const [rotationTime, setRotationTime] = useState([step[0], step[1]])

    return (
        <View style={styles.filterBytemp}>
            <Text style={styles.slider}>Filter by {filterBy} : </Text>
            <Text preset="ptSm colorWhite h5" style={styles.slider}>{`${filterbyText} : ${rotationTime[0]} - ${rotationTime[1]}`}</Text>

            <MultiSlider
                values={rotationTime}
                onValuesChange={(values) => setRotationTime(values)}
                min={step[0]}
                max={step[1]}
                step={step[3]}
            />
        </View>
    )
}
