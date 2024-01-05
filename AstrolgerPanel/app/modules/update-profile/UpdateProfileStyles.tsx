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
  categories: {
    color: Colors.dark,
    fontSize: moderateScale(16),
  },
  contentConatiner: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(20),
    backgroundColor: Colors.light,
    elevation: 4,
    shadowColor: Colors.gray,
    padding: moderateScale(15),
    borderRadius: moderateScale(5),
    alignItems: 'center',
  },
  text: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(20),
    marginLeft: horizontalScale(15),
  },
  dropDownContainer: {
    backgroundColor: Colors.light,
    marginVertical: verticleScale(10),
    elevation: 5,
    shadowColor: Colors.gray,
    marginHorizontal: horizontalScale(12),
    borderRadius: moderateScale(5),
  },
  categoryText: {
    fontSize: moderateScale(20),
    fontWeight: '500',
    color: Colors.orange,
    marginLeft: horizontalScale(10),
  },
  buttonText: {
    alignSelf: 'center',
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(18),
    padding: moderateScale(8),
  },
  dropDownContentContainer: {
    marginVertical: verticleScale(15),
    marginHorizontal: horizontalScale(15),
  },
  section: {
    borderBottomWidth: 1,
    marginBottom: verticleScale(15),
    borderColor: Colors.gray,
    marginVertical: verticleScale(25),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.orange,
    marginVertical: verticleScale(28),
    borderRadius: moderateScale(5),
  },
  flatlistView: {
    borderWidth: 1,
    width: '50%',
    borderRadius: moderateScale(5),
  },
  padding: {
    padding: moderateScale(5),
  },
});

export default styles;
