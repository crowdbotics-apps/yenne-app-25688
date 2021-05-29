import React from 'react';
import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import { View, Text, TouchableOpacity } from 'react-native';
import YNHeaderTitle from './HeaderTitle';
import TextInputField from './Form/TextInputField';

const YNTabItem = ({ active, title, updateTab, index }) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[styles.tabBtn, active ? styles.activeTab : {}]}
      onPress={() => updateTab(index)}
    >
      <YNHeaderTitle
        category="h6"
        title={title}
        style={{
          color: theme[active ? 'color-primary-100' : 'color-primary-black'],
        }}
      />
    </TouchableOpacity>
  );
};

const YTTab = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);
  const [tabData, setTabData] = React.useState([
    {
      active: true,
      title: ' DEPOSIT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ]);
  const updateTab = idx => {
    setTabData(
      [...tabData].map((item, index) => {
        if (index === idx) {
          return {
            ...item,
            active: true,
          };
        }
        return {
          ...item,
          active: false,
        };
      }),
    );
  };
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.spaceBetween]}>
        {tabData.map((item, index) => {
          return (
            <YNTabItem
              active={item.active}
              title={item.title}
              index={index}
              key={item.title + index}
              updateTab={updateTab}
            />
          );
        })}
      </View>
      <View style={styles.contentWrapper}>
        <View>
          <Text>{tabData[0].description}</Text>
          <View style={styles.inputWrapper}>
            <TextInputField
              onChangeText={text => {}}
              label="Amount"
              autoCapitalize="none"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const themedStyles = StyleService.create({
  inputWrapper: {
    marginTop: 30,
  },
  contentWrapper: {
    paddingTop: 20,
  },
  container: {
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  tabBtn: {
    padding: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: 'color-primary-100',
  },
  spaceBetween: { justifyContent: 'center' },
  alignItemsCenter: { alignItems: 'center' },
  row: { flexDirection: 'row' },
  flexOne: { flex: 1 },
});
export default YTTab;
