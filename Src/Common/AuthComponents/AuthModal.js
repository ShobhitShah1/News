import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MotiImage, MotiText, MotiView } from 'moti'

const AuthModal = ({
    visible,
    status,
    onPress,
    cancel,
    close,
    text,
    containerStyle,
    textStyle,
    onRequestClose
}) => {
    return (
        <Modal
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <MotiView>
                <MotiText>

                </MotiText>
                {/* <MotiImage 

                /> */}


            </MotiView>
        </Modal>
    )
}

export default AuthModal

const styles = StyleSheet.create({})