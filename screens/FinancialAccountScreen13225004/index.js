import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_44_12}>
        <View style={styles.View_44_13} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/24bc/d22ffab851f1a3983ef593b326103263"
          }}
          style={styles.ImageBackground_44_14}
        />
      </View>
      <View style={styles.View_44_15} />
      <View style={styles.View_44_16}>
        <Text style={styles.Text_44_16}>Financial account</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7285/075c/e7be176c1dbcb69fd3d7bef79df3d1d2"
        }}
        style={styles.ImageBackground_44_17}
      />
      <View style={styles.View_44_19}>
        <View style={styles.View_44_20}>
          <View style={styles.View_44_21} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc03/5900/3e7561605bb0d08b4b36c67641c0818f"
          }}
          style={styles.ImageBackground_44_22}
        />
      </View>
      <View style={styles.View_44_28}>
        <View style={styles.View_44_29}>
          <View style={styles.View_44_30} />
        </View>
        <View style={styles.View_44_31}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3de0/9df0/43e4b745666c2f7bc72b56581b1bddc0"
            }}
            style={styles.ImageBackground_44_32}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a64/3d3a/43d54b74bab9d8546d515e1a0e037b74"
            }}
            style={styles.ImageBackground_44_35}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82fd/1e1b/ed45eb11ab7e93798defef907781e4af"
            }}
            style={styles.ImageBackground_44_38}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c72b/e30b/e630b5bcfa5bdddf7016d5c57b11867d"
        }}
        style={styles.ImageBackground_44_171}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97d/2061/98e179b78e4f95621646885787c8af0e"
        }}
        style={styles.ImageBackground_44_168}
      />
      <View style={styles.View_44_43}>
        <Text style={styles.Text_44_43}>+ ADD NEW</Text>
      </View>
      <View style={styles.View_44_44}>
        <Text style={styles.Text_44_44}>My cards</Text>
      </View>
      <View style={styles.View_44_45}>
        <Text style={styles.Text_44_45}>MY CARD 1</Text>
      </View>
      <View style={styles.View_44_46}>
        <Text style={styles.Text_44_46}>Delete</Text>
      </View>
      <View style={styles.View_44_47}>
        <Text style={styles.Text_44_47}>Delete</Text>
      </View>
      <View style={styles.View_44_48}>
        <Text style={styles.Text_44_48}>**** **** **** *234</Text>
      </View>
      <View style={styles.View_44_49}>
        <View style={styles.View_44_50}>
          <Text style={styles.Text_44_50}>MY CARD 2</Text>
        </View>
        <View style={styles.View_44_51}>
          <Text style={styles.Text_44_51}>**** **** **** *765</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df55/d0a7/7dc3a92c4834ea7bc21d99fa2a3ff2b3"
        }}
        style={styles.ImageBackground_44_52}
      />
      <View style={styles.View_44_54} />
      <View style={styles.View_44_55}>
        <Text style={styles.Text_44_55}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
      </View>
      <View style={styles.View_44_56}>
        <View style={styles.View_44_57}>
          <View style={styles.View_44_58}>
            <View style={styles.View_44_59}>
              <View style={styles.View_44_60}>
                <View style={styles.View_44_61}>
                  <Text style={styles.Text_44_61}>WITHDRAW</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d1/95e8/02c82c7d0114260d3484fc904815dfeb"
                }}
                style={styles.ImageBackground_44_62}
              />
            </View>
            <View style={styles.View_44_63}>
              <View style={styles.View_44_64}>
                <View style={styles.View_44_65}>
                  <Text style={styles.Text_44_65}>DEPOSIT</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_44_66} />
          <View style={styles.View_44_67}>
            <View style={styles.View_44_68}>
              <Text style={styles.Text_44_68}>Visibility status</Text>
            </View>
          </View>
          <View style={styles.View_44_69}>
            <View style={styles.View_44_70}>
              <Text style={styles.Text_44_70}>Company parameters</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cd6/1f57/8c6d47d3e777655e94d395fb0f5a354a"
          }}
          style={styles.ImageBackground_44_71}
        />
      </View>
      <View style={styles.View_44_72}>
        <View style={styles.View_44_73}>
          <View style={styles.View_44_74} />
          <View style={styles.View_44_75}>
            <Text style={styles.Text_44_75}>Amount</Text>
          </View>
        </View>
        <View style={styles.View_44_76}>
          <View style={styles.View_44_77} />
          <View style={styles.View_44_78}>
            <Text style={styles.Text_44_78}>CONFIRM</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_44_12: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("76.50273224043715%"),
    minHeight: hp("76.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.42622950819672%")
  },
  View_44_13: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("76.50273224043715%"),
    minHeight: hp("76.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_44_14: {
    width: wp("213.33333333333334%"),
    minWidth: wp("213.33333333333334%"),
    height: hp("109.28961748633881%"),
    minHeight: hp("109.28961748633881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-56.8%"),
    top: hp("-103.00546448087431%")
  },
  View_44_15: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("36.6120218579235%"),
    minHeight: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.672131147540984%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(249, 249, 249, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_44_16: {
    width: wp("58.4%"),
    minWidth: wp("58.4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("11.475409836065573%")
  },
  Text_44_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_17: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%")
  },
  View_44_19: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("31.420765027322407%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_44_20: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_21: {
    width: wp("9.066666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_44_22: {
    width: wp("6.346666463216145%"),
    height: hp("1.0681897564663914%"),
    top: hp("1.10655821086279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2799479166666714%")
  },
  View_44_28: {
    width: wp("9.065599568684895%"),
    minWidth: wp("9.065599568684895%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%"),
    top: hp("42.07650273224044%")
  },
  View_44_29: {
    width: wp("9.065599568684895%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_30: {
    width: wp("9.065599568684895%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderColor: "rgba(217, 217, 217, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_44_31: {
    width: wp("5.821100362141927%"),
    height: hp("1.8861210411363614%"),
    top: hp("0.713650646105485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6700520833333314%")
  },
  ImageBackground_44_32: {
    width: wp("5.820918273925781%"),
    height: hp("1.8860677552353489%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_44_35: {
    width: wp("2.910497029622396%"),
    height: hp("1.8860611107831444%"),
    top: hp("0.00006045148672484402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.910677083333333%")
  },
  ImageBackground_44_38: {
    width: wp("1.2404986063639323%"),
    height: hp("1.4354810037248122%"),
    top: hp("0.22529643741461314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2901041666666657%")
  },
  ImageBackground_44_171: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%")
  },
  ImageBackground_44_168: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%")
  },
  View_44_43: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133333333333326%"),
    top: hp("22.950819672131146%")
  },
  Text_44_43: {
    color: "rgba(241, 201, 15, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_44: {
    width: wp("72.8%"),
    minWidth: wp("72.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("22.950819672131146%")
  },
  Text_44_44: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_45: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("31.830601092896178%")
  },
  Text_44_45: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_46: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("33.60655737704918%")
  },
  Text_44_46: {
    color: "rgba(241, 201, 15, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_47: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("43.71584699453552%")
  },
  Text_44_47: {
    color: "rgba(241, 201, 15, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_48: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("35.51912568306011%")
  },
  Text_44_48: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_49: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("42.48633879781421%")
  },
  View_44_50: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_44_50: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_51: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639294%")
  },
  Text_44_51: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_52: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333333%")
  },
  View_44_54: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("45.62841530054645%"),
    minHeight: hp("45.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("59.56284153005464%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(249, 249, 249, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_44_55: {
    width: wp("72.8%"),
    minWidth: wp("72.8%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("71.31147540983606%")
  },
  Text_44_55: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_56: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("60.65573770491803%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_57: {
    width: wp("85.6%"),
    minWidth: wp("85.6%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_44_58: {
    width: wp("69.06666666666666%"),
    minWidth: wp("69.06666666666666%"),
    height: hp("6.352459016393443%"),
    minHeight: hp("6.352459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999998%"),
    top: hp("-0.03415300546447497%")
  },
  View_44_59: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333334%"),
    top: hp("0.06830601092895705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_60: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_61: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%")
  },
  Text_44_61: {
    color: "rgba(241, 201, 15, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_62: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464489%")
  },
  View_44_63: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_44_64: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_65: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666668%"),
    top: hp("1.6393442622950758%")
  },
  Text_44_65: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_66: {
    width: wp("42.93333333333334%"),
    minWidth: wp("42.93333333333334%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.99999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_44_67: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("135.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_68: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333314%"),
    top: hp("1.639344262295083%")
  },
  Text_44_68: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_69: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("170.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_70: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%")
  },
  Text_44_70: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_71: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464482%")
  },
  View_44_72: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("82.24043715846994%")
  },
  View_44_73: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_74: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(146, 146, 146, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  View_44_75: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("2.4590163934426243%")
  },
  Text_44_75: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_76: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.47540983606558%")
  },
  View_44_77: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 201, 15, 1)",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  View_44_78: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.466666666666665%"),
    top: hp("2.45901639344261%")
  },
  Text_44_78: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
