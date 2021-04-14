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
      <View style={styles.View_1_41}>
        <View style={styles.View_1_42} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/24bc/d22ffab851f1a3983ef593b326103263"
          }}
          style={styles.ImageBackground_1_43}
        />
      </View>
      <View style={styles.View_1_44}>
        <Text style={styles.Text_1_44}>OR</Text>
      </View>
      <View style={styles.View_1_45}>
        <Text style={styles.Text_1_45}>Already a member? Login</Text>
      </View>
      <View style={styles.View_1_46}>
        <View style={styles.View_1_47} />
        <View style={styles.View_1_48}>
          <Text style={styles.Text_1_48}>SIGN UP</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b177/fe51/cebb832d722a5218914ebd4d60b4de53"
        }}
        style={styles.ImageBackground_1_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b177/fe51/cebb832d722a5218914ebd4d60b4de53"
        }}
        style={styles.ImageBackground_1_50}
      />
      <View style={styles.View_1_51}>
        <View style={styles.View_1_52}>
          <View style={styles.View_1_53} />
        </View>
        <View style={styles.View_1_54}>
          <View style={styles.View_1_55}>
            <Text style={styles.Text_1_55}>Sign up via Facebook</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eafc/fcec/d190b752f391d54c816c42df06cef9af"
            }}
            style={styles.ImageBackground_1_56}
          />
        </View>
      </View>
      <View style={styles.View_1_58}>
        <View style={styles.View_1_59}>
          <View style={styles.View_1_60} />
        </View>
        <View style={styles.View_1_61}>
          <Text style={styles.Text_1_61}>Sign up via Google</Text>
        </View>
      </View>
      <View style={styles.View_1_62}>
        <View style={styles.View_1_63}>
          <View style={styles.View_1_64} />
        </View>
      </View>
      <View style={styles.View_1_65}>
        <View style={styles.View_1_66}>
          <Text style={styles.Text_1_66}>Sign up via AppleID</Text>
        </View>
        <View style={styles.View_1_67}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/222d/b5af/d9cd93499dabd4850f469bab918892db"
            }}
            style={styles.ImageBackground_1_68}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f71/ee3a/27d7397701ad9575aff598ac7aae39d0"
        }}
        style={styles.ImageBackground_1_71}
      />
      <View style={styles.View_62_77}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1763/b589/7c46b163f328ac8c3990994235cb7b54"
          }}
          style={styles.ImageBackground_62_78}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cfb/4291/473c69b1d92a129466831dfe33164f9c"
          }}
          style={styles.ImageBackground_62_79}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac9/3859/a5dc90245930c2454657245a0fcb13ae"
          }}
          style={styles.ImageBackground_62_80}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27d5/296a/5c4745d0c2b9b67a88cfd0057f2508ce"
          }}
          style={styles.ImageBackground_62_81}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edf2/33f5/b1667440edef7347b2b1afe4e9f39e15"
          }}
          style={styles.ImageBackground_62_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4fd/ad09/b0183aa91110c14d424d948ec746e82c"
          }}
          style={styles.ImageBackground_62_83}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff7a/4a2a/01dbb4afb50df8388775eb91545852a4"
          }}
          style={styles.ImageBackground_62_84}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
          }}
          style={styles.ImageBackground_62_88}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e55c/1101/09faea2983b04ebc0840c3ff9895e84f"
          }}
          style={styles.ImageBackground_62_89}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4069/6f0d/cd0ef237e3f9deee1f711ed031b5500f"
          }}
          style={styles.ImageBackground_62_90}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa4/4118/938e321cbc9e86d1d8f6f430b84dad21"
          }}
          style={styles.ImageBackground_62_91}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12af/1b1e/0f8c9f50f82c518be10f85e624319ffc"
          }}
          style={styles.ImageBackground_62_92}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c36/e69e/a4df2e8fd223b6a5256d1836f1d9f2d4"
          }}
          style={styles.ImageBackground_62_93}
        />
        <View style={styles.View_62_94}>
          <View style={styles.View_62_95}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb39/6fe9/a1da433ed673f4a985dab761999c6ef5"
              }}
              style={styles.ImageBackground_62_96}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffbb/1e6c/4a4766a279fa145b9dfb79851fec3765"
          }}
          style={styles.ImageBackground_62_99}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b069/3d5a/a97594603018fd187bed48184c8a5bde"
          }}
          style={styles.ImageBackground_62_100}
        />
        <View source={{ uri: "null" }} style={styles.View_62_101} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0f2/e980/d89d4e0fc3fe901fb3712616dc0d9f89"
          }}
          style={styles.ImageBackground_62_102}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/83d1/204ed8cea84ee77344475f1ea508d4b0"
          }}
          style={styles.ImageBackground_62_103}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7144/4694/3c0b7c83d6225473982d47b8e87a3481"
          }}
          style={styles.ImageBackground_62_104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a8a/a269/fbd62ecdc43a50076c372fdd351ef4f9"
          }}
          style={styles.ImageBackground_62_105}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6096/09fc/dd137897474542181a97c7f5e98ec104"
          }}
          style={styles.ImageBackground_62_106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/e230/b0daf38ae17f04b74dc609a682fb7f81"
          }}
          style={styles.ImageBackground_62_107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a56/be5c/302b4dc956aa2682a9aef5cb638c1808"
          }}
          style={styles.ImageBackground_62_108}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5460/e4b1/242d4f017d3f8b0330e1dc0614cacd06"
          }}
          style={styles.ImageBackground_62_109}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c43f/87fd/b969a1b7ac95f76e6b911ed5b1909da5"
          }}
          style={styles.ImageBackground_62_110}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98b2/f2df/d90de0b54cfa4681ffeb83694a19394d"
          }}
          style={styles.ImageBackground_62_111}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc3a/aae2/51d70cd97c9605dff3c2c581029914bc"
          }}
          style={styles.ImageBackground_62_112}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d3a/e5f9/1566136607f85aeb1be6922a9cc5ae88"
          }}
          style={styles.ImageBackground_62_113}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac60/e6cb/f17541cf337177bc1e9836fccc6cdf11"
          }}
          style={styles.ImageBackground_62_114}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ade5/a298/adfffad107bc53c897c1eede421e7dbd"
          }}
          style={styles.ImageBackground_62_115}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3d6/5844/a113238d1fa99fa1bafcc93121c6cb6e"
          }}
          style={styles.ImageBackground_62_116}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_62_117}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3680/5785/e1b7217120fb9cfbc2da558e37460376"
          }}
          style={styles.ImageBackground_62_118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810c/a6cc/fedd96de39af4efb590b1d388f765c36"
          }}
          style={styles.ImageBackground_62_119}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12c3/2597/93d113081d288495b09456004d55614f"
          }}
          style={styles.ImageBackground_62_120}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c33/8c7f/d90a11b38302d7bb7b6d8ede2f8493a7"
          }}
          style={styles.ImageBackground_62_121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c623/d646/54e096ac176b8314a780a2fb38a2eef8"
          }}
          style={styles.ImageBackground_62_122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f944/52e4/5be2042c0a74a61015947af704443749"
          }}
          style={styles.ImageBackground_62_123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d130/d081/e1edcf32cc8890b15242c25fc1a5b0e2"
          }}
          style={styles.ImageBackground_62_124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9787/e813/39ebe82b1a8804838665260bd3543ae1"
          }}
          style={styles.ImageBackground_62_125}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f3a/cab5/f4a4701f02ffcb8a95be263dfb065519"
          }}
          style={styles.ImageBackground_62_126}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3b7/2d0d/a26b478d5893f4f95a9aa679e41d6269"
          }}
          style={styles.ImageBackground_62_127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f0a/7af4/203f529bb7275967cf350ce1897a967d"
          }}
          style={styles.ImageBackground_62_128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01e1/8d36/30d6725a41dc48b21c5f39b3ec54d81b"
          }}
          style={styles.ImageBackground_62_129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49c7/475b/9ac153bacb58878fe46d31c1fec63830"
          }}
          style={styles.ImageBackground_62_130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/296f/e3fb/d07968b3f04a18f83ecf8f957c0011a0"
          }}
          style={styles.ImageBackground_62_131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_62_132}
        />
        <View style={styles.View_62_133}>
          <View style={styles.View_62_134}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d64/1193/7c3667ee8236ff2a0425c9e5abbdfa40"
              }}
              style={styles.ImageBackground_62_135}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad27/d6ae/491530e96dc7c6a491824acd93e4acc6"
          }}
          style={styles.ImageBackground_62_138}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5de2/264a/6f02c5544dea226f488a82bdbcd33b5f"
          }}
          style={styles.ImageBackground_62_139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64d2/61b1/38b134942f151c582690366a2f742d04"
          }}
          style={styles.ImageBackground_62_140}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94b0/1e4a/57c9484fcda6bed3a0a4c3127167e8a7"
          }}
          style={styles.ImageBackground_62_141}
        />
        <View source={{ uri: "null" }} style={styles.View_62_142} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dbc/f96c/f377176179baec44dfb3f5c1344c964c"
          }}
          style={styles.ImageBackground_62_143}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc10/a520/e648979259e9773d5f959999cf0e360e"
          }}
          style={styles.ImageBackground_62_144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6b2/6465/67e5aed11ba2e69139833735985bc792"
          }}
          style={styles.ImageBackground_62_145}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6b2/6465/67e5aed11ba2e69139833735985bc792"
          }}
          style={styles.ImageBackground_62_146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b0f/fe48/92a1c7a8695d418d5a033c93d2f749cf"
          }}
          style={styles.ImageBackground_62_147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22d9/c092/eeb0995834eeef466a676a2bfb5033ea"
          }}
          style={styles.ImageBackground_62_148}
        />
        <View source={{ uri: "null" }} style={styles.View_62_149} />
        <View source={{ uri: "null" }} style={styles.View_62_150} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a190/0165/d495da46619406c8a1dce9ed575ddfbf"
          }}
          style={styles.ImageBackground_62_151}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d923/d604/448d24a878cd54e9574e765a0629c55b"
          }}
          style={styles.ImageBackground_62_152}
        />
      </View>
      <View style={styles.View_62_153}>
        <Text style={styles.Text_62_153}>Yenne</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_41: {
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
  View_1_42: {
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
  ImageBackground_1_43: {
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
  View_1_44: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("69.53551912568307%")
  },
  Text_1_44: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_45: {
    width: wp("48.53333333333333%"),
    minWidth: wp("48.53333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("61.20218579234973%")
  },
  Text_1_45: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_46: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("50.81967213114754%")
  },
  View_1_47: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
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
  View_1_48: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("2.4590163934426243%")
  },
  Text_1_48: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_49: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("70.76502732240438%")
  },
  ImageBackground_1_50: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.2%"),
    top: hp("70.76502732240438%")
  },
  View_1_51: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("74.18032786885246%")
  },
  View_1_52: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_53: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(12, 12, 12, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  View_1_54: {
    width: wp("54.13333333333333%"),
    minWidth: wp("54.13333333333333%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333337%"),
    top: hp("2.4590163934426243%")
  },
  View_1_55: {
    width: wp("45.86666666666667%"),
    minWidth: wp("45.86666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("0%")
  },
  Text_1_55: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_56: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_58: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("94.94535519125684%")
  },
  View_1_59: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_60: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(12, 12, 12, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  View_1_61: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    top: hp("2.4590163934426243%")
  },
  Text_1_61: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_62: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("84.56284153005464%")
  },
  View_1_63: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_64: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(12, 12, 12, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  View_1_65: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("87.02185792349727%")
  },
  View_1_66: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("0%")
  },
  Text_1_66: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_67: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_68: {
    width: wp("3.499624888102214%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38352864583333%")
  },
  ImageBackground_1_71: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("97.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%")
  },
  View_62_77: {
    width: wp("44.266666666666666%"),
    minWidth: wp("44.266666666666666%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("9.836065573770492%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_62_78: {
    width: wp("24.987320963541666%"),
    height: hp("11.367587313625982%"),
    top: hp("0.1851733265027331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.812393188476566%")
  },
  ImageBackground_62_79: {
    width: wp("14.547704060872396%"),
    height: hp("6.11487320863484%"),
    top: hp("10.03021907285263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.913817342122403%")
  },
  ImageBackground_62_80: {
    width: wp("1.0564351399739582%"),
    height: hp("0.9872353142076502%"),
    top: hp("11.942437177147367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.188972981770835%")
  },
  ImageBackground_62_81: {
    width: wp("17.78056640625%"),
    height: hp("4.059884326705516%"),
    top: hp("12.909648457511528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.418482462565105%")
  },
  ImageBackground_62_82: {
    width: wp("3.818454996744792%"),
    height: hp("3.8161387209032402%"),
    top: hp("12.947170069960299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.915383911132817%")
  },
  ImageBackground_62_83: {
    width: wp("4.66392822265625%"),
    height: hp("3.4959678441448943%"),
    top: hp("13.006470893901552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.988761393229172%")
  },
  ImageBackground_62_84: {
    width: wp("16.1184814453125%"),
    height: hp("7.079626302250095%"),
    top: hp("3.7088071062265193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.148211669921874%")
  },
  ImageBackground_62_88: {
    width: wp("0.20740152994791666%"),
    height: hp("0.2379151641345415%"),
    top: hp("9.354267224588027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.283998616536454%")
  },
  ImageBackground_62_89: {
    width: wp("0.14447021484375%"),
    height: hp("0.2809326505400444%"),
    top: hp("9.383192218717982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.348815917968754%")
  },
  ImageBackground_62_90: {
    width: wp("0.17823486328125002%"),
    height: hp("0.11339760868927168%"),
    top: hp("9.574410693893016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.429823811848966%")
  },
  ImageBackground_62_91: {
    width: wp("2.92626953125%"),
    height: hp("0.6492625168763875%"),
    top: hp("13.583386530641649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.072859700520834%")
  },
  ImageBackground_62_92: {
    width: wp("2.1323140462239585%"),
    height: hp("0.6759445523955131%"),
    top: hp("13.532240403805924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.351796468098964%")
  },
  ImageBackground_62_93: {
    width: wp("1.1670939127604167%"),
    height: hp("1.0847831684383538%"),
    top: hp("7.664235432942709%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.414821370442713%")
  },
  View_62_94: {
    width: wp("0.8691131591796875%"),
    height: hp("0.599052866951364%"),
    top: hp("8.422155328135672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.691020711263025%")
  },
  View_62_95: {
    width: wp("0.8691131591796875%"),
    height: hp("0.599052866951364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_96: {
    width: wp("0.8691131591796875%"),
    height: hp("0.599052866951364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_99: {
    width: wp("0.6351613362630208%"),
    height: hp("0.2433745587458376%"),
    top: hp("7.779022383559598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.626204427083334%")
  },
  ImageBackground_62_100: {
    width: wp("0.5497487386067709%"),
    height: hp("0.47573027063588624%"),
    top: hp("7.883511736093324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.740759277343752%")
  },
  View_62_101: {
    width: wp("3.2406051635742186%"),
    height: hp("2.223502873071556%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_102: {
    width: wp("1.2958577473958333%"),
    height: hp("1.0121851019520578%"),
    top: hp("7.290286705142163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.222804768880213%")
  },
  ImageBackground_62_103: {
    width: wp("0.7942301432291666%"),
    height: hp("0.518416316131425%"),
    top: hp("7.430780129354508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.553515625000006%")
  },
  ImageBackground_62_104: {
    width: wp("0.5554117838541667%"),
    height: hp("0.43006229921768274%"),
    top: hp("7.523408483286373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.71878255208333%")
  },
  ImageBackground_62_105: {
    width: wp("0.3505615234375%"),
    height: hp("0.17909899435408128%"),
    top: hp("7.692126498196293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.576204427083344%")
  },
  ImageBackground_62_106: {
    width: wp("0.3148518880208333%"),
    height: hp("0.18559231784174351%"),
    top: hp("7.148684308828551%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.487251790364585%")
  },
  ImageBackground_62_107: {
    width: wp("0.2804097493489583%"),
    height: hp("0.18681385478035348%"),
    top: hp("7.033280336140281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.080468750000005%")
  },
  ImageBackground_62_108: {
    width: wp("2.4364888509114584%"),
    height: hp("0.530954267157883%"),
    top: hp("6.472311384690913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.928141276041668%")
  },
  ImageBackground_62_109: {
    width: wp("0.8871256510416666%"),
    height: hp("0.4200367328247737%"),
    top: hp("6.536540047067112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.836142985026047%")
  },
  ImageBackground_62_110: {
    width: wp("1.05126953125%"),
    height: hp("0.5016566625709742%"),
    top: hp("6.521539740223703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.85791219075522%")
  },
  ImageBackground_62_111: {
    width: wp("2.4903442382812497%"),
    height: hp("0.5325958377025166%"),
    top: hp("6.5654233505165625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.264587402343754%")
  },
  ImageBackground_62_112: {
    width: wp("0.8536051432291667%"),
    height: hp("0.4319488025102459%"),
    top: hp("6.598959333909663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.164786783854172%")
  },
  ImageBackground_62_113: {
    width: wp("0.41902262369791665%"),
    height: hp("0.33822294141425463%"),
    top: hp("6.698708456070696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.294441731770835%")
  },
  ImageBackground_62_114: {
    width: wp("0.4931498209635417%"),
    height: hp("0.3244431292424437%"),
    top: hp("6.630831859150872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.35455729166667%")
  },
  ImageBackground_62_115: {
    width: wp("2.436936442057292%"),
    height: hp("0.41557426661090124%"),
    top: hp("6.312756981354594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.927286783854175%")
  },
  ImageBackground_62_116: {
    width: wp("0.9226399739583333%"),
    height: hp("0.44343875405566935%"),
    top: hp("6.518358741301656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.819606526692706%")
  },
  ImageBackground_62_117: {
    width: wp("0.15555013020833333%"),
    height: hp("0.09370918482379184%"),
    top: hp("6.685921924361766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.396923828125%")
  },
  ImageBackground_62_118: {
    width: wp("3.2007598876953125%"),
    height: hp("0.4448103774440744%"),
    top: hp("6.445829464438182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.699783325195316%")
  },
  ImageBackground_62_119: {
    width: wp("0.34998474121093753%"),
    height: hp("0.04791822589811731%"),
    top: hp("7.004042661906594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.883568318684897%")
  },
  ImageBackground_62_120: {
    width: wp("3.3970184326171875%"),
    height: hp("0.5347397809471589%"),
    top: hp("5.880562203829406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.808224487304688%")
  },
  ImageBackground_62_121: {
    width: wp("3.6825215657552084%"),
    height: hp("0.5795874882265518%"),
    top: hp("5.744387934116718%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.142574055989588%")
  },
  ImageBackground_62_122: {
    width: wp("0.19543050130208334%"),
    height: hp("0.9449885842578659%"),
    top: hp("6.699404690435022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.19066772460938%")
  },
  ImageBackground_62_123: {
    width: wp("0.45773111979166664%"),
    height: hp("0.9616283771118832%"),
    top: hp("6.740715985741117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.61745402018229%")
  },
  ImageBackground_62_124: {
    width: wp("1.558734130859375%"),
    height: hp("0.25220256034142335%"),
    top: hp("7.850250911191514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.863016764322918%")
  },
  ImageBackground_62_125: {
    width: wp("0.7170084635416667%"),
    height: hp("0.5305905159705323%"),
    top: hp("8.054360144776725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.91915893554688%")
  },
  ImageBackground_62_126: {
    width: wp("2.5185567220052083%"),
    height: hp("0.22703962899296662%"),
    top: hp("8.374815560429473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.379805501302084%")
  },
  ImageBackground_62_127: {
    width: wp("0.7660847981770833%"),
    height: hp("0.5386201410345692%"),
    top: hp("8.008521241568479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.593503824869803%")
  },
  ImageBackground_62_128: {
    width: wp("1.1177652994791667%"),
    height: hp("0.7460177270441107%"),
    top: hp("7.852668970660433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.74987589518229%")
  },
  ImageBackground_62_129: {
    width: wp("0.40345865885416665%"),
    height: hp("0.2970143094088862%"),
    top: hp("6.795022266158641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.280523681640627%")
  },
  ImageBackground_62_130: {
    width: wp("0.6157633463541667%"),
    height: hp("0.3785049980455409%"),
    top: hp("6.4766472154627746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.722570800781252%")
  },
  ImageBackground_62_131: {
    width: wp("0.554339599609375%"),
    height: hp("0.3520934308161501%"),
    top: hp("6.565631803919059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.980485026041666%")
  },
  ImageBackground_62_132: {
    width: wp("0.15555013020833333%"),
    height: hp("0.0937102270908043%"),
    top: hp("6.592534800044826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.28834228515625%")
  },
  View_62_133: {
    width: wp("1.3222757975260417%"),
    height: hp("0.7100662898496201%"),
    top: hp("7.924168487715592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.850305175781255%")
  },
  View_62_134: {
    width: wp("1.3222757975260417%"),
    height: hp("0.7100662898496201%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_135: {
    width: wp("1.3222757975260417%"),
    height: hp("0.7100662898496201%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_138: {
    width: wp("1.9900065104166667%"),
    height: hp("0.2609138280316129%"),
    top: hp("6.333714886441259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.94154052734375%")
  },
  ImageBackground_62_139: {
    width: wp("1.1249450683593751%"),
    height: hp("0.33103442582927767%"),
    top: hp("6.232494083258624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.76748657226563%")
  },
  ImageBackground_62_140: {
    width: wp("2.1614583333333335%"),
    height: hp("0.16553857938839436%"),
    top: hp("6.372770715932377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.233422851562505%")
  },
  ImageBackground_62_141: {
    width: wp("0.8103434244791667%"),
    height: hp("0.39615422650113136%"),
    top: hp("6.614822637839394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.187349446614586%")
  },
  View_62_142: {
    width: wp("3.2406051635742186%"),
    height: hp("2.223502873071556%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_143: {
    width: wp("0.22216593424479167%"),
    height: hp("0.1478976890689037%"),
    top: hp("7.16827475959486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.54568277994792%")
  },
  ImageBackground_62_144: {
    width: wp("0.19585978190104167%"),
    height: hp("0.169090625366878%"),
    top: hp("7.050723716860913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.174133300781254%")
  },
  ImageBackground_62_145: {
    width: wp("0.3159403483072917%"),
    height: hp("0.21387475435851053%"),
    top: hp("7.017291960169059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.07078857421875%")
  },
  ImageBackground_62_146: {
    width: wp("0.341510009765625%"),
    height: hp("0.20107519431192367%"),
    top: hp("7.142005461812671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.474328613281248%")
  },
  ImageBackground_62_147: {
    width: wp("3.343821207682292%"),
    height: hp("0.7004034323770492%"),
    top: hp("9.257428111925803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.14683634440104%")
  },
  ImageBackground_62_148: {
    width: wp("3.328108723958333%"),
    height: hp("0.8616285897343536%"),
    top: hp("8.954307681224384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.06606852213542%")
  },
  View_62_149: {
    width: wp("0.0648193359375%"),
    height: hp("0.126739668715847%"),
    top: hp("2.4703062297216523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.283998616536454%")
  },
  View_62_150: {
    width: wp("7.352933756510417%"),
    height: hp("1.127316261249813%"),
    top: hp("1.2073662763084876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.916743977864588%")
  },
  ImageBackground_62_151: {
    width: wp("0.2624308268229167%"),
    height: hp("0.21515517938332482%"),
    top: hp("6.872842090377391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.55142618815105%")
  },
  ImageBackground_62_152: {
    width: wp("0.32469482421875%"),
    height: hp("0.22323274872993512%"),
    top: hp("6.837279939912056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.05929565429688%")
  },
  View_62_153: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("28.005464480874316%")
  },
  Text_62_153: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 27,
    fontWeight: "600",
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
