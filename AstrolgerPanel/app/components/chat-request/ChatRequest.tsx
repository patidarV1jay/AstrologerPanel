import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './ChatRequestStyles';
import useChatRequest from './useChatRequest';
import { chatModalReducer } from '../../redux';

const ChatRequest = () => {
  const { isChat, dispatch, handleChatRequest } = useChatRequest();
  return (
    <Modal
      visible={isChat}
      onRequestClose={() => dispatch(chatModalReducer(false))}
      transparent>
      <View style={styles.container}>
        <View style={styles.requestContainer}>
          <Text style={styles.requestText}>
            Someone has a made request to chat with you.
          </Text>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleChatRequest('approve')}>
              <Text style={styles.optionText}> Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonColor]}
              onPress={() => handleChatRequest('reject')}>
              <Text style={styles.optionText}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChatRequest;
