import {
  ChartLineUp,
  HandCoins,
  SealCheck,
  VideoCamera,
} from 'phosphor-react-native';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../assets';
import { ScreenString } from '../../constants';
import { Colors, moderateScale, verticleScale } from '../../themes';
import styles from './HomePageStyles';
import TermsModal from './TermsModal';
import useHomePage from './useHomePage';
import { ChatRequest } from '../../components';
import { useKeyboard } from '../../hooks';

const HomePage = () => {
  const {
    setIsModalVisible,
    isModalVisible,
    toggleCallAvaibility,
    toggle,
    callAvaibility,
    isLoading,
    liveStreamLoader,
    onJoinPress,
    handleSend,
    handleFeedback,
    input,
    feature,
    setfeature,
    toggleChatAvaibility,
    chatAvaibility,
    chatLoader,
    toggleChat,
    experience,
  } = useHomePage();

  const { isKeyboardVisible } = useKeyboard();
  return (
    <View style={styles.container}>
      <View style={styles.orangeContainer} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={{ paddingBottom: verticleScale(80) }}>
        <View style={styles.imageView}>
          <Image style={styles.banner} source={Images.banner} />
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.number}>{experience}</Text>
            <Text style={styles.numberText}>Experience</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.number}>4</Text>
            <Text style={styles.numberText}>Followers</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.number}>150</Text>
            <Text style={styles.numberText}>Total Calls Today</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.number}>56</Text>
            <Text style={styles.numberText}>Total Chats Today</Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.statusContent}>
            {callAvaibility?.flag === 'true' ? (
              <Text style={styles.availabilityStatusText}>
                Available For Call
              </Text>
            ) : (
              <Text style={styles.availabilityStatusText}>
                {ScreenString.unavailable} {ScreenString.call}
              </Text>
            )}
            <Pressable
              onPress={
                !toggle
                  ? () => {
                      setIsModalVisible(true);
                      setfeature('call');
                    }
                  : () => toggleCallAvaibility('false')
              }>
              {isLoading ? (
                <View style={{ alignItems: 'center' }}>
                  <ActivityIndicator />
                </View>
              ) : (
                <View
                  style={
                    callAvaibility?.flag === 'true'
                      ? styles.buttonFillOrange
                      : styles.button
                  }>
                  <View
                    style={
                      callAvaibility?.flag === 'true'
                        ? styles.circleFill
                        : styles.circle
                    }></View>
                </View>
              )}
            </Pressable>
          </View>
          <View style={styles.statusContent}>
            {chatAvaibility?.flag === 'true' ? (
              <Text style={styles.availabilityStatusText}>
                Available For Chat
              </Text>
            ) : (
              <Text style={styles.availabilityStatusText}>
                {ScreenString.unavailable} Chat
              </Text>
            )}
            <Pressable
              onPress={
                !toggleChat
                  ? () => {
                      setIsModalVisible(true);
                      setfeature('chat');
                    }
                  : () => toggleChatAvaibility('false')
              }>
              {chatLoader ? (
                <View style={{ alignItems: 'center' }}>
                  <ActivityIndicator />
                </View>
              ) : (
                <View
                  style={
                    chatAvaibility?.flag === 'true'
                      ? styles.buttonFillOrange
                      : styles.button
                  }>
                  <View
                    style={
                      chatAvaibility?.flag === 'true'
                        ? styles.circleFill
                        : styles.circle
                    }></View>
                </View>
              )}
            </Pressable>
          </View>
        </View>
        {/* <View style={[styles.statusContainer, styles.getDetailsContainer]}>
          <Text style={styles.wishToGetText}>
            {ScreenString.wishToGetBirthDetails}
          </Text>
          <TouchableOpacity style={styles.birthDetailsButton}>
            <Text style={styles.birthDetailsText}>
              {ScreenString.getBirthDetails}
            </Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackHeader}>Talk To The Director</Text>
          <Text style={styles.feedbackSubHeader}>
            Help Us to Improve By Your Valuable Feedback
          </Text>
          <TextInput
            placeholder="Your Feedback"
            placeholderTextColor={Colors.gray}
            style={styles.feedbackInput}
            multiline={true}
            textAlignVertical="top"
            value={input}
            onChangeText={handleFeedback}
            onSubmitEditing={handleSend}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <View style={styles.iconContainer}>
            <HandCoins
              color={Colors.offShade}
              size={moderateScale(35)}
              weight="regular"
            />
            <Text style={styles.iconText}>Secure Payments</Text>
          </View>
          <View style={styles.iconContainer}>
            <SealCheck
              color={Colors.offShade}
              size={moderateScale(35)}
              weight="regular"
            />
            <Text style={styles.iconText}>Assurance</Text>
          </View>
          <View style={styles.iconContainer}>
            <ChartLineUp
              color={Colors.offShade}
              size={moderateScale(35)}
              weight="regular"
            />
            <Text style={styles.iconText}>Growth</Text>
          </View>
        </View>
      </ScrollView>
      {!isKeyboardVisible && (
        <>
          {liveStreamLoader ? (
            <View style={styles.footer}>
              <ActivityIndicator />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.footer}
              onPress={() => onJoinPress(true)}>
              <VideoCamera
                size={moderateScale(28)}
                color={Colors.light}
                weight="bold"
              />
              <Text style={styles.goLiveText}>{ScreenString.goLive}</Text>
            </TouchableOpacity>
          )}
        </>
      )}
      <TermsModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        toggleCallVisibility={toggleCallAvaibility}
        setfeature={setfeature}
        feature={feature}
        toggleChatAvaibility={toggleChatAvaibility}
      />
      <ChatRequest />
    </View>
  );
};

export default HomePage;
