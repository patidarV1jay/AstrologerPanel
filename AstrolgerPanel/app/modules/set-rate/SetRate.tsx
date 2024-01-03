import React from 'react';
import { View } from 'react-native';
import { ScreenString } from '../../constants';
import DropDownComponent from './DropDownComponent';
import styles from './SetRateStyles';
import useRate from './useRate';

const SetRate = () => {
  const {
    toggleDropDown,
    isRateDropDown,
    isDropDown,
    isLiveAudioDropDown,
    isLiveVideoDropDown,
    formikForLiveAudio,
    formikForPrivateChat,
    formikForLiveVideo,
    value,
  } = useRate();
  return (
    <View style={styles.container}>
      <DropDownComponent
        isRateDropDown={isRateDropDown}
        isDropDown={isDropDown}
        toggleDropDown={toggleDropDown}
        dropDownName="Private Call"
        privateCallRate={ScreenString.privateCallRate}
        formik={formikForPrivateChat}
      />
      <DropDownComponent
        isRateDropDown={isRateDropDown}
        isDropDown={isLiveAudioDropDown}
        toggleDropDown={toggleDropDown}
        dropDownName="Live Audio Call"
        privateCallRate={ScreenString.liveAudio}
        formik={formikForLiveAudio}
      />
      <DropDownComponent
        isRateDropDown={isRateDropDown}
        isDropDown={isLiveVideoDropDown}
        toggleDropDown={toggleDropDown}
        dropDownName="Live Video Call"
        privateCallRate={ScreenString.liveVideo}
        formik={formikForLiveVideo}
      />
    </View>
  );
};

export default SetRate;
