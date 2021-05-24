import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Layout, Spinner } from '@ui-kitten/components';

const StarIcon = props => <Icon {...props} name="star" />;

const LoadingIndicator = props => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="small" />
  </View>
);

export const YNButton = ({ title, loading, AccessorIcon, onPress }) => (
  <Button
    style={styles.button}
    status="primary"
    onPress={onPress}
    accessoryLeft={
      loading ? LoadingIndicator : AccessorIcon ? AccessorIcon : null
    }
  >
    {title}
  </Button>
);

const styles = StyleSheet.create({
  button: {
    margin: 2,
    borderRadius: 50,
    marginTop: 20,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default YNButton;
