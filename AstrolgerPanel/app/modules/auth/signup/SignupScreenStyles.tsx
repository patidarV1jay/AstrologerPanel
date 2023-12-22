import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../themes';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  cotainerHoldingKeyboardView: {
    marginTop: verticleScale(20),
    marginHorizontal: horizontalScale(10),
  },

  requestText: {
    fontWeight: '500',
    color: Colors.dark,
    alignSelf: 'center',
    fontSize: moderateScale(20),
    marginBottom: verticleScale(20),
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexOne: {
    flex: 1,
    marginHorizontal: horizontalScale(5),
  },
  dropDownView: {
    borderWidth: 1,
    borderColor: Colors.offShade,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
  },
  genderText: {
    color: Colors.offShade,
    fontSize: moderateScale(18),
  },
  selectGender: {
    color: 'black',
    fontWeight: '400',
    fontSize: moderateScale(18),
    marginVertical: verticleScale(30),
  },
  visibleDropDown: {
    backgroundColor: Colors.light,
    position: 'absolute',
    top: verticleScale(20),
    left: horizontalScale(10),
    zIndex: 1,
    width: '50%',
    borderRadius: moderateScale(10),
    shadowColor: Colors.dark,
    elevation: 20,
    paddingHorizontal: moderateScale(18),
  },
  selectedGenderText: {
    color: Colors.dark,
    fontSize: moderateScale(18),
  },
  marginBottomDropDown: {
    marginBottom: verticleScale(34),
  },
  modalContainer: {
    flex: 1,
    // backgroundColor:' rgba(80, 80, 80, 0.5)',
    backgroundColor: '#80808080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentContainer: {
    width: '95%',
    backgroundColor: Colors.light,
    shadowColor: Colors.gray,
    elevation: 24,
    borderRadius: moderateScale(5),
    paddingVertical: verticleScale(20),
  },
  checkButton: {
    margin: 10,
    width: Dimensions.get('window').width / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceText: {
    color: Colors.dark,
    fontWeight: '400',
    fontSize: moderateScale(14),
  },
  bottomButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: horizontalScale(20),
    marginTop: verticleScale(40),
  },
  bottomButtonText: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(18),
    padding: moderateScale(8),
    paddingHorizontal: horizontalScale(10),
  },
  termsAndCondtionView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  termsAndCondtionText: {
    fontWeight: 'bold',
    color: Colors.cornFlowerBlue,
    fontSize: moderateScale(15),
    textDecorationLine:'underline'
  },
  requestButton: {
    backgroundColor: Colors.cornFlowerBlue,
    padding: moderateScale(10),
    marginTop: verticleScale(40),
    borderRadius: moderateScale(20),
  },
  requestButtonText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: moderateScale(18),
    color: Colors.light,
  },
  accountText: {
    alignSelf: 'center',
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
    marginTop: verticleScale(50),
    marginBottom: verticleScale(20),
  },
  loginText: {
    color: Colors.cornFlowerBlue,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    textDecorationLine: 'underline',
  },
  checkText:{
    fontWeight: 'bold',
    color: Colors.dark,
    fontSize: moderateScale(15),
  }
});

export default styles;
