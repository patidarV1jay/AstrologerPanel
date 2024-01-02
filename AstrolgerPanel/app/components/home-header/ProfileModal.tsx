import React, { Dispatch, FC, SetStateAction } from 'react';
import { Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './HomeHeaderStyles';
import useHomeHeader from './useHomeHeader';

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}
const ProfileModal: FC<Props> = ({ isModalVisible, setIsModalVisible }) => {
  const { signOut, navigateToUpdateProfile } = useHomeHeader();
  return (
    <Modal transparent visible={isModalVisible} animationType="fade">
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <View
            onTouchEnd={() => setIsModalVisible(false)}
            style={styles.closeModalContainer}
          />
          <View style={styles.popupContainer}>
            <TouchableWithoutFeedback>
              <Text style={styles.text}>Share Profile</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.text} onPress={navigateToUpdateProfile}>Update Profile</Text>
            <TouchableWithoutFeedback>
              <Text style={styles.text} onPress={signOut}>
                Signout
              </Text>
            </TouchableWithoutFeedback>
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
