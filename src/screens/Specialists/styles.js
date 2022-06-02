import {StyleSheet , Dimensions} from 'react-native';
import { Fonts, Colors, Sizes } from "../../constant/styles";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
    headerSearchStyle: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: Sizes.fixPadding,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingHorizontal: Sizes.fixPadding,
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    specialistStyle: {
        height: 170.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        marginHorizontal: 10.0,
        marginVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 5.0,
    },
    headerStyle: {
        backgroundColor: 'white',
        paddingTop: Sizes.fixPadding + 5.0,
        paddingBottom: Sizes.fixPadding
    },
    headerTitleContainerStyle: {
        flexDirection: 'row',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding + 10.0
    },
    specialistTextStyle: {
        ...Fonts.black16Bold,
        marginTop: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding,
        textAlign: 'center'
    }
})