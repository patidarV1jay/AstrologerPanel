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
    color: Colors.light,
  },
  subjectInput: {
    backgroundColor: Colors.offShade,
    fontSize: moderateScale(16),
    borderRadius: moderateScale(5),
    color: Colors.dark,
    marginBottom: verticleScale(30),
    paddingHorizontal: horizontalScale(10),
  },
  contentContainer: {
    marginTop: verticleScale(40),
    marginHorizontal: horizontalScale(10),
  },
  yourConcernInput: {
    height: verticleScale(400),
  },
  raiseTicketButton: {
    backgroundColor: Colors.cornFlowerBlue,
    marginHorizontal: horizontalScale(14),
    alignItems: 'center',
    paddingVertical: verticleScale(20),
    borderRadius: moderateScale(5),
  },
  raiseTicketText: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(18),
  },
});

export default styles;
