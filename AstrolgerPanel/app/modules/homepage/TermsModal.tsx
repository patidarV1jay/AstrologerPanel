import React, { Dispatch, FC, SetStateAction } from 'react';
import { Modal, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ImportantPoints, ScreenString } from '../../constants';
import { Colors } from '../../themes';
import styles from './HomePageStyles';
import { FlatList } from 'react-native-gesture-handler';

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
      <StatusBar backgroundColor={Colors.statusColor} />
      <View style={styles.modalContainer}>
        <View style={styles.flex} onTouchEnd={() => setIsModalVisible(false)} />
        <View style={styles.modalContentContainer}>
          <View style={styles.conditionContainer}>
            <Text style={styles.importantText}>{ScreenString.important}</Text>
            <FlatList
              data={ImportantPoints}
              renderItem={({ item }) => {
                return <Text style={styles.pointsText}>{item}</Text>;
              }}
            />
            <Text style={styles.redText}>
            {ScreenString.respectPolicy}
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonFillBlue}
              onPress={() => setIsModalVisible(false)}>
              <Text style={styles.centerText}>{ScreenString.cancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonFillBlue}
              onPress={() => toggleStatus(operation)}>
              <Text style={styles.centerText}>{ScreenString.proceed}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flex} onTouchEnd={() => setIsModalVisible(false)} />
      </View>
    </Modal>
  );
};

export default TermsModal;
