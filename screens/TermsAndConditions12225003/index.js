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
      <View style={styles.View_41_4}>
        <View style={styles.View_41_5} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/24bc/d22ffab851f1a3983ef593b326103263"
          }}
          style={styles.ImageBackground_41_6}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cc9/9b06/459a14609b3bff006530cf310497721c"
        }}
        style={styles.ImageBackground_41_7}
      />
      <View style={styles.View_41_9}>
        <View style={styles.View_41_10}>
          <View style={styles.View_41_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa2e/b4ff/62fad30af1c301a1670e8bed49d58370"
            }}
            style={styles.ImageBackground_41_12}
          />
          <View style={styles.View_41_13} />
        </View>
        <View style={styles.View_41_14}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7659/a00a/8e2ebf09eaa4edf1bc2dd141ed0ff9eb"
            }}
            style={styles.ImageBackground_41_15}
          />
        </View>
        <View style={styles.View_41_19}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/360e/9e08/280510064a204ef068c421d815b72b66"
            }}
            style={styles.ImageBackground_41_20}
          />
        </View>
      </View>
      <View style={styles.View_41_25}>
        <View style={styles.View_41_26}>
          <Text style={styles.Text_41_26}>9:27</Text>
        </View>
      </View>
      <View style={styles.View_41_27} />
      <View style={styles.View_41_28}>
        <Text style={styles.Text_41_28}>Terms and conditions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4068/6375/f183df84c365da329f54abef6dcea320"
        }}
        style={styles.ImageBackground_41_40}
      />
      <View style={styles.View_41_31}>
        <Text style={styles.Text_41_31}>I agree with Terms and Conditions</Text>
      </View>
      <View style={styles.View_41_32}>
        <View style={styles.View_41_33} />
        <View style={styles.View_41_34}>
          <Text style={styles.Text_41_34}>GET STARTED</Text>
        </View>
      </View>
      <View style={styles.View_70_1}>
        <View style={styles.View_70_0}>
          <Text style={styles.Text_70_0}>
            Terms and conditions These terms and conditions
            (&quot;Agreement&quot;) set forth the general terms and conditions
            of your use of the rosewoodventures.com website
            (&quot;Website&quot;), &quot;Yenne&quot; mobile application
            (&quot;Mobile Application&quot;) and any of their related products
            and services (collectively, &quot;Services&quot;). This Agreement is
            legally binding between you (&quot;User&quot;, &quot;you&quot; or
            &quot;your&quot;) and Rosewood Ventures (&quot;Rosewood
            Ventures&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).
            By accessing and using the Services, you acknowledge that you have
            read, understood, and agree to be bound by the terms of this
            Agreement. If you are entering into this Agreement on behalf of a
            business or other legal entity, you represent that you have the
            authority to bind such entity to this Agreement, in which case the
            terms &quot;User&quot;, &quot;you&quot; or &quot;your&quot; shall
            refer to such entity. If you do not have such authority, or if you
            do not agree with the terms of this Agreement, you must not accept
            this Agreement and may not access and use the Services. You
            acknowledge that this Agreement is a contract between you and
            Rosewood Ventures, even though it is electronic and is not
            physically signed by you, and it governs your use of the Services.
            Accounts and membership You must be at least 18 years of age to use
            the Services. By using the Services and by agreeing to this
            Agreement you warrant and represent that you are at least 18 years
            of age. If you create an account on the Services, you are
            responsible for maintaining the security of your account and you are
            fully responsible for all activities that occur under the account
            and any other actions taken in connection with it. We may, but have
            no obligation to, monitor and review new accounts before you may
            sign in and start using the Services. Providing false contact
            information of any kind may result in the termination of your
            account. You must immediately notify us of any unauthorized uses of
            your account or any other breaches of security. We will not be
            liable for any acts or omissions by you, including any damages of
            any kind incurred as a result of such acts or omissions. We may
            suspend, disable, or delete your account (or any part thereof) if we
            determine that you have violated any provision of this Agreement or
            that your conduct or content would tend to damage our reputation and
            goodwill. If we delete your account for the foregoing reasons, you
            may not re-register for our Services. We may block your email
            address and Internet protocol address to prevent further
            registration. Billing and payments You shall pay all fees or charges
            to your account in accordance with the fees, charges, and billing
            terms in effect at the time a fee or charge is due and payable.
            Where Services are offered on a free trial basis, payment may be
            required after the free trial period ends, and not when you enter
            your billing details (which may be required prior to the
            commencement of the free trial period). If auto-renewal is enabled
            for the Services you have subscribed for, you will be charged
            automatically in accordance with the term you selected. Sensitive
            and private data exchange happens over a SSL secured communication
            channel and is encrypted and protected with digital signatures, and
            the Services are also in compliance with PCI vulnerability standards
            in order to create as secure of an environment as possible for
            Users. Scans for malware are performed on a regular basis for
            additional security and protection. If, in our judgment, your
            purchase constitutes a high-risk transaction, we will require you to
            provide us with a copy of your valid government-issued photo
            identification, and possibly a copy of a recent bank statement for
            the credit or debit card used for the purchase. We reserve the right
            to change products and product pricing at any time. We also reserve
            the right to refuse any order you place with us. We may, in our sole
            discretion, limit or cancel quantities purchased per person, per
            household or per order. These restrictions may include orders placed
            by or under the same customer account, the same credit card, and/or
            orders that use the same billing and/or shipping address. In the
            event that we make a change to or cancel an order, we may attempt to
            notify you by contacting the e-mail and/or billing address/phone
            number provided at the time the order was made. Accuracy of
            information Occasionally there may be information on the Services
            that contains typographical errors, inaccuracies or omissions that
            may relate to product descriptions, pricing, availability,
            promotions and offers. We reserve the right to correct any errors,
            inaccuracies or omissions, and to change or update information or
            cancel orders if any information on the Services or Services is
            inaccurate at any time without prior notice (including after you
            have submitted your order). We undertake no obligation to update,
            amend or clarify information on the Services including, without
            limitation, pricing information, except as required by law. No
            specified update or refresh date applied on the Services should be
            taken to indicate that all information on the Services or Services
            has been modified or updated. Third party services If you decide to
            enable, access or use third party services, be advised that your
            access and use of such other services are governed solely by the
            terms and conditions of such other services, and we do not endorse,
            are not responsible or liable for, and make no representations as to
            any aspect of such other services, including, without limitation,
            their content or the manner in which they handle data (including
            your data) or any interaction between you and the provider of such
            other services. You irrevocably waive any claim against Rosewood
            Ventures with respect to such other services. Rosewood Ventures is
            not liable for any damage or loss caused or alleged to be caused by
            or in connection with your enablement, access or use of any such
            other services, or your reliance on the privacy practices, data
            security processes or other policies of such other services. You may
            be required to register for or log into such other services on their
            respective platforms. By enabling any other services, you are
            expressly permitting Rosewood Ventures to disclose your data as
            necessary to facilitate the use or enablement of such other service.
            Uptime guarantee We offer a Service uptime guarantee of 99% of
            available time per month. The service uptime guarantee does not
            apply to service interruptions caused by: (1) periodic scheduled
            maintenance or repairs we may undertake from time to time; (2)
            interruptions caused by you or your activities; (3) outages that do
            not affect core Service functionality; (4) causes beyond our control
            or that are not reasonably foreseeable; and (5) outages related to
            the reliability of certain programming environments. Links to other
            resources Although the Services may link to other resources (such as
            websites, mobile applications, etc.), we are not, directly or
            indirectly, implying any approval, association, sponsorship,
            endorsement, or affiliation with any linked resource, unless
            specifically stated herein. Some of the links on the Services may be
            &quot;affiliate links&quot;. This means if you click on the link and
            purchase an item, Rosewood Ventures will receive an affiliate
            commission. We are not responsible for examining or evaluating, and
            we do not warrant the offerings of, any businesses or individuals or
            the content of their resources. We do not assume any responsibility
            or liability for the actions, products, services, and content of any
            other third parties. You should carefully review the legal
            statements and other conditions of use of any resource which you
            access through a link on the Services. Your linking to any other
            off-site resources is at your own risk. Prohibited uses In addition
            to other terms as set forth in the Agreement, you are prohibited
            from using the Services or Content: (a) for any unlawful purpose;
            (b) to solicit others to perform or participate in any unlawful
            acts; (c) to violate any international, federal, provincial or state
            regulations, rules, laws, or local ordinances; (d) to infringe upon
            or violate our intellectual property rights or the intellectual
            property rights of others; (e) to harass, abuse, insult, harm,
            defame, slander, disparage, intimidate, or discriminate based on
            gender, sexual orientation, religion, ethnicity, race, age, national
            origin, or disability; (f) to submit false or misleading
            information; (g) to upload or transmit viruses or any other type of
            malicious code that will or may be used in any way that will affect
            the functionality or operation of the Services, third party products
            and services, or the Internet; (h) to spam, phish, pharm, pretext,
            spider, crawl, or scrape; (i) for any obscene or immoral purpose; or
            (j) to interfere with or circumvent the security features of the
            Services, third party products and services, or the Internet. We
            reserve the right to terminate your use of the Services for
            violating any of the prohibited uses. Intellectual property rights
            &quot;Intellectual Property Rights&quot; means all present and
            future rights conferred by statute, common law or equity in or in
            relation to any copyright and related rights, trademarks, designs,
            patents, inventions, goodwill and the right to sue for passing off,
            rights to inventions, rights to use, and all other intellectual
            property rights, in each case whether registered or unregistered and
            including all applications and rights to apply for and be granted,
            rights to claim priority from, such rights and all similar or
            equivalent rights or forms of protection and any other results of
            intellectual activity which subsist or will subsist now or in the
            future in any part of the world. This Agreement does not transfer to
            you any intellectual property owned by Rosewood Ventures or third
            parties, and all rights, titles, and interests in and to such
            property will remain (as between the parties) solely with Rosewood
            Ventures. All trademarks, service marks, graphics and logos used in
            connection with the Services, are trademarks or registered
            trademarks of Rosewood Ventures or its licensors. Other trademarks,
            service marks, graphics and logos used in connection with the
            Services may be the trademarks of other third parties. Your use of
            the Services grants you no right or license to reproduce or
            otherwise use any of Rosewood Ventures or third party trademarks.
            Disclaimer of warranty You agree that such Service is provided on an
            &quot;as is&quot; and &quot;as available&quot; basis and that your
            use of the Services is solely at your own risk. We expressly
            disclaim all warranties of any kind, whether express or implied,
            including but not limited to the implied warranties of
            merchantability, fitness for a particular purpose and
            non-infringement. We make no warranty that the Services will meet
            your requirements, or that the Service will be uninterrupted,
            timely, secure, or error-free; nor do we make any warranty as to the
            results that may be obtained from the use of the Service or as to
            the accuracy or reliability of any information obtained through the
            Service or that defects in the Service will be corrected. You
            understand and agree that any material and/or data downloaded or
            otherwise obtained through the use of Service is done at your own
            discretion and risk and that you will be solely responsible for any
            damage or loss of data that results from the download of such
            material and/or data. We make no warranty regarding any goods or
            services purchased or obtained through the Service or any
            transactions entered into through the Service unless stated
            otherwise. No advice or information, whether oral or written,
            obtained by you from us or through the Service shall create any
            warranty not expressly made herein. Limitation of liability To the
            fullest extent permitted by applicable law, in no event will
            Rosewood Ventures, its affiliates, directors, officers, employees,
            agents, suppliers or licensors be liable to any person for any
            indirect, incidental, special, punitive, cover or consequential
            damages (including, without limitation, damages for lost profits,
            revenue, sales, goodwill, use of content, impact on business,
            business interruption, loss of anticipated savings, loss of business
            opportunity) however caused, under any theory of liability,
            including, without limitation, contract, tort, warranty, breach of
            statutory duty, negligence or otherwise, even if the liable party
            has been advised as to the possibility of such damages or could have
            foreseen such damages. To the maximum extent permitted by applicable
            law, the aggregate liability of Rosewood Ventures and its
            affiliates, officers, employees, agents, suppliers and licensors
            relating to the services will be limited to an amount greater of one
            dollar or any amounts actually paid in cash by you to Rosewood
            Ventures for the prior one month period prior to the first event or
            occurrence giving rise to such liability. The limitations and
            exclusions also apply if this remedy does not fully compensate you
            for any losses or fails of its essential purpose. Indemnification
            You agree to indemnify and hold Rosewood Ventures and its
            affiliates, directors, officers, employees, agents, suppliers and
            licensors harmless from and against any liabilities, losses, damages
            or costs, including reasonable attorneys&#39; fees, incurred in
            connection with or arising from any third party allegations, claims,
            actions, disputes, or demands asserted against any of them as a
            result of or relating to your Content, your use of the Services or
            any willful misconduct on your part. Severability All rights and
            restrictions contained in this Agreement may be exercised and shall
            be applicable and binding only to the extent that they do not
            violate any applicable laws and are intended to be limited to the
            extent necessary so that they will not render this Agreement
            illegal, invalid or unenforceable. If any provision or portion of
            any provision of this Agreement shall be held to be illegal, invalid
            or unenforceable by a court of competent jurisdiction, it is the
            intention of the parties that the remaining provisions or portions
            thereof shall constitute their agreement with respect to the subject
            matter hereof, and all such remaining provisions or portions thereof
            shall remain in full force and effect. Dispute resolution The
            formation, interpretation, and performance of this Agreement and any
            disputes arising out of it shall be governed by the substantive and
            procedural laws of Florida, United States without regard to its
            rules on conflicts or choice of law and, to the extent applicable,
            the laws of United States. The exclusive jurisdiction and venue for
            actions related to the subject matter hereof shall be the courts
            located in Florida, United States, and you hereby submit to the
            personal jurisdiction of such courts. You hereby waive any right to
            a jury trial in any proceeding arising out of or related to this
            Agreement. The United Nations Convention on Contracts for the
            International Sale of Goods does not apply to this Agreement.
            Assignment You may not assign, resell, sub-license or otherwise
            transfer or delegate any of your rights or obligations hereunder, in
            whole or in part, without our prior written consent, which consent
            shall be at our own sole discretion and without obligation; any such
            assignment or transfer shall be null and void. We are free to assign
            any of its rights or obligations hereunder, in whole or in part, to
            any third party as part of the sale of all or substantially all of
            its assets or stock or as part of a merger. Changes and amendments
            We reserve the right to modify this Agreement or its terms relating
            to the Services at any time, effective upon posting of an updated
            version of this Agreement on the Services. When we do, we will post
            a notification within the Services. Continued use of the Services
            after any such changes shall constitute your consent to such
            changes. Acceptance of these terms You acknowledge that you have
            read this Agreement and agree to all its terms and conditions. By
            accessing and using the Services you agree to be bound by this
            Agreement. If you do not agree to abide by the terms of this
            Agreement, you are not authorized to access or use the Services.
            Contacting us If you would like to contact us to understand more
            about this Agreement or wish to contact us concerning any matter
            relating to it, you may send an email to
            yennecustomersupport@rosewoodventures.com.
          </Text>
        </View>
        <View style={styles.View_70_2} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_41_4: {
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
  View_41_5: {
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
  ImageBackground_41_6: {
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
  ImageBackground_41_7: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("90.98360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%")
  },
  View_41_9: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_41_10: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666683%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_41_11: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.04553873030865763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1
  },
  ImageBackground_41_12: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_41_13: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187627740245049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_41_14: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_41_15: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215075216658105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111328124999972%")
  },
  View_41_19: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_41_20: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09107329154926536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17779947916666572%")
  },
  View_41_25: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.092896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_41_26: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08889973958333286%"),
    top: hp("0.819672131147541%")
  },
  Text_41_26: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_41_27: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.46448087431694%"),
    backgroundColor: "rgba(124, 3, 233, 1)"
  },
  View_41_28: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("11.475409836065573%")
  },
  Text_41_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_40: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.4%")
  },
  View_41_31: {
    width: wp("73.06666666666666%"),
    minWidth: wp("73.06666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.599999999999998%"),
    top: hp("90.98360655737704%")
  },
  Text_41_31: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_32: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("97.54098360655738%")
  },
  View_41_33: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
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
  View_41_34: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.599999999999998%"),
    top: hp("2.4590163934426243%")
  },
  Text_41_34: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_1: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("69.12568306010928%"),
    minHeight: hp("69.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.672131147540984%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_70_0: {
    width: wp("76.53333333333333%"),
    minWidth: wp("76.53333333333333%"),
    minHeight: hp("1433.6065573770493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("3.2786885245901622%")
  },
  Text_70_0: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_2: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("10.109289617486336%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
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
