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
    marginTop: verticleScale(15),
  },
  earningContainer: {
    backgroundColor: Colors.light,
    elevation: 20,
    shadowColor: Colors.gray,
    marginHorizontal: horizontalScale(10),
    padding: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: moderateScale(10),
    marginVertical: verticleScale(10),
  },
  myEarningText: {
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(18),
    padding: verticleScale(15),
  },
  thisMonthText: {
    fontWeight: '400',
    fontSize: moderateScale(14),
    color: Colors.gray,
  },
  amount: {
    color: Colors.orange,
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
  blueContainer: {
    backgroundColor: Colors.cornFlowerBlue,
    padding: moderateScale(14),
    marginHorizontal: horizontalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: moderateScale(10),
  },
  earningText: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  textAffiliate: {
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    color: Colors.orange,
  },
  overallAffiliateText: {
    fontWeight: '400',
    color: Colors.gray
  },
  spaceAround: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(10),
    justifyContent: 'space-around',
    backgroundColor: Colors.ligthtSkyBlue,
    padding: moderateScale(2),
    borderRadius: moderateScale(10),
  },
  darkBlueContainer: {
    backgroundColor: Colors.light,
    flex: 1,
    padding: moderateScale(10),
    marginHorizontal: horizontalScale(2),
    borderRadius: moderateScale(5),
    marginVertical: verticleScale(20),
  },
  spacebottom: {
    marginVertical: verticleScale(20),
  },
  lightContainer: {
    backgroundColor: Colors.ligthtSkyBlue,
    padding: moderateScale(2),
    borderRadius: moderateScale(10),
    marginHorizontal: horizontalScale(10),
  },
  bottomMargin: {
    marginBottom: verticleScale(20),
  },
});

export default styles;
