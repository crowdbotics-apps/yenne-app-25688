import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import YNHeaderTitle from '../HeaderTitle';

const YNCardTitle = ({ navigation, title, onActionPress = () => {} }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <View
      style={[
        styles.row,
        styles.flexOne,
        styles.justifyContent,
        styles.cardHeader,
      ]}
    >
      <YNHeaderTitle
        category="h6"
        title={title}
        style={{ color: theme['color-primary-black'] }}
      />
      <TouchableOpacity
        onPress={onActionPress}
        style={[styles.row]}
      ></TouchableOpacity>
    </View>
  );
};

const themedStyles = StyleService.create({
  cardHeader: { paddingTop: hp('2%') },
  row: { flexDirection: 'row' },
  flexOne: { flex: 1 },
  justifyContent: { justifyContent: 'space-between' },
});

export default YNCardTitle;
