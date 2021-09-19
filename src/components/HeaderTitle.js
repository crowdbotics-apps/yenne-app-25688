import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React from 'react';

const YNHeaderTitle = ({ title, category = 'h5', style = {} }) => {
  const styles = useStyleSheet(themedStyles);
  let customStyle = {};
  let h = category;

  if (category === 'h10') {
    h = 'h6';
    customStyle = {
      fontSize: 15,
    };
  }
  return (
    <Text category={h} style={[styles.headerTitle, customStyle, style]}>
      {title}
    </Text>
  );
};

export const themedStyles = StyleService.create({
  headerTitle: { color: 'text-white-color' },
});

export default YNHeaderTitle;
