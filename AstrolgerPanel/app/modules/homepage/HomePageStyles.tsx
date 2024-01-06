import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#80808080',
  },
  redText: {
    color: Colors.red,
    fontSize: moderateScale(12),
  },

  centerText: {
    alignSelf: 'center',
    fontWeight: '500',
    color: Colors.light,
  },
  conditionContainer: { marginHorizontal: horizontalScale(20) },
  modalContentContainer: {
    backgroundColor: Colors.light,
    width: '80%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
  },
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    position: 'relative',
  },
  avatar: {
    height: verticleScale(140),
    width: horizontalScale(60),
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: horizontalScale(4),
    borderRadius: 2,
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: Colors.gray,
    marginTop: verticleScale(5),
    paddingHorizontal: horizontalScale(14),
    paddingVertical: verticleScale(18),
  },
  name: {
    fontWeight: 'bold',
    fontSize: moderateScale(22),
    color: Colors.orange,
  },
  text: {
    color: Colors.dark,
    fontWeight: '400',
    fontSize: moderateScale(15),
  },
  scrollContainer: {
    backgroundColor: Colors.light,
    position: 'absolute',
    height: '100%',
    width: '96%',
    alignSelf: 'center',
    top: 10,
    borderRadius: moderateScale(10),
    elevation: 20,
    shadowColor: Colors.gray,
  },
  banner: {
    width: '100%',
    height: verticleScale(135),
    borderRadius: moderateScale(10),
  },
  imageView: {
    marginTop: verticleScale(4),
    marginHorizontal: horizontalScale(2),
    marginBottom: verticleScale(20),
  },
  orangeContainer: {
    height: '15%',
    backgroundColor: Colors.orange,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  availabilityStatusText: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(18),
  },
  button: {
    borderWidth: 2,
    height: verticleScale(60),
    width: horizontalScale(60),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    borderColor: Colors.orange,
  },
  buttonFillOrange: {
    borderWidth: 2,
    height: verticleScale(60),
    width: horizontalScale(60),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    borderColor: Colors.orange,
    backgroundColor: Colors.orange,
  },
  circle: {
    height: '88%',
    borderWidth: 2,
    width: '39%',
    borderRadius: 2000,
    marginLeft: verticleScale(5),
    borderColor: Colors.orange,
  },
  circleFill: {
    height: '88%',
    width: '39%',
    borderRadius: 2000,
    marginHorizontal: verticleScale(5),
    position: 'absolute',
    right: 0,
    backgroundColor: Colors.light,
  },
  statusContainer: {
    marginTop: verticleScale(25),
    marginHorizontal: horizontalScale(4),
    borderWidth: 1,
    borderColor: Colors.offShade,
    borderRadius: moderateScale(5),
    paddingBottom: verticleScale(20),
  },
  statusContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(14),
    marginTop: verticleScale(35),
  },
  wishToGetText: {
    color: Colors.dark,
    paddingHorizontal: horizontalScale(14),
    justifyContent: 'center',
    fontSize: moderateScale(16),
    marginBottom: verticleScale(15),
    fontWeight: '400',
  },
  bottomSpace: {
    marginBottom: verticleScale(20),
  },
  birthDetailsButton: {
    backgroundColor: Colors.cornFlowerBlue,
    marginHorizontal: horizontalScale(14),
    borderRadius: moderateScale(10),
    marginTop: verticleScale(20),
  },
  birthDetailsText: {
    padding: moderateScale(10),
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    color: Colors.light,
  },
  getDetailsContainer: {
    paddingVertical: verticleScale(25),
  },
  amountText: {
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    marginLeft: verticleScale(20),
    color: Colors.dark,
  },
  creditText: {
    fontWeight: '500',
    fontSize: moderateScale(18),
    color: Colors.dark,
  },
  footer: {
    backgroundColor: Colors.orange,
    padding: 10,
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
    elevation: 20,
    shadowColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goLiveText: {
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    color: Colors.light,
    marginLeft: horizontalScale(10),
  },
  dailyIncome: {
    flexDirection: 'row',
    backgroundColor: Colors.light,
    justifyContent: 'center',
    elevation: 3,
    shadowColor: Colors.offShade,
    padding: moderateScale(10),
    marginHorizontal: horizontalScale(4),
  },
  totalEarningsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.offShade,
    marginHorizontal: horizontalScale(4),
    borderRadius: moderateScale(5),
    marginTop: verticleScale(25),
  },
  totalEarningText: {
    fontWeight: '500',
    color: Colors.dark,
    padding: moderateScale(10),
    fontSize: moderateScale(18),
  },
  flex: {
    flex: 1,
  },
  importantText: {
    color: Colors.red,
    fontWeight: '500',
    fontSize: moderateScale(20),
    marginTop: verticleScale(10),
    alignSelf: 'center',
  },
  pointsText: {
    color: Colors.dark,
    fontSize: moderateScale(12),
    marginVertical: verticleScale(5),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonFillBlue: {
    backgroundColor: Colors.cornFlowerBlue,
    width: '40%',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    marginVertical: verticleScale(30),
  },
});

export default styles;
