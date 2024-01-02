import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.orange,
  },
  text: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(15),
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: horizontalScale(5),
    marginBottom: verticleScale(20),
    marginTop: verticleScale(8)
  },
});

export default styles;
