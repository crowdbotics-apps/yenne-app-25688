import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SectionList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import YNHeaderTitle from '../../components/HeaderTitle';
import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './redux/actions';

const Notification = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const styles = useStyleSheet(themedStyles);
  const notifications = useSelector(state => state.notifications.data || []);
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    dispatch(actions.getNotifications());
  }, []);

  useEffect(() => {
    var arr = {};
    notifications.forEach(item => {
      if (!arr[item.timesince]) {
        arr[item.timesince] = [item];
      } else {
        arr[item.timesince].push(item);
      }
    });
    var _sectionData = [];
    Object.keys(arr).map(key => {
      _sectionData.push({
        title: key,
        data: arr[key],
      });
    });
    setSectionData(_sectionData);
  }, [notifications]);

  const renderItem = ({ item }) => {
    return (
      <YNHeaderTitle
        key={item.id}
        category="h10"
        style={styles.headerTitle}
        title={item.description || ''}
      />
    );
  };

  return (
    <BackgroundWrapper
      style={{ backgroundColor: theme['header-background-color'] }}
      showBackButton
      //       withScroll={false}
    >
      <StatusBar backgroundColor="#7C03E9" barStyle="light-content" />
      <View style={styles.container}>
        <YNHeaderTitle category="h5" title="Notifications" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.notificationContainer}>
            <SectionList
              sections={sectionData || []}
              renderItem={renderItem}
              renderSectionHeader={({ section }) => (
                <View style={styles.sectionHeaderContainer}>
                  <View>
                    <Text>&nbsp;</Text>
                  </View>

                  <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderTitle}>
                      {section.title}
                    </Text>
                  </View>

                  <View>
                    <Text>&nbsp;</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index}
            />
          </View>
        </SafeAreaView>
      </View>
    </BackgroundWrapper>
  );
};

const themedStyles = StyleService.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: hp('5%'),
    marginHorizontal: wp('5%'),
  },
  item: {},
  notificationContainer: {
    marginTop: hp('5%'),
  },
  headerTitle: { color: '#F1C90F', marginTop: hp('1%') },
  sectionHeaderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginVertical: hp('2%'),
  },
  sectionHeader: {
    backgroundColor: 'rgba(230, 230, 230, 0.7)',
    padding: 10,
    borderRadius: 50,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  sectionHeaderTitle: {
    color: 'white',
    textAlign: 'center',
  },
  formWrapper: {
    marginTop: hp('10%'),
  },
  buttonsWrapper: {
    marginTop: hp('14%'),
    justifyContent: 'center',
  },
  saveBtn: {
    fontSize: 20,
    color: 'color-primary-500',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Notification;
