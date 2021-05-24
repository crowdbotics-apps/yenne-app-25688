import React from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Select, SelectItem } from '@ui-kitten/components';

const data = ['USD'];

const SelectField = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const displayValue = data[selectedIndex.row];

  const renderOption = title => <SelectItem title={title} />;

  return (
    <Select
      style={styles.select}
      placeholder="Default"
      status="basic"
      value={displayValue}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      textColor="red"
    >
      {data.map(renderOption)}
    </Select>
  );
};
export default SelectField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 192,
  },
  select: {
    flex: 1,
    margin: 2,
  },
});
