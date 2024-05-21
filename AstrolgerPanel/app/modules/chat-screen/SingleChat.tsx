import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';
import moment from 'moment';
import { PaperPlaneTilt } from 'phosphor-react-native';
import { Images } from '../../assets';
import ChatHeader from '../../components/chat-component/ChatHeader';
import MsgComponent from '../../components/chat-component/MsgComponent';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';
import useChatScreen from './useChatScreen';

const SingleChat = () => {
  const { astroId, data } = useChatScreen();
  const [msg, setMsg] = useState('');
  const [allChat, setallChat] = useState<{ [key: string]: string }[]>([]);

  const onSend = () => {
    let msgData = {
      roomID: data?.roomId,
      message: msg,
      from: astroId,
      to: data.userId,
      sendTime: moment().format(),
      msgType: 'text',
    };

    const newReference = database().ref(`/${data?.roomId}/`).push();
    newReference.set(msgData).then(() => setMsg(''));
  };

  useEffect(() => {
    const onChildAdd = database()
      .ref(`/${data?.roomId}/`)
      .on('child_added', snapshot => {
        setallChat(state => [...state, snapshot.val()]);
      });
    return () =>
      database()
        .ref('/messages/' + data?.roomId)
        .off('child_added', onChildAdd);
  }, [data?.roomId]);

  return (
    <View style={styles.container}>
      <ChatHeader data={data} />
      <ImageBackground source={Images.bgImage} style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={allChat}
          showsVerticalScrollIndicator={false}
          keyExtractor={index => index.toString()}
          inverted
          renderItem={({ item }) => {
            return <MsgComponent sender={item.from == astroId} item={item} />;
          }}
        />
      </ImageBackground>

      <View
        style={{
          backgroundColor: Colors.orange,
          elevation: 5,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: verticleScale(15),
          justifyContent: 'space-evenly',
        }}>
        <TextInput
          style={{
            backgroundColor: Colors.fadeWhite,
            width: '80%',
            borderRadius: moderateScale(10),
            borderColor: Colors.light,
            paddingHorizontal: horizontalScale(15),
            color: Colors.dark,
          }}
          placeholder="Type Message"
          placeholderTextColor={Colors.dark}
          multiline={true}
          value={msg}
          onChangeText={val => setMsg(val)}
        />

        <TouchableOpacity onPress={onSend}>
          <PaperPlaneTilt color={Colors.light} size={moderateScale(25)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SingleChat;
