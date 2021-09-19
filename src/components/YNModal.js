import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import YNSmallButton from './YNSmallButton';
import Modal from './ModalBox';
const renderSuccessIcon = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <AntDesign name="checkcircle" color="#6FCF97" size={20} />
    </View>
  );
};

const renderActionButtons = ({ onOkyPress, setModalVisible }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <YNSmallButton
        onPress={() => setModalVisible(false)}
        title="No"
        textStyle={{ color: '#F1C80D' }}
        style={{ backgroundColor: 'transparent', width: '50%' }}
      />
      <YNSmallButton
        style={{ padding: 5, width: '50%' }}
        onPress={onOkyPress}
        title="Yes"
      />
    </View>
  );
};

const YNModal = ({
  modalVisible = true,
  setModalVisible,
  children,
  description,
  success = false,
  actionable = false,
  onOkyPress = () => {},
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      style={styles.modal}
      isOpen={modalVisible}
      onBackButtonPress={() => setModalVisible(false)}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        style={[
          styles.centeredView,
          { backgroundColor: 'transparent', padding: 0, margin: 0 },
        ]}
        activeOpacity={1}
        onPressOut={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              {description ? (
                <Text style={styles.modalText}>{description}</Text>
              ) : null}
              {children}
              {success ? renderSuccessIcon() : null}
              {actionable
                ? renderActionButtons({ onOkyPress, setModalVisible })
                : null}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 0,
    width: '100%',
  },
  modalView: {
    marginHorizontal: wp('15%'),
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 45,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 50,
    padding: 3,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    marginBottom: hp('2%'),
    textAlign: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: hp('100%'),
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

export default YNModal;
