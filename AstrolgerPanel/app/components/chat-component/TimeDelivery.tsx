import moment from 'moment';
import { CheckCircle } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticleScale } from '../../themes';

const TimeDelivery = (props: { sender: any; item: any }) => {
  const { sender, item } = props;
  return (
    <View
      style={[
        styles.mainView,
        {
          justifyContent: 'flex-end',
        },
      ]}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: moderateScale(8),
          color: sender ? Colors.light : Colors.orange,
          marginRight: horizontalScale(2)
        }}>
        {moment(item.send_time).format('LLL')}
      </Text>
      <CheckCircle size={moderateScale(14)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticleScale(4),
  },
});

export default TimeDelivery;
