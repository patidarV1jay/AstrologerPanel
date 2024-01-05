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
  text: {
    padding: moderateScale(10),
    fontSize: moderateScale(16),
    color: Colors.dark,
  },
  dateView: {
    flex: 1,
    marginHorizontal: horizontalScale(5),
  },
  center: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.gray,
    borderRadius: moderateScale(5),
    padding: moderateScale(5),
  },
  dateText: {
    fontWeight: '500',
    color: Colors.dark,
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
    marginHorizontal: horizontalScale(10),
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
  dropDownContainer: {
    backgroundColor: Colors.light,
    position: 'absolute',
    zIndex: 1,
    left: 5,
    top: verticleScale(100),
    width: '80%',
    elevation: 20,
    shadowColor: Colors.gray,
    height: '600%',
  },
});

export default styles;
