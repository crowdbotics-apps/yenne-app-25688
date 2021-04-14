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
      <View style={styles.View_75_0}>
        <View style={styles.View_55_117}>
          <Text style={styles.Text_55_117}>Yenne</Text>
        </View>
        <View style={styles.View_62_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07b1/6329/7a9aa6de8c0ab81b368cc1df6e27c3ef"
            }}
            style={styles.ImageBackground_62_1}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f15/320c/727f9d9c14f6e94c7a4c5b6635d1edbe"
            }}
            style={styles.ImageBackground_62_2}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/472f/56c5/e7cafd0aa42dd99840767cdeb5dfe10e"
            }}
            style={styles.ImageBackground_62_3}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ee/8308/0930dd09a25ffe46f765980466c04711"
            }}
            style={styles.ImageBackground_62_4}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1627/224c/8e72f89bf5d467e81fa903d390051bed"
            }}
            style={styles.ImageBackground_62_5}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca15/80b8/8c2a42c0982310c079551eb889e8e006"
            }}
            style={styles.ImageBackground_62_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c33b/5ca4/aacdf0984b1b26b9983a4b148492eb0a"
            }}
            style={styles.ImageBackground_62_7}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97e8/5533/0ef5c17a460b2ff3d5e13b790198b064"
            }}
            style={styles.ImageBackground_62_11}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c70/2797/9ca8097511bee62a45a8c51256bf9800"
            }}
            style={styles.ImageBackground_62_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e313/7c68/d27ec5d2307352256b2fedac96a3e343"
            }}
            style={styles.ImageBackground_62_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fd7/d5d7/35bedf082a70d8ea1cc78eab6a8385c6"
            }}
            style={styles.ImageBackground_62_14}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/686d/8fbc/1e8a97dc12db5e664c8b3f092781f23c"
            }}
            style={styles.ImageBackground_62_15}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e58e/4acc/3826cf8708b7dd94988e7906912cd71f"
            }}
            style={styles.ImageBackground_62_16}
          />
          <View style={styles.View_62_17}>
            <View style={styles.View_62_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76af/9242/d0fd0b7de1a1be28cd82005d29cb0c5f"
                }}
                style={styles.ImageBackground_62_19}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b317/de19/a4263add75836fe5d07333bb17e4bca1"
            }}
            style={styles.ImageBackground_62_22}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40bd/db75/1bcc3ba4100263777266c14d10e4b205"
            }}
            style={styles.ImageBackground_62_23}
          />
          <View source={{ uri: "null" }} style={styles.View_62_24} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a0a/7ed9/85b13135db199faf35eed8647687dcf0"
            }}
            style={styles.ImageBackground_62_25}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcdf/31d0/21c6eef680fd95f8c9eee1ca7d97da65"
            }}
            style={styles.ImageBackground_62_26}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e956/f25a/1373933fe4d286fb8fb5efe2abad052b"
            }}
            style={styles.ImageBackground_62_27}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95d8/c643/2e069f3ea63f275b2c21da147a33ceec"
            }}
            style={styles.ImageBackground_62_28}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1061/29b0/06109a8aef7c17c2bc5776f03088a9c8"
            }}
            style={styles.ImageBackground_62_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/e230/b0daf38ae17f04b74dc609a682fb7f81"
            }}
            style={styles.ImageBackground_62_30}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b20b/e0cc/f63614f80959b02202aa3414902445dc"
            }}
            style={styles.ImageBackground_62_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3475/c0b6/4eeae81c513997070392623c64c1fc68"
            }}
            style={styles.ImageBackground_62_32}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d96b/6fe3/88cd31745172013ea0c4dfc1e0c468c1"
            }}
            style={styles.ImageBackground_62_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d8c/f798/c5f64bee391f8bab6cb45716f13116df"
            }}
            style={styles.ImageBackground_62_34}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a15/8c5c/b419c5187a4a1525cdb2bcfc9e0e3c89"
            }}
            style={styles.ImageBackground_62_35}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bdd/2578/8916a5c03ce45a68d5d6c6c91a230c7c"
            }}
            style={styles.ImageBackground_62_36}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8d1/7d0b/54b542a022213021840727d8c17af264"
            }}
            style={styles.ImageBackground_62_37}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa4d/8e70/eb0798f15b9a749a2efae70772c5adf3"
            }}
            style={styles.ImageBackground_62_38}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f43/ad53/c65e8f31df6c31889ef67a636f987055"
            }}
            style={styles.ImageBackground_62_39}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ec/a117/508f7ebac41977e0a73572bf31ed07ab"
            }}
            style={styles.ImageBackground_62_40}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d9/8909/8631a48115b3d994ddb6e79929a74553"
            }}
            style={styles.ImageBackground_62_41}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810c/a6cc/fedd96de39af4efb590b1d388f765c36"
            }}
            style={styles.ImageBackground_62_42}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e250/221d/af29b89994a562ca8f92ad0eb156cb5e"
            }}
            style={styles.ImageBackground_62_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6fc/994d/fc448f6f410eabcec854b310ed39fdd2"
            }}
            style={styles.ImageBackground_62_44}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d0e/bda5/94b64f10eb628a8a9f896642c082a50e"
            }}
            style={styles.ImageBackground_62_45}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7d6/8319/93961af0a3c97e42aa33d8bd9cc7bc40"
            }}
            style={styles.ImageBackground_62_46}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2526/d11b/6a5250759cd8262358ef72b8fb4f6726"
            }}
            style={styles.ImageBackground_62_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45c7/6168/fddc333c34cb0ba01eda9cc067eae41c"
            }}
            style={styles.ImageBackground_62_48}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d60b/dfbb/4101e13a4072f68f08c12ea75fc718d6"
            }}
            style={styles.ImageBackground_62_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d31/222a/8c68212bc799c9793a56c07e03624403"
            }}
            style={styles.ImageBackground_62_50}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/218d/9af7/a53c58d193a7c7b2f415b76a5a5b137d"
            }}
            style={styles.ImageBackground_62_51}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dac2/d109/da7947dca4d2fb4fde59f2405a26d070"
            }}
            style={styles.ImageBackground_62_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a1d/8e5c/a5bf258862ec2ebbf75e107ee4714652"
            }}
            style={styles.ImageBackground_62_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a78/e141/e1b0c774ce7a2a5dd6b99da2e60b3adb"
            }}
            style={styles.ImageBackground_62_54}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ec/a117/508f7ebac41977e0a73572bf31ed07ab"
            }}
            style={styles.ImageBackground_62_55}
          />
          <View style={styles.View_62_56}>
            <View style={styles.View_62_57}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bbf/2c71/f1339fcfd87f7203c317deb9a32e2562"
                }}
                style={styles.ImageBackground_62_58}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e82a/8e33/a942e0d700fc4e173c59b0fbdbd928e1"
            }}
            style={styles.ImageBackground_62_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74f4/8a5a/015305af851ed9554ab9477a96bfac7a"
            }}
            style={styles.ImageBackground_62_62}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b9/7acf/bac880d804196523a4986181b311371b"
            }}
            style={styles.ImageBackground_62_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22c4/62a9/18c75f1f62468bb1ac9e76f301848903"
            }}
            style={styles.ImageBackground_62_64}
          />
          <View source={{ uri: "null" }} style={styles.View_62_65} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e66a/4eab/4649506932ed40743a37f2d73420e7f7"
            }}
            style={styles.ImageBackground_62_66}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45a3/0e71/1a635270c5ef8946c92506faca9cde17"
            }}
            style={styles.ImageBackground_62_67}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75ee/f630/6cf22d690decb7ef316ba7d49509a0cb"
            }}
            style={styles.ImageBackground_62_68}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/819d/1ed8/ba4870b8a09930b703627ecef638ecc5"
            }}
            style={styles.ImageBackground_62_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/129c/585e/f7c0172f3519badbb4e058c74fb9b061"
            }}
            style={styles.ImageBackground_62_70}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ae/8244/8d618ca2dbb2bd09e2fb92b7633645c6"
            }}
            style={styles.ImageBackground_62_71}
          />
          <View source={{ uri: "null" }} style={styles.View_62_72} />
          <View source={{ uri: "null" }} style={styles.View_62_73} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3328/121b/25d247ef4f1528155bee27f67e1fdd04"
            }}
            style={styles.ImageBackground_62_74}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88a5/e3a9/d9426da415af41f32dff51d10f856e03"
            }}
            style={styles.ImageBackground_62_75}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_75_0: {
    width: wp("58.666666666666664%"),
    minWidth: wp("58.666666666666664%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("40.02732240437158%")
  },
  View_55_117: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("23.770491803278688%")
  },
  Text_55_117: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_0: {
    width: wp("58.666666666666664%"),
    minWidth: wp("58.666666666666664%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_62_1: {
    width: wp("33.115726725260416%"),
    height: hp("15.096155802408854%"),
    top: hp("0.24590935212015808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.679069010416665%")
  },
  ImageBackground_62_2: {
    width: wp("19.28009033203125%"),
    height: hp("8.120551395937394%"),
    top: hp("13.32013177090004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.765299479166668%")
  },
  ImageBackground_62_3: {
    width: wp("1.4000956217447917%"),
    height: hp("1.3110489141745645%"),
    top: hp("15.859556979820375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.756461588541665%")
  },
  ImageBackground_62_4: {
    width: wp("23.564607747395833%"),
    height: hp("5.3915242679783555%"),
    top: hp("17.144014535705907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.783528645833332%")
  },
  ImageBackground_62_5: {
    width: wp("5.060603841145833%"),
    height: hp("5.0678326132519%"),
    top: hp("17.19384219477086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.140869140624996%")
  },
  ImageBackground_62_6: {
    width: wp("6.181111653645834%"),
    height: hp("4.64264499685152%"),
    top: hp("17.27259276343174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.418847656249994%")
  },
  ImageBackground_62_7: {
    width: wp("21.36184285481771%"),
    height: hp("9.401743529272862%"),
    top: hp("4.925295303428108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.401236979166665%")
  },
  ImageBackground_62_11: {
    width: wp("0.27486572265625%"),
    height: hp("0.3159517798918844%"),
    top: hp("12.422467841476688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.48483072916666%")
  },
  ImageBackground_62_12: {
    width: wp("0.19146728515625%"),
    height: hp("0.37307947711214995%"),
    top: hp("12.460878507687099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.57071940104167%")
  },
  ImageBackground_62_13: {
    width: wp("0.23621826171875%"),
    height: hp("0.15059403383015285%"),
    top: hp("12.714816442604281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.678076171875006%")
  },
  ImageBackground_62_14: {
    width: wp("3.878188069661458%"),
    height: hp("0.862217470596397%"),
    top: hp("18.038740314421105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.951985677083332%")
  },
  ImageBackground_62_15: {
    width: wp("2.825958251953125%"),
    height: hp("0.8976545490202357%"),
    top: hp("17.970815773218717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.94816080729166%")
  },
  ImageBackground_62_16: {
    width: wp("1.5467508951822917%"),
    height: hp("1.4405912388869322%"),
    top: hp("10.17810425471739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.429280598958332%")
  },
  View_62_17: {
    width: wp("1.1518351236979167%"),
    height: hp("0.7955436498089565%"),
    top: hp("11.184619424121628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.79532877604166%")
  },
  View_62_18: {
    width: wp("1.1518351236979167%"),
    height: hp("0.7955436498089565%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_19: {
    width: wp("1.1518351236979167%"),
    height: hp("0.7955436498089565%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_22: {
    width: wp("0.8417805989583335%"),
    height: hp("0.32320074696358436%"),
    top: hp("10.330544143426621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.709423828124994%")
  },
  ImageBackground_62_23: {
    width: wp("0.728582763671875%"),
    height: hp("0.6317701496061732%"),
    top: hp("10.469303235330216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.86124674479166%")
  },
  View_62_24: {
    width: wp("4.29477793375651%"),
    height: hp("2.9528117570720736%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_25: {
    width: wp("1.7173990885416668%"),
    height: hp("1.3441825825008538%"),
    top: hp("9.681501544889862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.753125%")
  },
  ImageBackground_62_26: {
    width: wp("1.0525960286458333%"),
    height: hp("0.6884569678801656%"),
    top: hp("9.868074635990332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.19140625%")
  },
  ImageBackground_62_27: {
    width: wp("0.7360880533854167%"),
    height: hp("0.5711227166848105%"),
    top: hp("9.99108403106856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.410432942708326%")
  },
  ImageBackground_62_28: {
    width: wp("0.464599609375%"),
    height: hp("0.23784324771068135%"),
    top: hp("10.2151443398064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.221484375%")
  },
  ImageBackground_62_29: {
    width: wp("0.4172749837239583%"),
    height: hp("0.24646696497182377%"),
    top: hp("9.493451561432721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.501171874999994%")
  },
  ImageBackground_62_30: {
    width: wp("0.3716267903645833%"),
    height: hp("0.2480887324432206%"),
    top: hp("9.340196619919745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.9138671875%")
  },
  ImageBackground_62_31: {
    width: wp("3.229081217447917%"),
    height: hp("0.7051077045378138%"),
    top: hp("8.595228455757187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.38668619791667%")
  },
  ImageBackground_62_32: {
    width: wp("1.1757080078125%"),
    height: hp("0.5578087978675718%"),
    top: hp("8.68052602465687%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.590071614583326%")
  },
  ImageBackground_62_33: {
    width: wp("1.39324951171875%"),
    height: hp("0.6661998769624637%"),
    top: hp("8.660606738648134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.29361979166666%")
  },
  ImageBackground_62_34: {
    width: wp("3.3004557291666665%"),
    height: hp("0.7072870848608799%"),
    top: hp("8.718881971849122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.88077799479166%")
  },
  ImageBackground_62_35: {
    width: wp("1.1312825520833334%"),
    height: hp("0.5736272843157659%"),
    top: hp("8.763419604692302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.073811848958332%")
  },
  ImageBackground_62_36: {
    width: wp("0.5553304036458333%"),
    height: hp("0.44915871542008196%"),
    top: hp("8.89588444610763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.570947265624998%")
  },
  ImageBackground_62_37: {
    width: wp("0.653570556640625%"),
    height: hp("0.4308585912152066%"),
    top: hp("8.80574711033556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.325325520833328%")
  },
  ImageBackground_62_38: {
    width: wp("3.2296732584635417%"),
    height: hp("0.551882467634691%"),
    top: hp("8.383340262324438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.385563151041662%")
  },
  ImageBackground_62_39: {
    width: wp("1.2227762858072917%"),
    height: hp("0.5888871156452783%"),
    top: hp("8.656381909313104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.568147786458336%")
  },
  ImageBackground_62_40: {
    width: wp("0.20615030924479166%"),
    height: hp("0.1244445967543972%"),
    top: hp("8.878903831940534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.381461588541665%")
  },
  ImageBackground_62_41: {
    width: wp("4.241971842447917%"),
    height: hp("0.5907079561160562%"),
    top: hp("8.56006288789009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.132242838541668%")
  },
  ImageBackground_62_42: {
    width: wp("0.463836669921875%"),
    height: hp("0.06363457017908983%"),
    top: hp("9.30136800463734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.375813802083332%")
  },
  ImageBackground_62_43: {
    width: wp("4.502071126302083%"),
    height: hp("0.7101350794724428%"),
    top: hp("7.809385706166751%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.275960286458332%")
  },
  ImageBackground_62_44: {
    width: wp("4.880452473958333%"),
    height: hp("0.7696923010987663%"),
    top: hp("7.628548210435881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.345572916666665%")
  },
  ImageBackground_62_45: {
    width: wp("0.2590047200520833%"),
    height: hp("1.2549447231605404%"),
    top: hp("8.896808936947686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.409326171874998%")
  },
  ImageBackground_62_46: {
    width: wp("0.6066324869791666%"),
    height: hp("1.2770428683588413%"),
    top: hp("8.951668661148823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.324332682291665%")
  },
  ImageBackground_62_47: {
    width: wp("2.0657918294270834%"),
    height: hp("0.3349241663198002%"),
    top: hp("10.425131959341911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.649788411458335%")
  },
  ImageBackground_62_48: {
    width: wp("0.9502522786458334%"),
    height: hp("0.7046246137775358%"),
    top: hp("10.696190172205867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.398893229166664%")
  },
  ImageBackground_62_49: {
    width: wp("3.3378458658854164%"),
    height: hp("0.30150804363313266%"),
    top: hp("11.121757173798784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.009374999999995%")
  },
  ImageBackground_62_50: {
    width: wp("1.0152933756510416%"),
    height: hp("0.7152870053150615%"),
    top: hp("10.635315525075782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.94319661458334%")
  },
  ImageBackground_62_51: {
    width: wp("1.4813761393229166%"),
    height: hp("0.9907102324272113%"),
    top: hp("10.428346310808365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.499837239583332%")
  },
  ImageBackground_62_52: {
    width: wp("0.5347045898437499%"),
    height: hp("0.3944355281975751%"),
    top: hp("9.023789369343412%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.90188802083333%")
  },
  ImageBackground_62_53: {
    width: wp("0.8160725911458333%"),
    height: hp("0.502654112101904%"),
    top: hp("8.60098958666859%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.76486002604166%")
  },
  ImageBackground_62_54: {
    width: wp("0.7346659342447917%"),
    height: hp("0.46758078486541577%"),
    top: hp("8.719160778274954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.781363932291665%")
  },
  ImageBackground_62_55: {
    width: wp("0.20615030924479166%"),
    height: hp("0.12444668128842214%"),
    top: hp("8.754886564661248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.18937174479166%")
  },
  View_62_56: {
    width: wp("1.7524169921875%"),
    height: hp("0.9429681496542007%"),
    top: hp("10.523296835643997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.25944010416666%")
  },
  View_62_57: {
    width: wp("1.7524169921875%"),
    height: hp("0.9429681496542007%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_58: {
    width: wp("1.7524169921875%"),
    height: hp("0.9429681496542007%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_61: {
    width: wp("2.637359619140625%"),
    height: hp("0.3464933301581711%"),
    top: hp("8.41117400289233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.72975260416666%")
  },
  ImageBackground_62_62: {
    width: wp("1.490887451171875%"),
    height: hp("0.43961363411991977%"),
    top: hp("8.276750741760587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.82438151041667%")
  },
  ImageBackground_62_63: {
    width: wp("2.864583333333333%"),
    height: hp("0.21983547940280268%"),
    top: hp("8.463040857367183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.839485677083335%")
  },
  ImageBackground_62_64: {
    width: wp("1.0739481608072916%"),
    height: hp("0.5260926126782359%"),
    top: hp("8.78448486328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.103710937499994%")
  },
  View_62_65: {
    width: wp("4.29477793375651%"),
    height: hp("2.9528117570720736%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_66: {
    width: wp("0.2944356282552083%"),
    height: hp("0.19640688036308912%"),
    top: hp("9.519468630597899%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.578613281249996%")
  },
  ImageBackground_62_67: {
    width: wp("0.25957234700520837%"),
    height: hp("0.2245522587677169%"),
    top: hp("9.36336204653881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.03800455729167%")
  },
  ImageBackground_62_68: {
    width: wp("0.41871541341145835%"),
    height: hp("0.28402609903304304%"),
    top: hp("9.318963556341792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.901041666666668%")
  },
  ImageBackground_62_69: {
    width: wp("0.4526041666666667%"),
    height: hp("0.2670277663267375%"),
    top: hp("9.484581869156635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.484049479166668%")
  },
  ImageBackground_62_70: {
    width: wp("4.431571451822917%"),
    height: hp("0.9301357581967213%"),
    top: hp("12.293864599342562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.700634765625%")
  },
  ImageBackground_62_71: {
    width: wp("4.410746256510416%"),
    height: hp("1.144243459232518%"),
    top: hp("11.891320233788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.593587239583332%")
  },
  View_62_72: {
    width: wp("0.08590087890625%"),
    height: hp("0.1683102279412942%"),
    top: hp("3.2805646052126107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.48483072916666%")
  },
  View_62_73: {
    width: wp("9.744850667317708%"),
    height: hp("1.4970757270771298%"),
    top: hp("1.6033818812969614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.39568684895833%")
  },
  ImageBackground_62_74: {
    width: wp("0.3477986653645833%"),
    height: hp("0.2857270787973873%"),
    top: hp("9.127132228163426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.887434895833334%")
  },
  ImageBackground_62_75: {
    width: wp("0.4303181966145833%"),
    height: hp("0.2964540908896858%"),
    top: hp("9.079909194362621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.584602864583328%")
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
