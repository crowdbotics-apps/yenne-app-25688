import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';

const YNHeaderTitle = ({ title, category = 'h5', style = {} }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Text category={category} style={[styles.headerTitle, style]}>
      {title}
    </Text>
  );
};

export const themedStyles = StyleService.create({
  headerTitle: { color: 'text-white-color' },
});

export default YNHeaderTitle;
