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
  contentContainer: {
    flexDirection: 'row',
    marginTop: verticleScale(20),
  },
  dateView: {
    flex: 1,
    marginHorizontal: horizontalScale(10),
  },
  center: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.gray,
    borderRadius: moderateScale(5),
    marginTop: verticleScale(5),
  },
  dateText: {
    fontWeight: '500',
    color: Colors.navyblue,
    padding: moderateScale(5),
    fontSize: moderateScale(18),
  },
  dateSelectionText: {
    fontWeight: '400',
    fontSize: moderateScale(15),
    color: Colors.dark,
    marginVertical: verticleScale(10),
  },
  button: {
    backgroundColor: Colors.cornFlowerBlue,
    marginTop: verticleScale(35),
    marginHorizontal: horizontalScale(15),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsText: {
    padding: moderateScale(7),
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(18),
  },
  leaveForText: {
    fontSize: moderateScale(15),
    color: Colors.gray,
  },
  leaveContainer: {
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(10),
  },
  textInput: {
    backgroundColor: Colors.ligthtSkyBlue,
    marginHorizontal: horizontalScale(15),
    fontSize: moderateScale(15),
    fontWeight: '500',
    borderRadius: moderateScale(5),
    color: Colors.dark,
  },
  textInputView: {
    marginTop: verticleScale(50),
  },
  validDateText: {
    color: Colors.red,
    fontWeight: '500',
    fontSize: moderateScale(14),
  },
});

export default styles;
