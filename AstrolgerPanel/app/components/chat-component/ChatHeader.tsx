import { useNavigation } from '@react-navigation/native';
import { User } from 'phosphor-react-native';
import React from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors, FONTS } from '../../themes';

const ChatHeader = (props: { data: any }) => {
  const { data } = props;
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.orange}
        translucent={false}
      />
      <Pressable onPress={() => navigation.goBack()}>
        <User />
      </Pressable>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text
          numberOfLines={1}
          style={{
            color: Colors.light,
            fontSize: 16,
            fontFamily: FONTS.SemiBold,
            textTransform: 'capitalize',
          }}>
          {/* {data.id}
           */}
           hey
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: Colors.orange,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ChatHeader;
