import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { COLORS } from '../../Common/Global'
import { normalize } from '../../Common/GlobalSize'
import styles from './Styles'

const PasswordInfo = () => {
    return (
        <View style={styles.PasswordInfoContainer}>
            <Text style={styles.PasswordInfoHeaderText}>How Strong Is Your Password?</Text>

            <View style={styles.PasswordInfoViewContainer}>
                <View style={styles.PasswordInfoPoint}>
                    <Text style={styles.PasswordInfoPointRedText}>🔴 Red Color: 0-50% Strong 💪</Text>
                    <Text style={styles.PasswordInfoPointOrangeText}>🟠 Orange Color 51-90% Strong 💪</Text>
                    <Text style={styles.PasswordInfoPointYellowText}>🟡 Yellow Color 51-90% Strong 💪</Text>
                    <Text style={styles.PasswordInfoPointGreenText}>🟢 Grenn Color 91-100% Strong 💪</Text>
                </View>
            </View>
        </View>
    )
}

export default PasswordInfo;