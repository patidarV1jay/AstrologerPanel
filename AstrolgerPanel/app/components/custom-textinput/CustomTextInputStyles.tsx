import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticleScale,
  Colors,
} from '../../themes';

const styles = StyleSheet.create({
  textInputStyles: {
    // borderBottomWidth: 2,
    // borderColor: Colors.light,
    flex: 1,
    marginHorizontal: horizontalScale(5),
    fontSize: moderateScale(18),
    color: Colors.dark,
    padding: moderateScale(5),
    paddingBottom: verticleScale(15),
    // marginRight: horizontalScale(20),
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: moderateScale(10),
    // marginBottom: verticleScale(7),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticleScale(7),
    borderColor: Colors.offShade,
  },
  errorView: {
    // marginHorizontal: horizontalScale(51),
    // marginTop: verticleScale(5),
  },
  errorText: {
    fontWeight: '400',
    fontSize: moderateScale(14),
    color: Colors.red,
  },
  container: {
    marginBottom: verticleScale(35),
  },
});

export default styles;
