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
    marginVertical: verticleScale(15),
  },
  bellnDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingIcon: {
    paddingRight: horizontalScale(8),
  },
  popupContainer: {
    backgroundColor: Colors.light,
    height: verticleScale(270),
    width: horizontalScale(150),
    borderRadius: moderateScale(4),
    marginRight: horizontalScale(10),
    marginTop: verticleScale(14),
  },
  closeModalContainer: {
    flex: 1,
  },
  text: {
    fontWeight: '400',
    color: Colors.dark,
    padding: moderateScale(10),
    fontSize: moderateScale(15),
  },
  dailyCreditText: {
    fontWeight: '500',
    color: Colors.light,
    fontSize: moderateScale(18),
  },
  creditContainer: {
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rupeesText: {
    fontWeight: '500',
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(14),
    color: Colors.light,
  },
  row: {
    flexDirection: 'row',
  },
});

export default styles;
