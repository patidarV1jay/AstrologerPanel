import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  errorText: {
    color: Colors.red,
    fontSize: moderateScale(13),
  },
  navyBlueContainer: {
    backgroundColor: Colors.navyblue,
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(5),
    padding: moderateScale(5),
    paddingVertical: verticleScale(20),
    marginTop: verticleScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
    marginBottom: verticleScale(4),
  },
  text: {
    fontWeight: '500',
    fontSize: moderateScale(16),
    color: Colors.light,
  },
  rateText: {
    fontWeight: 'bold',
    color: Colors.dark,
    fontSize: moderateScale(16),
    marginRight: horizontalScale(20),
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(10),
    alignItems: 'center',
  },
  dropDownContainer: {
    backgroundColor: Colors.ligthtSkyBlue,
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(5),
  },
  updateButton: {
    marginHorizontal: horizontalScale(15),
    backgroundColor: Colors.cornFlowerBlue,
    padding: moderateScale(8),
    marginVertical: verticleScale(20),
    borderRadius: moderateScale(5),
  },
  updateText: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: moderateScale(18),
    color: Colors.light,
  },
  marginbottom: {
    marginVertical: verticleScale(12),
  },
  textInput: {
    width: '40%',
    padding: moderateScale(5),
    backgroundColor: Colors.light,
    borderRadius: moderateScale(5),
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    paddingLeft: horizontalScale(10),
  },
  discountedContainer: {
    width: '40%',
    padding: moderateScale(8),
    backgroundColor: Colors.light,
    borderRadius: moderateScale(5),
  },
  discountedPrice: {
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    paddingLeft: horizontalScale(3),
  },
  paddingforPriceContainer: {
    padding: moderateScale(4),
    paddingVertical: verticleScale(20),
  },
  errorView: {
    alignSelf: 'flex-end',
    marginRight: horizontalScale(15),
  },
});

export default styles;
