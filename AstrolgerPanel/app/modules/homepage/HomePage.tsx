import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../assets';
import { IconList, ScreenString } from '../../constants';
import { Colors, moderateScale, verticleScale } from '../../themes';
import styles from './HomePageStyles';
import useHomePage from './useHomePage';
import TermsModal from './TermsModal';

const HomePage = () => {
  const {
    slider,
    setSlider,
    toggleStatus,
    setIsModalVisible,
    isModalVisible,
    toggleVisibility,
    operation,
  } = useHomePage();

  console.log(slider.chat);
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

        <View style={styles.profileView}>
          <Image style={styles.avatar} source={Images.avatar} />
          <View>
            <Text style={styles.name}>Aacharya Hardeep</Text>
            <Text style={styles.text}>hardeepsaini78@gmail.com</Text>
            <Text style={styles.text}>ID: 4579</Text>
            <Text style={styles.text}>Followers: 32</Text>
          </View>
        </View>
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
          <View style={[styles.statusContent, styles.bottomSpace]}>
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
        <View style={styles.freeVoiceChatContainer}>
          <Text style={styles.availabilityStatusText}>
            Unlimited free calls and chats
          </Text>
          <Pressable
            onPress={
              slider.freeChat
                ? () => setSlider({ ...slider, freeChat: false })
                : () => toggleVisibility('freeChat')
            }>
            <View
              style={slider.freeChat ? styles.buttonFillOrange : styles.button}>
              <View
                style={
                  slider.freeChat ? styles.circleFill : styles.circle
                }></View>
            </View>
          </Pressable>
        </View>
        <TouchableOpacity style={styles.boostProfileButton}>
          <Text style={styles.birthDetailsText}>
            {ScreenString.boostProfile}
          </Text>
        </TouchableOpacity>
        {/* <View style={styles.statusContainer}>
          <FlatList
            data={IconList}
            renderItem={({ item }) => {
              return (
                <View>
                  <Image
                    source={item.source}
                    style={{
                      width: moderateScale(170),
                      height: moderateScale(360),
                    }}
                  />
                  <Text style={{ color: 'black' }}>{item.title}</Text>
                </View>
              );
            }}
            scrollEnabled={false}
          />
        </View> */}
        
      </ScrollView>
      <View
        style={{
          backgroundColor: Colors.orange,
          padding: 10,
          position: 'absolute',
          bottom: 0,
          flex: 1,
          width: '100%',
          elevation: 20,
          shadowColor: Colors.gray,
        }}
      />
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
