import React, { useRef } from 'react';
import { View } from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, {
  HOST_DEFAULT_CONFIG,
  ZegoMenuBarButtonName,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import * as ZIM from 'zego-zim-react-native';
import { Credentials, Routes } from '../../constants';
import styles from './HostPageStyles';
import useHostPage from './useHostPage';
import { stopLiveStreamCall } from '../../redux';
import { goLiveCall } from '../../redux';

export default function HostPage() {
  const prebuiltRef = useRef();
  const { loggedInUser, dispatch, liveID, userID, userName, navigation } =
    useHostPage();

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltLiveStreaming
        ref={prebuiltRef}
        appID={Credentials.appId}
        appSign={Credentials.appSign}
        userID={userID}
        userName={userName}
        liveID={liveID}
        config={{
          ...HOST_DEFAULT_CONFIG,
          onStartLiveButtonPressed: () => {
            // console.log('########HostPage onStartLiveButtonPressed');
            dispatch(goLiveCall({ userID, liveID }));
          },
          onLiveStreamingEnded: () => {
            dispatch(stopLiveStreamCall({ userID, liveID }));
            console.log('########HostPage onLiveStreamingEnded');
          },
          onLeaveLiveStreaming: () => {
            console.log('########HostPage onLeaveLiveStreaming');
            // dispatch(stopLiveStreamCall({userID, liveID}))
            navigation.navigate(Routes.HomeScreen);
          },
          durationConfig: {
            isVisible: true,
            // onDurationUpdate: duration => {
            //   console.log('########HostPage onDurationUpdate', duration);
            //   if (duration === 10 * 60) {
            //     prebuiltRef.current.leave();
            //   }
            // },
          },
          topMenuBarConfig: {
            buttons: [
              ZegoMenuBarButtonName.minimizingButton,
              ZegoMenuBarButtonName.leaveButton,
            ],
          },
          onWindowMinimized: () => {
            console.log('[Demo]HostPage onWindowMinimized');
            navigation.navigate(Routes.HomeScreen);
          },
          onWindowMaximized: () => {
            console.log('[Demo]HostPage onWindowMaximized');
            navigation.navigate('HostPage', {
              userID: userID,
              userName: userName,
              liveID: liveID,
            });
          },
        }}
        plugins={[ZIM]}
      />
    </View>
  );
}
