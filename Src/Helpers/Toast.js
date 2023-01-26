import { DeviceEventEmitter } from "react-native";
import { SHOW_TOAST_MESSAGE } from "../Common/Toast";

const Toast = {
    info: (options) => {
        DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: "info" })
    },

    success: (options) => {
        DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: "success" })

    },

    danger: (options) => {
        DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: "danger" })

    }
}

export default Toast;