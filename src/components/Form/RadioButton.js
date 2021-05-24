import React from 'react';
import { View } from 'react-native';

const RadioButton = props => {
  return (
    <View
      style={[
        {
          height: 16,
          width: 16,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style,
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: 8,
            width: 8,
            borderRadius: 6,
            backgroundColor: '#000',
          }}
        />
      ) : null}
    </View>
  );
};

export default RadioButton;
