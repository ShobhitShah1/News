import { StyleSheet } from "react-native";
import { normalize } from "../../../Common/GlobalSize";
import { COLORS, DimensionsSize, SIZES, FONTS, FAMILY } from '../../../Common/Global';

const styles = StyleSheet.create({
    ButtonView: {
        position: 'absolute',
        bottom: normalize(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headerContainer: {
        width: DimensionsSize.width
    },
    darkmodeView: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        top: 10
    },
    headerView: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    images: {
        width: DimensionsSize.width,
        height: normalize(200)
    },
    headerTextView: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: SIZES.padding
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.tinBlack
    },
    fillDetailView: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    stackview: {
        marginTop: normalize(8)
    },
    inputheaderView: {
        flexDirection: 'row',
        marginHorizontal: normalize(25),
        marginVertical: normalize(5),
        justifyContent: 'space-between'
        // justifyContent: 'center',
    },
    infoIcon: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginRight: normalize(5)
    },
    inputheaderText: {
        color: COLORS.tinBlack,
        fontFamily: FAMILY.PoppinsRegular,
        fontSize: 15
    },
    AuthButtonView: {
        marginTop: normalize(15)
    },
    haveAnAccountView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10
    },
    haveAnAccountText: {
        fontFamily: FAMILY.PoppinsRegular,
        color: COLORS.tinBlack
    },
    progressBarContainer: {
        flexDirection: 'row',
        height: normalize(20),
        width: '85%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: normalize(10),
        marginTop: 20,
    },
    progressBar: {
        height: '100%',
        borderTopLeftRadius: normalize(8),
        borderBottomLeftRadius: normalize(8)
    },
    progressPercentage: {
        marginLeft: 10,
        marginRight: normalize(7),
        ...FONTS.h4,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    backgroundModalStyle: {
        backgroundColor: COLORS.primary,
        borderRadius: normalize(15)
    },
})

export default styles;