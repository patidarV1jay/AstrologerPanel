import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
    Colors,
    FONTS,
    horizontalScale,
    moderateScale,
    verticleScale,
} from '../../themes';
import TimeDelivery from './TimeDelivery';

const MsgComponent = (props: { sender?: any; item: any }) => {
  const { sender, item } = props;
  return (
    <Pressable style={{ marginVertical: 0}} key={item.id}>
      <View
        style={[styles.TriangleShapeCSS, sender ? styles.right : [styles.left]]}
      />
      <View
        style={[
          styles.masBox,
          {
            alignSelf: sender ? 'flex-end' : 'flex-start',
            backgroundColor: sender ? Colors.orange : Colors.light,
          },
        ]}>
        <Text
          style={{
            paddingLeft: horizontalScale(4),
            color: sender ? Colors.light : Colors.dark,
            fontFamily: FONTS.Regular,
            fontSize: moderateScale(15),
          }}>
          {item.message}
        </Text>

        <TimeDelivery sender={sender} item={item} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  masBox: {
    alignSelf: 'flex-end',
    marginHorizontal: horizontalScale(10),
    minWidth: horizontalScale(100),
    maxWidth: '80%',
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticleScale(10),
    paddingTop: verticleScale(10),
    borderRadius: moderateScale(8),
  },

  TriangleShapeCSS: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: moderateScale(15),
    borderRightWidth: moderateScale(5),
    borderBottomWidth: moderateScale(20),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  left: {
    borderBottomColor: Colors.light,
    left: horizontalScale(4),
    bottom: verticleScale(10),
    transform: [{ rotate: '0deg' }],
  },
  right: {
    borderBottomColor: Colors.orange,
    right: horizontalScale(4),
    bottom: verticleScale(10),
    transform: [{ rotate: '103deg' }],
  },
});

export default MsgComponent;
