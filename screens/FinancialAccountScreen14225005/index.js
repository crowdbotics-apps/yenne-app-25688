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
      <View style={styles.View_44_80}>
        <Text style={styles.Text_44_80}>Financial account</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7285/075c/e7be176c1dbcb69fd3d7bef79df3d1d2"
        }}
        style={styles.ImageBackground_44_81}
      />
      <View style={styles.View_44_83}>
        <View style={styles.View_44_84} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/24bc/d22ffab851f1a3983ef593b326103263"
          }}
          style={styles.ImageBackground_44_85}
        />
      </View>
      <View style={styles.View_44_86} />
      <View style={styles.View_44_87}>
        <Text style={styles.Text_44_87}>+ ADD NEW</Text>
      </View>
      <View style={styles.View_44_88}>
        <Text style={styles.Text_44_88}>My cards</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdb0/a932/3c0106a3d2f8bb15e711f89c894ad8a0"
        }}
        style={styles.ImageBackground_44_89}
      />
      <View style={styles.View_44_91}>
        <View style={styles.View_44_92}>
          <View style={styles.View_44_93} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc03/5900/3e7561605bb0d08b4b36c67641c0818f"
          }}
          style={styles.ImageBackground_44_94}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c72b/e30b/e630b5bcfa5bdddf7016d5c57b11867d"
        }}
        style={styles.ImageBackground_44_165}
      />
      <View style={styles.View_44_101}>
        <Text style={styles.Text_44_101}>MY CARD 1</Text>
      </View>
      <View style={styles.View_44_102}>
        <Text style={styles.Text_44_102}>Delete</Text>
      </View>
      <View style={styles.View_44_103}>
        <Text style={styles.Text_44_103}>**** **** **** *234</Text>
      </View>
      <View style={styles.View_44_104} />
      <View style={styles.View_44_105}>
        <Text style={styles.Text_44_105}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
      </View>
      <View style={styles.View_44_106}>
        <View style={styles.View_44_107}>
          <View style={styles.View_44_108}>
            <View style={styles.View_44_109}>
              <View style={styles.View_44_110}>
                <View style={styles.View_44_111}>
                  <Text style={styles.Text_44_111}>DEPOSIT</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d1/95e8/02c82c7d0114260d3484fc904815dfeb"
                }}
                style={styles.ImageBackground_44_112}
              />
            </View>
            <View style={styles.View_44_113}>
              <View style={styles.View_44_114}>
                <View style={styles.View_44_115}>
                  <Text style={styles.Text_44_115}>WITHDRAW</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_44_116} />
          <View style={styles.View_44_117}>
            <View style={styles.View_44_118}>
              <Text style={styles.Text_44_118}>Visibility status</Text>
            </View>
          </View>
          <View style={styles.View_44_119}>
            <View style={styles.View_44_120}>
              <Text style={styles.Text_44_120}>Company parameters</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cd6/1f57/8c6d47d3e777655e94d395fb0f5a354a"
          }}
          style={styles.ImageBackground_44_121}
        />
      </View>
      <View style={styles.View_44_122}>
        <View style={styles.View_44_123}>
          <View style={styles.View_44_124} />
          <View style={styles.View_44_125}>
            <Text style={styles.Text_44_125}>Amount</Text>
          </View>
        </View>
        <View style={styles.View_44_126}>
          <View style={styles.View_44_127} />
          <View style={styles.View_44_128}>
            <Text style={styles.Text_44_128}>CONFIRM</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_44_80: {
    width: wp("58.4%"),
    minWidth: wp("58.4%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("11.475409836065573%")
  },
  Text_44_80: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_81: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%")
  },
  View_44_83: {
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
  View_44_84: {
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
  ImageBackground_44_85: {
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
  View_44_86: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
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
  View_44_87: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133333333333326%"),
    top: hp("22.950819672131146%")
  },
  Text_44_87: {
    color: "rgba(241, 201, 15, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_88: {
    width: wp("72.8%"),
    minWidth: wp("72.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("22.950819672131146%")
  },
  Text_44_88: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_89: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("41.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333333%")
  },
  View_44_91: {
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
  View_44_92: {
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
  View_44_93: {
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
  ImageBackground_44_94: {
    width: wp("6.346666463216145%"),
    height: hp("1.0681897564663914%"),
    top: hp("1.10655821086279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2799479166666714%")
  },
  ImageBackground_44_165: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%")
  },
  View_44_101: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("31.830601092896178%")
  },
  Text_44_101: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_102: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("33.60655737704918%")
  },
  Text_44_102: {
    color: "rgba(241, 201, 15, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_103: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("35.51912568306011%")
  },
  Text_44_103: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_104: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("45.62841530054645%"),
    minHeight: hp("45.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("48.90710382513661%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(249, 249, 249, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_44_105: {
    width: wp("72.8%"),
    minWidth: wp("72.8%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("60.65573770491803%")
  },
  Text_44_105: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_106: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_107: {
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
  View_44_108: {
    width: wp("72.93333333333332%"),
    minWidth: wp("72.93333333333332%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999998%"),
    top: hp("0%")
  },
  View_44_109: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_110: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.333333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_111: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%")
  },
  Text_44_111: {
    color: "rgba(241, 201, 15, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_112: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%")
  },
  View_44_113: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.06666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_44_114: {
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
  View_44_115: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333272%"),
    top: hp("1.639344262295083%")
  },
  Text_44_115: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_116: {
    width: wp("42.93333333333334%"),
    minWidth: wp("42.93333333333334%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_44_117: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("139.33333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_118: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333314%"),
    top: hp("1.639344262295083%")
  },
  Text_44_118: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_119: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("174.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_120: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%")
  },
  Text_44_120: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_121: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%")
  },
  View_44_122: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("71.58469945355192%")
  },
  View_44_123: {
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
  View_44_124: {
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
  View_44_125: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("2.4590163934426243%")
  },
  Text_44_125: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_126: {
    width: wp("74.4%"),
    minWidth: wp("74.4%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.475409836065566%")
  },
  View_44_127: {
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
  View_44_128: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.466666666666665%"),
    top: hp("2.4590163934426243%")
  },
  Text_44_128: {
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
