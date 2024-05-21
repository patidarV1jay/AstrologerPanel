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
    justifyContent: 'center',
    backgroundColor: Colors.opaque,
  },
  requestContainer: {
    backgroundColor: Colors.light,
    padding: moderateScale(20),
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(10),
    elevation: 2,
  },
  requestText: {
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(16),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.green,
    width: '40%',
    alignItems: 'center',
    marginTop: verticleScale(40),
    borderRadius: moderateScale(10),
    padding: moderateScale(8),
  },
  optionText: {
    color: Colors.light,
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  buttonColor: {
    backgroundColor: Colors.red,
  },
});

export default styles;
