import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import styles from './SecondaryHeaderStyles';
import { ArrowLeft } from 'phosphor-react-native';
import { Colors, moderateScale } from '../../themes';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
}
const SecondaryHeader: FC<Props> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Pressable onPress={navigation.goBack}>
          <ArrowLeft
            color={Colors.light}
            weight="bold"
            size={moderateScale(25)}
          />
        </Pressable>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default SecondaryHeader;
