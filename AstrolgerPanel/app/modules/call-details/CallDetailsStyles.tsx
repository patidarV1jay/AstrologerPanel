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
});

export default styles;
