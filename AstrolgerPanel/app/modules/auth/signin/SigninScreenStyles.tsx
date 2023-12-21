import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  lekhaJhokaImage: {
    height: verticleScale(300),
    width: horizontalScale(150),
    alignSelf: 'center',
  },
  shadowContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    shadowColor: Colors.gray,
    elevation: 24,
    alignSelf: 'center',
    padding: moderateScale(10),
  },
  text: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(20),
    alignSelf: 'center',
    marginBottom: verticleScale(40),
  },
  alignRightText: {
    color: Colors.cornFlowerBlue,
    textDecorationLine: 'underline',
    fontWeight: '500',
    fontSize: moderateScale(16),
    alignSelf: 'flex-end',
    marginTop: verticleScale(-20),
  },
  blueButton: {
    backgroundColor: Colors.cornFlowerBlue,
    padding: moderateScale(10),
    marginTop: verticleScale(40),
    borderRadius: moderateScale(20),
  },
  loginText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: moderateScale(18),
    color: Colors.light,
  },
  newUserText: {
    alignSelf: 'center',
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
    marginTop: verticleScale(50),
    marginBottom: verticleScale(20),
  },
  registerText: {
    color: Colors.cornFlowerBlue,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    textDecorationLine: 'underline',
  },
});

export default styles;
