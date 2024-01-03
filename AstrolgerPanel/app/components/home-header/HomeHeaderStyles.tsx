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
  lightContainer: {
    backgroundColor: Colors.light,
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(10),
    padding: moderateScale(5),
    marginTop: verticleScale(5),
    paddingHorizontal: horizontalScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amountText: {
    fontWeight: 'bold',
    color: Colors.cornFlowerBlue,
    fontSize: moderateScale(18),
  },
  dayIncomeText: {
    color: Colors.gray,
    fontSize: moderateScale(12),
  },
  view: {
    fontWeight: '500',
    fontSize: moderateScale(15),
    color: Colors.orange,
  },
  viewMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '22%',
    justifyContent: 'space-between',
  },
  incomeContainer: {
    width: '39%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vrLine: {
    borderLeftWidth: 1,
    borderColor: Colors.offShade,
    marginRight: horizontalScale(10),
  },
});

export default styles;
