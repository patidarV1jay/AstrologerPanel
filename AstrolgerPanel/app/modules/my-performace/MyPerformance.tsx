import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScreenString } from '../../constants';
import styles from './MyPerformanceStyles';

const MyPerformance = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.horizontalMargin}>
        <View style={styles.contentContainer}>
          <Text style={styles.darkBoldText}>{ScreenString.myFollowers}</Text>
          <Text style={styles.lightBackGroundText}>20</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.lightSkyBlueContainer}>
            <Text style={styles.smallSizeText}>
              {ScreenString.callPickupRate}
            </Text>
            <Text style={styles.orangeText}>50</Text>
          </View>
          <View style={styles.lightSkyBlueContainer}>
            <Text style={styles.smallSizeText}>
              {ScreenString.chatPickupRate}
            </Text>
            <Text style={styles.orangeText}>50</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.darkBoldText}>
            {ScreenString.freeCallChatConversionRate}
          </Text>
          <Text style={styles.lightBackGroundText}>20</Text>
        </View>
        <View style={[styles.contentContainer, styles.topSpace]}>
          <Text style={styles.darkBoldText}>
            {ScreenString.chatResponseRanking}
          </Text>
          <Text style={styles.lightBackGroundText}>20</Text>
        </View>
        <View style={[styles.contentContainer, styles.topSpace]}>
          <Text style={styles.darkBoldText}>
            {ScreenString.chatReponseTime}
          </Text>
          <Text style={styles.lightBackGroundText}>20</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.lightSkyBlueContainer}>
            <Text style={styles.smallSizeText}>{ScreenString.reviews}</Text>
            <Text style={styles.orangeText}>50</Text>
          </View>
          <View style={styles.lightSkyBlueContainer}>
            <Text style={styles.smallSizeText}>{ScreenString.rating}</Text>
            <Text style={styles.orangeText}>50</Text>
          </View>
        </View>
        <Text style={styles.calculationText}>
          {ScreenString.howAboveFactors}
        </Text>
        <Text style={styles.darkLightWeightText}>
          <Text style={styles.smallBoldText}>
            {ScreenString.freeCallConversion}
          </Text>
          {ScreenString.freeCallConversionCalculation}
        </Text>
        <Text style={styles.darkLightWeightText}>
          <Text style={styles.smallBoldText}>
            {ScreenString.callPickupRate} :
          </Text>
          {ScreenString.callRateCalculation}
        </Text>
        <Text style={styles.darkLightWeightText}>
          <Text style={styles.smallBoldText}>
            {ScreenString.chatPickupRate} :
          </Text>
          {ScreenString.chatRateCalculation}
        </Text>
        <Text style={styles.darkLightWeightText}>
          <Text style={styles.smallBoldText}>
            {ScreenString.chatResponseRanking} :
          </Text>
          {ScreenString.chatResponseRankingCalculation}
        </Text>
        <Text style={styles.darkLightWeightText}>
          <Text style={styles.smallBoldText}>
            {ScreenString.chatReponseTime} :
          </Text>
          {ScreenString.chatReponseTimeCalculation}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MyPerformance;
