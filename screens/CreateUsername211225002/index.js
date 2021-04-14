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
      <View style={styles.View_38_27}>
        <View style={styles.View_38_28} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/24bc/d22ffab851f1a3983ef593b326103263"
          }}
          style={styles.ImageBackground_38_29}
        />
      </View>
      <View style={styles.View_38_30}>
        <View style={styles.View_38_31} />
        <View style={styles.View_38_32}>
          <Text style={styles.Text_38_32}>Sophia08</Text>
        </View>
      </View>
      <View style={styles.View_38_33}>
        <Text style={styles.Text_38_33}>Create username</Text>
      </View>
      <View style={styles.View_38_34}>
        <Text style={styles.Text_38_34}>CANCEL</Text>
      </View>
      <View style={styles.View_38_35}>
        <View style={styles.View_38_36} />
        <View style={styles.View_38_37}>
          <Text style={styles.Text_38_37}>GET STARTED</Text>
        </View>
      </View>
      <View style={styles.View_38_38}>
        <View style={styles.View_38_39} />
        <View style={styles.View_38_40}>
          <Text style={styles.Text_38_40}>Username</Text>
        </View>
      </View>
      <View style={styles.View_38_41}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73d0/b1ab/155d0af4803654858f0bf126ae2fca5b"
          }}
          style={styles.ImageBackground_38_42}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e12/ae47/3b53660129e3ac5cce9cf8f0e206cf9f"
          }}
          style={styles.ImageBackground_38_45}
        />
      </View>
      <View style={styles.View_62_462}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c1/3830/85a04e000be1e819b21290c73ab340ec"
          }}
          style={styles.ImageBackground_62_463}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cfb/4291/473c69b1d92a129466831dfe33164f9c"
          }}
          style={styles.ImageBackground_62_464}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac9/3859/a5dc90245930c2454657245a0fcb13ae"
          }}
          style={styles.ImageBackground_62_465}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27d5/296a/5c4745d0c2b9b67a88cfd0057f2508ce"
          }}
          style={styles.ImageBackground_62_466}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edf2/33f5/b1667440edef7347b2b1afe4e9f39e15"
          }}
          style={styles.ImageBackground_62_467}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ec1/5fcb/aeae2644c776b996180c4c0d58d377d7"
          }}
          style={styles.ImageBackground_62_468}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff7a/4a2a/01dbb4afb50df8388775eb91545852a4"
          }}
          style={styles.ImageBackground_62_469}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
          }}
          style={styles.ImageBackground_62_473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e55c/1101/09faea2983b04ebc0840c3ff9895e84f"
          }}
          style={styles.ImageBackground_62_474}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4069/6f0d/cd0ef237e3f9deee1f711ed031b5500f"
          }}
          style={styles.ImageBackground_62_475}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa4/4118/938e321cbc9e86d1d8f6f430b84dad21"
          }}
          style={styles.ImageBackground_62_476}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12af/1b1e/0f8c9f50f82c518be10f85e624319ffc"
          }}
          style={styles.ImageBackground_62_477}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c36/e69e/a4df2e8fd223b6a5256d1836f1d9f2d4"
          }}
          style={styles.ImageBackground_62_478}
        />
        <View style={styles.View_62_479}>
          <View style={styles.View_62_480}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb39/6fe9/a1da433ed673f4a985dab761999c6ef5"
              }}
              style={styles.ImageBackground_62_481}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffbb/1e6c/4a4766a279fa145b9dfb79851fec3765"
          }}
          style={styles.ImageBackground_62_484}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b069/3d5a/a97594603018fd187bed48184c8a5bde"
          }}
          style={styles.ImageBackground_62_485}
        />
        <View source={{ uri: "null" }} style={styles.View_62_486} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0f2/e980/d89d4e0fc3fe901fb3712616dc0d9f89"
          }}
          style={styles.ImageBackground_62_487}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8bc/83d1/204ed8cea84ee77344475f1ea508d4b0"
          }}
          style={styles.ImageBackground_62_488}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7144/4694/3c0b7c83d6225473982d47b8e87a3481"
          }}
          style={styles.ImageBackground_62_489}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a8a/a269/fbd62ecdc43a50076c372fdd351ef4f9"
          }}
          style={styles.ImageBackground_62_490}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6096/09fc/dd137897474542181a97c7f5e98ec104"
          }}
          style={styles.ImageBackground_62_491}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd54/e230/b0daf38ae17f04b74dc609a682fb7f81"
          }}
          style={styles.ImageBackground_62_492}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a56/be5c/302b4dc956aa2682a9aef5cb638c1808"
          }}
          style={styles.ImageBackground_62_493}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5460/e4b1/242d4f017d3f8b0330e1dc0614cacd06"
          }}
          style={styles.ImageBackground_62_494}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c43f/87fd/b969a1b7ac95f76e6b911ed5b1909da5"
          }}
          style={styles.ImageBackground_62_495}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98b2/f2df/d90de0b54cfa4681ffeb83694a19394d"
          }}
          style={styles.ImageBackground_62_496}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc3a/aae2/51d70cd97c9605dff3c2c581029914bc"
          }}
          style={styles.ImageBackground_62_497}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d3a/e5f9/1566136607f85aeb1be6922a9cc5ae88"
          }}
          style={styles.ImageBackground_62_498}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac60/e6cb/f17541cf337177bc1e9836fccc6cdf11"
          }}
          style={styles.ImageBackground_62_499}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ade5/a298/adfffad107bc53c897c1eede421e7dbd"
          }}
          style={styles.ImageBackground_62_500}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3d6/5844/a113238d1fa99fa1bafcc93121c6cb6e"
          }}
          style={styles.ImageBackground_62_501}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_62_502}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3680/5785/e1b7217120fb9cfbc2da558e37460376"
          }}
          style={styles.ImageBackground_62_503}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810c/a6cc/fedd96de39af4efb590b1d388f765c36"
          }}
          style={styles.ImageBackground_62_504}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12c3/2597/93d113081d288495b09456004d55614f"
          }}
          style={styles.ImageBackground_62_505}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c33/8c7f/d90a11b38302d7bb7b6d8ede2f8493a7"
          }}
          style={styles.ImageBackground_62_506}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c623/d646/54e096ac176b8314a780a2fb38a2eef8"
          }}
          style={styles.ImageBackground_62_507}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f944/52e4/5be2042c0a74a61015947af704443749"
          }}
          style={styles.ImageBackground_62_508}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d130/d081/e1edcf32cc8890b15242c25fc1a5b0e2"
          }}
          style={styles.ImageBackground_62_509}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9787/e813/39ebe82b1a8804838665260bd3543ae1"
          }}
          style={styles.ImageBackground_62_510}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f3a/cab5/f4a4701f02ffcb8a95be263dfb065519"
          }}
          style={styles.ImageBackground_62_511}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3b7/2d0d/a26b478d5893f4f95a9aa679e41d6269"
          }}
          style={styles.ImageBackground_62_512}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f0a/7af4/203f529bb7275967cf350ce1897a967d"
          }}
          style={styles.ImageBackground_62_513}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01e1/8d36/30d6725a41dc48b21c5f39b3ec54d81b"
          }}
          style={styles.ImageBackground_62_514}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49c7/475b/9ac153bacb58878fe46d31c1fec63830"
          }}
          style={styles.ImageBackground_62_515}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/296f/e3fb/d07968b3f04a18f83ecf8f957c0011a0"
          }}
          style={styles.ImageBackground_62_516}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
          }}
          style={styles.ImageBackground_62_517}
        />
        <View style={styles.View_62_518}>
          <View style={styles.View_62_519}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d64/1193/7c3667ee8236ff2a0425c9e5abbdfa40"
              }}
              style={styles.ImageBackground_62_520}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad27/d6ae/491530e96dc7c6a491824acd93e4acc6"
          }}
          style={styles.ImageBackground_62_523}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5de2/264a/6f02c5544dea226f488a82bdbcd33b5f"
          }}
          style={styles.ImageBackground_62_524}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64d2/61b1/38b134942f151c582690366a2f742d04"
          }}
          style={styles.ImageBackground_62_525}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94b0/1e4a/57c9484fcda6bed3a0a4c3127167e8a7"
          }}
          style={styles.ImageBackground_62_526}
        />
        <View source={{ uri: "null" }} style={styles.View_62_527} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dbc/f96c/f377176179baec44dfb3f5c1344c964c"
          }}
          style={styles.ImageBackground_62_528}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc10/a520/e648979259e9773d5f959999cf0e360e"
          }}
          style={styles.ImageBackground_62_529}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6b2/6465/67e5aed11ba2e69139833735985bc792"
          }}
          style={styles.ImageBackground_62_530}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6b2/6465/67e5aed11ba2e69139833735985bc792"
          }}
          style={styles.ImageBackground_62_531}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b0f/fe48/92a1c7a8695d418d5a033c93d2f749cf"
          }}
          style={styles.ImageBackground_62_532}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22d9/c092/eeb0995834eeef466a676a2bfb5033ea"
          }}
          style={styles.ImageBackground_62_533}
        />
        <View source={{ uri: "null" }} style={styles.View_62_534} />
        <View source={{ uri: "null" }} style={styles.View_62_535} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a190/0165/d495da46619406c8a1dce9ed575ddfbf"
          }}
          style={styles.ImageBackground_62_536}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d923/d604/448d24a878cd54e9574e765a0629c55b"
          }}
          style={styles.ImageBackground_62_537}
        />
      </View>
      <View style={styles.View_62_538}>
        <Text style={styles.Text_62_538}>Yenne</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_38_27: {
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
  View_38_28: {
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
  ImageBackground_38_29: {
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
  View_38_30: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("60.10928961748634%")
  },
  View_38_31: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderColor: "rgba(241, 201, 15, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  View_38_32: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("2.4590163934426243%")
  },
  Text_38_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_33: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("48.63387978142077%")
  },
  Text_38_33: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_34: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.6%"),
    top: hp("81.9672131147541%")
  },
  Text_38_34: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_35: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("71.58469945355192%")
  },
  View_38_36: {
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
  View_38_37: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666667%"),
    top: hp("2.4590163934426243%")
  },
  Text_38_37: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_38: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("58.7431693989071%")
  },
  View_38_39: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_38_40: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333346%"),
    top: hp("0.2732240437158495%")
  },
  Text_38_40: {
    color: "rgba(146, 146, 146, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_41: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.80000000000001%"),
    top: hp("62.568306010928964%")
  },
  ImageBackground_38_42: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_38_45: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666487%")
  },
  View_62_462: {
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
  ImageBackground_62_463: {
    width: wp("24.987320963541666%"),
    height: hp("11.367587313625982%"),
    top: hp("0.1851733265027331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.812369791666672%")
  },
  ImageBackground_62_464: {
    width: wp("14.547704060872396%"),
    height: hp("6.11487320863484%"),
    top: hp("10.03021907285263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.913802083333334%")
  },
  ImageBackground_62_465: {
    width: wp("1.0564351399739582%"),
    height: hp("0.9872353142076502%"),
    top: hp("11.942437177147367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.188997395833336%")
  },
  ImageBackground_62_466: {
    width: wp("17.78056640625%"),
    height: hp("4.059884326705516%"),
    top: hp("12.909652626579577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.418489583333336%")
  },
  ImageBackground_62_467: {
    width: wp("3.818454996744792%"),
    height: hp("3.8161387209032402%"),
    top: hp("12.947174239028348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.91536458333334%")
  },
  ImageBackground_62_468: {
    width: wp("4.66392822265625%"),
    height: hp("3.4959678441448943%"),
    top: hp("13.006475062969605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.988736979166664%")
  },
  ImageBackground_62_469: {
    width: wp("16.1184814453125%"),
    height: hp("7.079626302250095%"),
    top: hp("3.7088029371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.1482421875%")
  },
  ImageBackground_62_473: {
    width: wp("0.20740152994791666%"),
    height: hp("0.2379151641345415%"),
    top: hp("9.354271393656079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.283984375000006%")
  },
  ImageBackground_62_474: {
    width: wp("0.14447021484375%"),
    height: hp("0.2809326505400444%"),
    top: hp("9.383188049649933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.348828125%")
  },
  ImageBackground_62_475: {
    width: wp("0.17823486328125002%"),
    height: hp("0.11339760868927168%"),
    top: hp("9.574414862961065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.429817708333342%")
  },
  ImageBackground_62_476: {
    width: wp("2.92626953125%"),
    height: hp("0.6492625168763875%"),
    top: hp("13.583390699709698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.072851562500002%")
  },
  ImageBackground_62_477: {
    width: wp("2.1323140462239585%"),
    height: hp("0.6759445523955131%"),
    top: hp("13.532244572873976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.351822916666666%")
  },
  ImageBackground_62_478: {
    width: wp("1.1670939127604167%"),
    height: hp("1.0847831684383538%"),
    top: hp("7.664231263874656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.41484375%")
  },
  View_62_479: {
    width: wp("0.8691131591796875%"),
    height: hp("0.599052866951364%"),
    top: hp("8.422151159067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.691015625000002%")
  },
  View_62_480: {
    width: wp("0.8691131591796875%"),
    height: hp("0.599052866951364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_481: {
    width: wp("0.8691131591796875%"),
    height: hp("0.599052866951364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_484: {
    width: wp("0.6351613362630208%"),
    height: hp("0.2433745587458376%"),
    top: hp("7.779022383559598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.626171875%")
  },
  ImageBackground_62_485: {
    width: wp("0.5497487386067709%"),
    height: hp("0.47573027063588624%"),
    top: hp("7.8835075670252746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.740755208333336%")
  },
  View_62_486: {
    width: wp("3.2406051635742186%"),
    height: hp("2.223502873071556%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_487: {
    width: wp("1.2958577473958333%"),
    height: hp("1.0121851019520578%"),
    top: hp("7.290290874210212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.222786458333335%")
  },
  ImageBackground_62_488: {
    width: wp("0.7942301432291666%"),
    height: hp("0.518416316131425%"),
    top: hp("7.430780129354508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.553515625000006%")
  },
  ImageBackground_62_489: {
    width: wp("0.5554117838541667%"),
    height: hp("0.43006229921768274%"),
    top: hp("7.523408483286373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.718750000000004%")
  },
  ImageBackground_62_490: {
    width: wp("0.3505615234375%"),
    height: hp("0.17909899435408128%"),
    top: hp("7.692130667264342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.576171875000004%")
  },
  ImageBackground_62_491: {
    width: wp("0.3148518880208333%"),
    height: hp("0.18559231784174351%"),
    top: hp("7.148684308828551%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.487239583333338%")
  },
  ImageBackground_62_492: {
    width: wp("0.2804097493489583%"),
    height: hp("0.18681385478035348%"),
    top: hp("7.033284505208334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.080468750000005%")
  },
  ImageBackground_62_493: {
    width: wp("2.4364888509114584%"),
    height: hp("0.530954267157883%"),
    top: hp("6.472311384690913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.928124999999998%")
  },
  ImageBackground_62_494: {
    width: wp("0.8871256510416666%"),
    height: hp("0.4200367328247737%"),
    top: hp("6.536540047067112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.8361328125%")
  },
  ImageBackground_62_495: {
    width: wp("1.05126953125%"),
    height: hp("0.5016566625709742%"),
    top: hp("6.521539740223703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.857942708333336%")
  },
  ImageBackground_62_496: {
    width: wp("2.4903442382812497%"),
    height: hp("0.5325958377025166%"),
    top: hp("6.5654233505165625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.264583333333338%")
  },
  ImageBackground_62_497: {
    width: wp("0.8536051432291667%"),
    height: hp("0.4319488025102459%"),
    top: hp("6.598959333909663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.164778645833334%")
  },
  ImageBackground_62_498: {
    width: wp("0.41902262369791665%"),
    height: hp("0.33822294141425463%"),
    top: hp("6.698708456070696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.294466145833336%")
  },
  ImageBackground_62_499: {
    width: wp("0.4931498209635417%"),
    height: hp("0.3244431292424437%"),
    top: hp("6.630836028218921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.35455729166667%")
  },
  ImageBackground_62_500: {
    width: wp("2.436936442057292%"),
    height: hp("0.41557426661090124%"),
    top: hp("6.312752812286542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.927278645833336%")
  },
  ImageBackground_62_501: {
    width: wp("0.9226399739583333%"),
    height: hp("0.44343875405566935%"),
    top: hp("6.518362910369708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.819596354166674%")
  },
  ImageBackground_62_502: {
    width: wp("0.15555013020833333%"),
    height: hp("0.09370918482379184%"),
    top: hp("6.685917755293717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.39694010416667%")
  },
  ImageBackground_62_503: {
    width: wp("3.2007598876953125%"),
    height: hp("0.4448103774440744%"),
    top: hp("6.445829464438182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.699804687500002%")
  },
  ImageBackground_62_504: {
    width: wp("0.34998474121093753%"),
    height: hp("0.04791822589811731%"),
    top: hp("7.004042661906594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.883593750000006%")
  },
  ImageBackground_62_505: {
    width: wp("3.3970184326171875%"),
    height: hp("0.5347397809471589%"),
    top: hp("5.880562203829406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.808203125000002%")
  },
  ImageBackground_62_506: {
    width: wp("3.6825215657552084%"),
    height: hp("0.5795874882265518%"),
    top: hp("5.744392103184767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.142578125000004%")
  },
  ImageBackground_62_507: {
    width: wp("0.19543050130208334%"),
    height: hp("0.9449885842578659%"),
    top: hp("6.699400521366973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.190690104166666%")
  },
  ImageBackground_62_508: {
    width: wp("0.45773111979166664%"),
    height: hp("0.9616283771118832%"),
    top: hp("6.740715985741117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.617447916666674%")
  },
  ImageBackground_62_509: {
    width: wp("1.558734130859375%"),
    height: hp("0.25220256034142335%"),
    top: hp("7.850246742123462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.863020833333334%")
  },
  ImageBackground_62_510: {
    width: wp("0.7170084635416667%"),
    height: hp("0.5305905159705323%"),
    top: hp("8.054355975708672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.919140625000008%")
  },
  ImageBackground_62_511: {
    width: wp("2.5185567220052083%"),
    height: hp("0.22703962899296662%"),
    top: hp("8.374815560429473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.379817708333338%")
  },
  ImageBackground_62_512: {
    width: wp("0.7660847981770833%"),
    height: hp("0.5386201410345692%"),
    top: hp("8.008521241568479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.59348958333334%")
  },
  ImageBackground_62_513: {
    width: wp("1.1177652994791667%"),
    height: hp("0.7460177270441107%"),
    top: hp("7.852673139728482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.749869791666672%")
  },
  ImageBackground_62_514: {
    width: wp("0.40345865885416665%"),
    height: hp("0.2970143094088862%"),
    top: hp("6.795022266158641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.280533854166666%")
  },
  ImageBackground_62_515: {
    width: wp("0.6157633463541667%"),
    height: hp("0.3785049980455409%"),
    top: hp("6.4766472154627746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.722591145833338%")
  },
  ImageBackground_62_516: {
    width: wp("0.554339599609375%"),
    height: hp("0.3520934308161501%"),
    top: hp("6.565631803919059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.980468750000004%")
  },
  ImageBackground_62_517: {
    width: wp("0.15555013020833333%"),
    height: hp("0.0937102270908043%"),
    top: hp("6.592538969112875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.288346354166666%")
  },
  View_62_518: {
    width: wp("1.3222757975260417%"),
    height: hp("0.7100662898496201%"),
    top: hp("7.924172656783641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.85032552083334%")
  },
  View_62_519: {
    width: wp("1.3222757975260417%"),
    height: hp("0.7100662898496201%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_520: {
    width: wp("1.3222757975260417%"),
    height: hp("0.7100662898496201%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_523: {
    width: wp("1.9900065104166667%"),
    height: hp("0.2609138280316129%"),
    top: hp("6.333714886441259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.941536458333335%")
  },
  ImageBackground_62_524: {
    width: wp("1.1249450683593751%"),
    height: hp("0.33103442582927767%"),
    top: hp("6.232489914190571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.76751302083333%")
  },
  ImageBackground_62_525: {
    width: wp("2.1614583333333335%"),
    height: hp("0.16553857938839436%"),
    top: hp("6.372770715932377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.233398437500004%")
  },
  ImageBackground_62_526: {
    width: wp("0.8103434244791667%"),
    height: hp("0.39615422650113136%"),
    top: hp("6.614826806907443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.187369791666672%")
  },
  View_62_527: {
    width: wp("3.2406051635742186%"),
    height: hp("2.223502873071556%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_528: {
    width: wp("0.22216593424479167%"),
    height: hp("0.1478976890689037%"),
    top: hp("7.168270590526808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.545703125000006%")
  },
  ImageBackground_62_529: {
    width: wp("0.19585978190104167%"),
    height: hp("0.169090625366878%"),
    top: hp("7.050727885928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.174153645833332%")
  },
  ImageBackground_62_530: {
    width: wp("0.3159403483072917%"),
    height: hp("0.21387475435851053%"),
    top: hp("7.017291960169059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.07076822916667%")
  },
  ImageBackground_62_531: {
    width: wp("0.341510009765625%"),
    height: hp("0.20107519431192367%"),
    top: hp("7.142005461812671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.47434895833334%")
  },
  ImageBackground_62_532: {
    width: wp("3.343821207682292%"),
    height: hp("0.7004034323770492%"),
    top: hp("9.257432280993852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.146809895833332%")
  },
  ImageBackground_62_533: {
    width: wp("3.328108723958333%"),
    height: hp("0.8616285897343536%"),
    top: hp("8.954307681224384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.066080729166668%")
  },
  View_62_534: {
    width: wp("0.0648193359375%"),
    height: hp("0.126739668715847%"),
    top: hp("2.4703062297216523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.283984375000006%")
  },
  View_62_535: {
    width: wp("7.352933756510417%"),
    height: hp("1.127316261249813%"),
    top: hp("1.2073621072404368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.916731770833334%")
  },
  ImageBackground_62_536: {
    width: wp("0.2624308268229167%"),
    height: hp("0.21515517938332482%"),
    top: hp("6.872842090377391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.551432291666675%")
  },
  ImageBackground_62_537: {
    width: wp("0.32469482421875%"),
    height: hp("0.22323274872993512%"),
    top: hp("6.837279939912056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.059309895833334%")
  },
  View_62_538: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("28.005464480874316%")
  },
  Text_62_538: {
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
