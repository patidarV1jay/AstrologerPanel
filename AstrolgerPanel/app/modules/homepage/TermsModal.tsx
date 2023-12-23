import {
  View,
  Text,
  StatusBar,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { Modal } from 'react-native';
import styles from './HomePageStyles';
import { Colors } from '../../themes';

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  operation: string;
  toggleStatus: (operation: string) => void;
}
const TermsModal: FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
  operation,
  toggleStatus,
}) => {
  return (
    <Modal visible={isModalVisible} transparent={true} animationType="fade">
      <StatusBar backgroundColor="#80808080" />
      <View style={styles.modalContainer}>
        <View style={{ flex: 1 }} onTouchEnd={() => setIsModalVisible(false)} />
        <View style={styles.modalContentContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.cornFlowerBlue,
              padding: 20,
              margin: 20,
            }}
            onPress={() => toggleStatus(operation)}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }} onTouchEnd={() => setIsModalVisible(false)} />
      </View>
    </Modal>
  );
};

export default TermsModal;
