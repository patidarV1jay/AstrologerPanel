import React, { Dispatch, FC, SetStateAction } from 'react';
import { Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './HomeHeaderStyles';
import useHomeHeader from './useHomeHeader';
import { ScreenString } from '../../constants';

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}
const ProfileModal: FC<Props> = ({ isModalVisible, setIsModalVisible }) => {
  const { navigateToUpdateProfile, navigaeToSupport } = useHomeHeader();
  return (
    <Modal transparent visible={isModalVisible} animationType="fade">
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <View
            onTouchEnd={() => setIsModalVisible(false)}
            style={styles.closeModalContainer}
          />
          <View style={styles.popupContainer}>
            <TouchableWithoutFeedback>
              <Text style={styles.text}>{ScreenString.shareProfile}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.text} onPress={navigateToUpdateProfile}>
              {ScreenString.updateProfile}
            </Text>
            <Text style={styles.text} onPress={navigaeToSupport}>
              {ScreenString.support}
            </Text>
          </View>
        </View>
        <View
          onTouchEnd={() => setIsModalVisible(false)}
          style={styles.closeModalContainer}
        />
      </View>
    </Modal>
  );
};

export default ProfileModal;
