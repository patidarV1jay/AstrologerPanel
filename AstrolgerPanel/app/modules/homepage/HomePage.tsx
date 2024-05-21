import { VideoCamera } from 'phosphor-react-native';
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

const HomePage = () => {
  const {
    setIsModalVisible,
    isModalVisible,
    toggleCallAvaibility,
    toggle,
    callAvaibility,
    isLoading,
    isError,
    liveStreamLoader,
    onJoinPress,
    handleSend,
    handleFeedback,
    input,
    chat,
    setChat,
    videoCall,
    setVideoCall,
    freeCall,
    setFreeCall,
    isChat,
  } = useHomePage();
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
            {!isError && toggle && callAvaibility?.status ? (
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
                  ? () => setIsModalVisible(true)
                  : () => toggleCallAvaibility('false')
              }>
              {isLoading ? (
                <View style={{ alignItems: 'center' }}>
                  <ActivityIndicator />
                </View>
              ) : (
                <View
                  style={
                    !isError && toggle && callAvaibility?.status
                      ? styles.buttonFillOrange
                      : styles.button
                  }>
                  <View
                    style={
                      !isError && toggle && callAvaibility?.status
                        ? styles.circleFill
                        : styles.circle
                    }></View>
                </View>
              )}
            </Pressable>
          </View>
          <View style={styles.statusContent}>
            {chat ? (
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
                // !toggle
                //   ? () => setIsModalVisible(true)
                //   : () => toggleCallAvaibility('false')
                () => setChat(!chat)
              }>
              <View style={chat ? styles.buttonFillOrange : styles.button}>
                <View style={chat ? styles.circleFill : styles.circle}></View>
              </View>
            </Pressable>
          </View>
          <View style={styles.statusContent}>
            {videoCall ? (
              <Text style={styles.availabilityStatusText}>
                Available For Video Call
              </Text>
            ) : (
              <Text style={styles.availabilityStatusText}>
                {ScreenString.unavailable} Video Call
              </Text>
            )}
            <Pressable
              onPress={
                // !toggle
                //   ? () => setIsModalVisible(true)
                //   : () => toggleCallAvaibility('false')
                () => setVideoCall(!videoCall)
              }>
              {/* {isLoading ? (
                <View style={{ alignItems: 'center' }}>
                  <ActivityIndicator />
                </View>
              ) : ( */}
              <View style={videoCall ? styles.buttonFillOrange : styles.button}>
                <View
                  style={videoCall ? styles.circleFill : styles.circle}></View>
              </View>
              {/* )} */}
            </Pressable>
          </View>
          <View style={styles.statusContent}>
            {freeCall ? (
              <Text style={styles.availabilityStatusText}>
                Available For Free Call
              </Text>
            ) : (
              <Text style={styles.availabilityStatusText}>
                Unlimited Free Call And Chat
              </Text>
            )}
            <Pressable
              onPress={
                // !toggle
                //   ? () => setIsModalVisible(true)
                //   : () => toggleCallAvaibility('false')
                () => setFreeCall(!freeCall)
              }>
              {/* {isLoading ? (
                <View style={{ alignItems: 'center' }}>
                  <ActivityIndicator />
                </View>
              ) : ( */}
              <View style={freeCall ? styles.buttonFillOrange : styles.button}>
                <View
                  style={freeCall ? styles.circleFill : styles.circle}></View>
              </View>
              {/* )} */}
            </Pressable>
          </View>
        </View>
        <View style={[styles.statusContainer, styles.getDetailsContainer]}>
          <Text style={styles.wishToGetText}>
            {ScreenString.wishToGetBirthDetails}
          </Text>
          <TouchableOpacity style={styles.birthDetailsButton}>
            <Text style={styles.birthDetailsText}>
              {ScreenString.getBirthDetails}
            </Text>
          </TouchableOpacity>
        </View>
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
      </ScrollView>
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

      <TermsModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        toggle={toggle}
        toggleCallVisibility={toggleCallAvaibility}
      />
      <ChatRequest />
    </View>
  );
};

export default HomePage;
