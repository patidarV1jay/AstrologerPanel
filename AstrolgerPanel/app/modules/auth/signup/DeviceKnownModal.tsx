import { CheckSquare, Square } from 'phosphor-react-native';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import { ScreenString } from '../../../constants';
import { Colors, moderateScale } from '../../../themes';
import { DeviceType } from '../../../types';
import styles from './SignupScreenStyles';

interface Props {
  isDevicesVisible: boolean;
  setIsDevicesVisible: Dispatch<SetStateAction<boolean>>;
  device: DeviceType[];
  language: DeviceType[];
  toggleDeviceSelection: (id: number) => void;
  toggleLanguageSelection: (id: number) => void;
  setSelection: (system: string) => void;
  cancelSelection: (name: string) => void;
  system: string;
}

const DeviceKnownModal: FC<Props> = ({
  isDevicesVisible,
  device,
  toggleDeviceSelection,
  toggleLanguageSelection,
  setSelection,
  cancelSelection,
  system,
  language,
}) => {
  return (
    <Modal transparent visible={isDevicesVisible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <FlatList
            data={system == 'system' ? device : language}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.checkButton}
                  onPress={() =>
                    system === 'system'
                      ? toggleDeviceSelection(item.id)
                      : toggleLanguageSelection(item.id)
                  }>
                  {item.isSelected ? (
                    <CheckSquare size={moderateScale(24)} />
                  ) : (
                    <Square size={moderateScale(24)} />
                  )}

                  <Text style={styles.deviceText} numberOfLines={2}>
                    {item.device}
                  </Text>
                </TouchableOpacity>
              );
            }}
            key={2}
            numColumns={2}
          />
          <View style={styles.bottomButton}>
            <TouchableOpacity onPress={() => setSelection(system)}>
              <Text style={styles.bottomButtonText}>{ScreenString.set}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => cancelSelection(system)}>
              {language.length !== undefined ? (
                <Text style={[styles.bottomButtonText]}>
                  {ScreenString.cancel}
                </Text>
              ) : (
                <Text
                  style={[styles.bottomButtonText, { color: Colors.offShade }]}>
                  {ScreenString.cancel}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeviceKnownModal;
