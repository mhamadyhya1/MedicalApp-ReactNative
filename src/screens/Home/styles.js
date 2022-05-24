import { StyleSheet , Dimensions } from 'react-native';
import { Fonts, Colors, Sizes } from "../../constant/styles";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10.0,
        marginHorizontal: 20.0
    },
    searchStyle: {
        height: 45.0,
        backgroundColor: 'white',
        borderWidth: 1.0,
        borderColor: Colors.lightGray,
        alignItems: 'center',
        borderRadius: Sizes.fixPadding - 3.0,
        flexDirection: 'row',
        paddingLeft: Sizes.fixPadding + 10.0,
        marginTop: 20.0,
        marginHorizontal: 20.0
    },
    viewAllStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding,
    },
    callNowButtonStyle: {
        width: 80.0,
        height: 40.0,
        borderColor: Colors.primary,
        borderRadius: Sizes.fixPadding,
        borderWidth: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 10.0,
    },
    labAndCheckUpContainer: {
        flexDirection: 'row',
        height: 200.0,
        width: width - 40,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding + 5.0,
        backgroundColor: 'white',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 4.0,
        marginBottom: 20.0,
        overflow: 'hidden',
    },
    labInformationContainer: {
        marginLeft: Sizes.fixPadding,
        marginRight: Sizes.fixPadding,
        width: width - 220,
        marginTop: Sizes.fixPadding + 5.0,
    },
    specialistInfoContainer: {
        height: 160.0,
        width: 200.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        marginHorizontal: 10.0,
        marginVertical: 10.0,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5.0,
    },
    ImageStyle:{
        height: 199.0, 
        width: width - 230.0, 
        borderTopLeftRadius: Sizes.fixPadding + 5.0,
        borderBottomLeftRadius: Sizes.fixPadding + 5.0, 
        overflow: 'hidden'
    }
})