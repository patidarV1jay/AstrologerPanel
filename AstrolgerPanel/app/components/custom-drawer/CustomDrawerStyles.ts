import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';

const styles = StyleSheet.create({
  container: {flex:1},
  avatar: {
    height: verticleScale(140),
    width: horizontalScale(60),
  },
  drawerContainer: {
    backgroundColor: Colors.orange,
    marginTop: verticleScale(-10),
    flex: 1,
    marginBottom: verticleScale(10),
  },
  drawerContent: {
    alignItems: 'center',
    marginTop: verticleScale(10),
    paddingVertical: verticleScale(10),
  },
  name: {
    fontWeight: '500',
    fontSize: moderateScale(20),
    color: Colors.light,
    alignSelf: 'center',
    marginTop: verticleScale(8),
  },
  text: {
    alignSelf: 'center',
    fontSize: moderateScale(15),
    color: Colors.dark,
    marginTop: verticleScale(10),
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticleScale(10),
  },
  signOutView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(8),
  },
  signOutText: {
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(15),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.orange,
    width: '100%',
  },
  label: {
    fontWeight: '400',
    color: Colors.dark,
    fontSize: moderateScale(16),
  },
});

export default styles;
