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
  welcomeText: {
    fontWeight: '500',
    fontSize: moderateScale(12),
    color: Colors.dark,
    marginBottom: verticleScale(-5),
  },
  lekhaJhokaText: {
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    color: Colors.light,
  },
  contentContainer: {
    marginHorizontal: horizontalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticleScale(8),
  },
  bellnDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingIcon: {
    paddingRight: horizontalScale(8),
  },
});

export default styles;
