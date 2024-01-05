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
  horizontalMargin: {
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(35),
  },
  contentContainer: {
    backgroundColor: Colors.ligthtSkyBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(5),
  },
  darkBoldText: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  lightBackGroundText: {
    backgroundColor: Colors.light,
    color: Colors.orange,
    fontWeight: '500',
    fontSize: moderateScale(18),
    paddingHorizontal: moderateScale(30),
    borderRadius: moderateScale(5),
    marginVertical: moderateScale(5),
    paddingVertical: verticleScale(20),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lightSkyBlueContainer: {
    backgroundColor: Colors.ligthtSkyBlue,
    marginVertical: verticleScale(30),
    width: '49%',
    borderRadius: moderateScale(5),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticleScale(12),
  },
  orangeText: {
    color: Colors.orange,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginTop: verticleScale(5),
  },
  smallSizeText: {
    fontSize: 14,
    color: Colors.dark,
    fontWeight: '500',
  },
  topSpace:{
    marginTop: verticleScale(30)
  },
  darkLightWeightText:{
    color: Colors.dark,
    marginTop: verticleScale(10)
  },
  calculationText:{
    fontWeight: '500',
    color: Colors.dark,
  },
  smallBoldText:{
    fontWeight: '500'
  }
});

export default styles;
