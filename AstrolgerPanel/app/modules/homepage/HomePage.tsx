import { CaretRight, VideoCamera } from 'phosphor-react-native';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../assets';
import { ScreenString } from '../../constants';
import { Colors, moderateScale, verticleScale } from '../../themes';
import styles from './HomePageStyles';
import TermsModal from './TermsModal';
import useHomePage from './useHomePage';

const HomePage = () => {
  const {
    slider,
    setSlider,
    toggleStatus,
    setIsModalVisible,
    isModalVisible,
    toggleVisibility,
    operation,
    navigateToEarningDetails,
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
        {/* <View style={styles.dailyIncome}>
          <Text style={styles.creditText}>Daily Credits:</Text>
          <Text style={styles.amountText}>2000</Text>
        </View>
        <Pressable
          style={styles.totalEarningsView}
          onPress={navigateToEarningDetails}>
          <Text style={styles.totalEarningText}>
            {ScreenString.earningDetails}
          </Text>
          <CaretRight size={moderateScale(25)} weight="bold" />
        </Pressable> */}
        <View style={styles.statusContainer}>
          <View style={styles.statusContent}>
            <Text style={styles.availabilityStatusText}>
              Unavailable for Call
            </Text>
            <Pressable
              onPress={
                !slider.call
                  ? () => toggleVisibility('call')
                  : () => setSlider({ ...slider, call: false })
              }>
              <View
                style={slider.call ? styles.buttonFillOrange : styles.button}>
                <View
                  style={
                    slider.call ? styles.circleFill : styles.circle
                  }></View>
              </View>
            </Pressable>
          </View>
          <View style={styles.statusContent}>
            <Text style={styles.availabilityStatusText}>
              Unavailable for Chat
            </Text>
            <Pressable
              onPress={
                slider.chat
                  ? () => setSlider({ ...slider, chat: false })
                  : () => toggleVisibility('chat')
              }>
              <View
                style={slider.chat ? styles.buttonFillOrange : styles.button}>
                <View
                  style={
                    slider.chat ? styles.circleFill : styles.circle
                  }></View>
              </View>
            </Pressable>
          </View>
          <View style={styles.statusContent}>
            <Text style={styles.availabilityStatusText}>
              Unavailable for Video Call
            </Text>
            <Pressable
              onPress={
                slider.videoChat
                  ? () => setSlider({ ...slider, videoChat: false })
                  : () => toggleVisibility('videoChat')
              }>
              <View
                style={
                  slider.videoChat ? styles.buttonFillOrange : styles.button
                }>
                <View
                  style={
                    slider.videoChat ? styles.circleFill : styles.circle
                  }></View>
              </View>
            </Pressable>
          </View>
          <View style={[styles.statusContent, styles.bottomSpace]}>
            <Text style={styles.availabilityStatusText}>
              Unlimited free call and chats
            </Text>
            <Pressable
              onPress={
                slider.freeChat
                  ? () => setSlider({ ...slider, freeChat: false })
                  : () => toggleVisibility('freeChat')
              }>
              <View
                style={
                  slider.freeChat ? styles.buttonFillOrange : styles.button
                }>
                <View
                  style={
                    slider.freeChat ? styles.circleFill : styles.circle
                  }></View>
              </View>
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
      </ScrollView>
      <TouchableOpacity style={styles.footer}>
        <VideoCamera
          size={moderateScale(28)}
          color={Colors.light}
          weight="bold"
        />
        <Text style={styles.goLiveText}>{ScreenString.goLive}</Text>
      </TouchableOpacity>
      <TermsModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        operation={operation}
        toggleStatus={toggleStatus}
      />
    </View>
  );
};

export default HomePage;
