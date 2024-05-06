import { VideoCamera } from 'phosphor-react-native';
import React from 'react';
import {
  ActivityIndicator,
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
    goLive,
    toggleCallAvaibility,
    toggle,
    callAvaibility,
    isLoading,
    error,
    isError,
    liveStreamLoader,
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
        <View style={styles.statusContainer}>
          <View style={styles.statusContent}>
            <Text style={styles.availabilityStatusText}>
              {ScreenString.unavailable} {ScreenString.call}
            </Text>
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
            <Text style={styles.availabilityStatusText}>
              {ScreenString.unavailable} {ScreenString.chat}
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
              {ScreenString.unavailable} {ScreenString.videoCall}
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
              {ScreenString.unlimited}
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
      {liveStreamLoader ? (
        <View style={styles.footer}>
          <ActivityIndicator />
        </View>
      ) : (
        <TouchableOpacity style={styles.footer} onPress={() => goLive('true')}>
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
        operation={operation}
        toggleStatus={toggleStatus}
        toggle={toggle}
        toggleCallVisibility={toggleCallAvaibility}
      />
    </View>
  );
};

export default HomePage;
