import React, { useState } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import CheckBox from 'react-native-check-box';
import {
  Text,
  useStyleSheet,
  StyleService,
  Button,
} from '@ui-kitten/components';
import { connect } from 'react-redux';
import {
  verifyCode,
  verifyCodeError,
  resetCodeError,
  resendCode,
  clearSignUpError,
} from '../auth/redux/actions';
import CancelButton from '../../components/CancelButton';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StorageUtils } from '../../utils/storage';
import * as constants from '../auth/redux/constants';
import routes from '../../navigator/routes';

const TermsAndConditionsScreen = ({ navigation, loading }) => {
  const styles = useStyleSheet(themedStyles);

  const [isSelected, setSelection] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = () => {
    if (!isSelected) {
      return setError('You must agree with the terms and conditions');
    }
    setError('');
    StorageUtils.setStringValue(constants.TERMS_AGREED, 'true');
    navigation.navigate(routes.createUsername);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <StatusBar backgroundColor="#7C03E9" barStyle="light-content" />

        <View style={styles.header}>
          <CancelButton />
          <View style={styles.headerView}>
            <Text category="h5" style={styles.headerTitle}>
              Terms and conditions
            </Text>
          </View>
        </View>
        <View style={styles.termsTextWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.headingText}>Terms and conditions</Text>
            <Text style={styles.text}>
              <Text>
                These terms and conditions (&quot;Agreement&quot;) set forth the
                general terms and conditions of your use of the
                rosewoodventures.com website (&quot;Website&quot;),
                &quot;Yenne&quot; mobile application (&quot;Mobile
                Application&quot;) and any of their related products and
                services (collectively, &quot;Services&quot;). This Agreement is
                legally binding between you (&quot;User&quot;, &quot;you&quot;
                or &quot;your&quot;) and Rosewood Ventures (&quot;Rosewood
                Ventures&quot;, &quot;we&quot;, &quot;us&quot; or
                &quot;our&quot;). By accessing and using the Services, you
                acknowledge that you have read, understood, and agree to be
                bound by the terms of this Agreement. If you are entering into
                this Agreement on behalf of a business or other legal entity,
                you represent that you have the authority to bind such entity to
                this Agreement, in which case the terms &quot;User&quot;,
                &quot;you&quot; or &quot;your&quot; shall refer to such entity.
                If you do not have such authority, or if you do not agree with
                the terms of this Agreement, you must not accept this Agreement
                and may not access and use the Services. You acknowledge that
                this Agreement is a contract between you and Rosewood Ventures,
                even though it is electronic and is not physically signed by
                you, and it governs your use of the Services. Accounts and
                membership You must be at least 18 years of age to use the
                Services. By using the Services and by agreeing to this
                Agreement you warrant and represent that you are at least 18
                years of age. If you create an account on the Services, you are
                responsible for maintaining the security of your account and you
                are fully responsible for all activities that occur under the
                account and any other actions taken in connection with it. We
                may, but have no obligation to, monitor and review new accounts
                before you may sign in and start using the Services. Providing
                false contact information of any kind may result in the
                termination of your account. You must immediately notify us of
                any unauthorized uses of your account or any other breaches of
                security. We will not be liable for any acts or omissions by
                you, including any damages of any kind incurred as a result of
                such acts or omissions. We may suspend, disable, or delete your
                account (or any part thereof) if we determine that you have
                violated any provision of this Agreement or that your conduct or
                content would tend to damage our reputation and goodwill. If we
                delete your account for the foregoing reasons, you may not
                re-register for our Services. We may block your email address
                and Internet protocol address to prevent further registration.
                Billing and payments You shall pay all fees or charges to your
                account in accordance with the fees, charges, and billing terms
                in effect at the time a fee or charge is due and payable. Where
                Services are offered on a free trial basis, payment may be
                required after the free trial period ends, and not when you
                enter your billing details (which may be required prior to the
                commencement of the free trial period). If auto-renewal is
                enabled for the Services you have subscribed for, you will be
                charged automatically in accordance with the term you selected.
                Sensitive and private data exchange happens over a SSL secured
                communication channel and is encrypted and protected with
                digital signatures, and the Services are also in compliance with
                PCI vulnerability standards in order to create as secure of an
                environment as possible for Users. Scans for malware are
                performed on a regular basis for additional security and
                protection. If, in our judgment, your purchase constitutes a
                high-risk transaction, we will require you to provide us with a
                copy of your valid government-issued photo identification, and
                possibly a copy of a recent bank statement for the credit or
                debit card used for the purchase. We reserve the right to change
                products and product pricing at any time. We also reserve the
                right to refuse any order you place with us. We may, in our sole
                discretion, limit or cancel quantities purchased per person, per
                household or per order. These restrictions may include orders
                placed by or under the same customer account, the same credit
                card, and/or orders that use the same billing and/or shipping
                address. In the event that we make a change to or cancel an
                order, we may attempt to notify you by contacting the e-mail
                and/or billing address/phone number provided at the time the
                order was made. Accuracy of information Occasionally there may
                be information on the Services that contains typographical
                errors, inaccuracies or omissions that may relate to product
                descriptions, pricing, availability, promotions and offers. We
                reserve the right to correct any errors, inaccuracies or
                omissions, and to change or update information or cancel orders
                if any information on the Services or Services is inaccurate at
                any time without prior notice (including after you have
                submitted your order). We undertake no obligation to update,
                amend or clarify information on the Services including, without
                limitation, pricing information, except as required by law. No
                specified update or refresh date applied on the Services should
                be taken to indicate that all information on the Services or
                Services has been modified or updated. Third party services If
                you decide to enable, access or use third party services, be
                advised that your access and use of such other services are
                governed solely by the terms and conditions of such other
                services, and we do not endorse, are not responsible or liable
                for, and make no representations as to any aspect of such other
                services, including, without limitation, their content or the
                manner in which they handle data (including your data) or any
                interaction between you and the provider of such other services.
                You irrevocably waive any claim against Rosewood Ventures with
                respect to such other services. Rosewood Ventures is not liable
                for any damage or loss caused or alleged to be caused by or in
                connection with your enablement, access or use of any such other
                services, or your reliance on the privacy practices, data
                security processes or other policies of such other services. You
                may be required to register for or log into such other services
                on their respective platforms. By enabling any other services,
                you are expressly permitting Rosewood Ventures to disclose your
                data as necessary to facilitate the use or enablement of such
                other service. Uptime guarantee We offer a Service uptime
                guarantee of 99% of available time per month. The service uptime
                guarantee does not apply to service interruptions caused by: (1)
                periodic scheduled maintenance or repairs we may undertake from
                time to time; (2) interruptions caused by you or your
                activities; (3) outages that do not affect core Service
                functionality; (4) causes beyond our control or that are not
                reasonably foreseeable; and (5) outages related to the
                reliability of certain programming environments. Links to other
                resources Although the Services may link to other resources
                (such as websites, mobile applications, etc.), we are not,
                directly or indirectly, implying any approval, association,
                sponsorship, endorsement, or affiliation with any linked
                resource, unless specifically stated herein. Some of the links
                on the Services may be &quot;affiliate links&quot;. This means
                if you click on the link and purchase an item, Rosewood Ventures
                will receive an affiliate commission. We are not responsible for
                examining or evaluating, and we do not warrant the offerings of,
                any businesses or individuals or the content of their resources.
                We do not assume any responsibility or liability for the
                actions, products, services, and content of any other third
                parties. You should carefully review the legal statements and
                other conditions of use of any resource which you access through
                a link on the Services. Your linking to any other off-site
                resources is at your own risk. Prohibited uses In addition to
                other terms as set forth in the Agreement, you are prohibited
                from using the Services or Content: (a) for any unlawful
                purpose; (b) to solicit others to perform or participate in any
                unlawful acts; (c) to violate any international, federal,
                provincial or state regulations, rules, laws, or local
                ordinances; (d) to infringe upon or violate our intellectual
                property rights or the intellectual property rights of others;
                (e) to harass, abuse, insult, harm, defame, slander, disparage,
                intimidate, or discriminate based on gender, sexual orientation,
                religion, ethnicity, race, age, national origin, or disability;
                (f) to submit false or misleading information; (g) to upload or
                transmit viruses or any other type of malicious code that will
                or may be used in any way that will affect the functionality or
                operation of the Services, third party products and services, or
                the Internet; (h) to spam, phish, pharm, pretext, spider, crawl,
                or scrape; (i) for any obscene or immoral purpose; or (j) to
                interfere with or circumvent the security features of the
                Services, third party products and services, or the Internet. We
                reserve the right to terminate your use of the Services for
                violating any of the prohibited uses. Intellectual property
                rights &quot;Intellectual Property Rights&quot; means all
                present and future rights conferred by statute, common law or
                equity in or in relation to any copyright and related rights,
                trademarks, designs, patents, inventions, goodwill and the right
                to sue for passing off, rights to inventions, rights to use, and
                all other intellectual property rights, in each case whether
                registered or unregistered and including all applications and
                rights to apply for and be granted, rights to claim priority
                from, such rights and all similar or equivalent rights or forms
                of protection and any other results of intellectual activity
                which subsist or will subsist now or in the future in any part
                of the world. This Agreement does not transfer to you any
                intellectual property owned by Rosewood Ventures or third
                parties, and all rights, titles, and interests in and to such
                property will remain (as between the parties) solely with
                Rosewood Ventures. All trademarks, service marks, graphics and
                logos used in connection with the Services, are trademarks or
                registered trademarks of Rosewood Ventures or its licensors.
                Other trademarks, service marks, graphics and logos used in
                connection with the Services may be the trademarks of other
                third parties. Your use of the Services grants you no right or
                license to reproduce or otherwise use any of Rosewood Ventures
                or third party trademarks. Disclaimer of warranty You agree that
                such Service is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis and that your use of the Services is
                solely at your own risk. We expressly disclaim all warranties of
                any kind, whether express or implied, including but not limited
                to the implied warranties of merchantability, fitness for a
                particular purpose and non-infringement. We make no warranty
                that the Services will meet your requirements, or that the
                Service will be uninterrupted, timely, secure, or error-free;
                nor do we make any warranty as to the results that may be
                obtained from the use of the Service or as to the accuracy or
                reliability of any information obtained through the Service or
                that defects in the Service will be corrected. You understand
                and agree that any material and/or data downloaded or otherwise
                obtained through the use of Service is done at your own
                discretion and risk and that you will be solely responsible for
                any damage or loss of data that results from the download of
                such material and/or data. We make no warranty regarding any
                goods or services purchased or obtained through the Service or
                any transactions entered into through the Service unless stated
                otherwise. No advice or information, whether oral or written,
                obtained by you from us or through the Service shall create any
                warranty not expressly made herein. Limitation of liability To
                the fullest extent permitted by applicable law, in no event will
                Rosewood Ventures, its affiliates, directors, officers,
                employees, agents, suppliers or licensors be liable to any
                person for any indirect, incidental, special, punitive, cover or
                consequential damages (including, without limitation, damages
                for lost profits, revenue, sales, goodwill, use of content,
                impact on business, business interruption, loss of anticipated
                savings, loss of business opportunity) however caused, under any
                theory of liability, including, without limitation, contract,
                tort, warranty, breach of statutory duty, negligence or
                otherwise, even if the liable party has been advised as to the
                possibility of such damages or could have foreseen such damages.
                To the maximum extent permitted by applicable law, the aggregate
                liability of Rosewood Ventures and its affiliates, officers,
                employees, agents, suppliers and licensors relating to the
                services will be limited to an amount greater of one dollar or
                any amounts actually paid in cash by you to Rosewood Ventures
                for the prior one month period prior to the first event or
                occurrence giving rise to such liability. The limitations and
                exclusions also apply if this remedy does not fully compensate
                you for any losses or fails of its essential purpose.
                Indemnification You agree to indemnify and hold Rosewood
                Ventures and its affiliates, directors, officers, employees,
                agents, suppliers and licensors harmless from and against any
                liabilities, losses, damages or costs, including reasonable
                attorneys&#39; fees, incurred in connection with or arising from
                any third party allegations, claims, actions, disputes, or
                demands asserted against any of them as a result of or relating
                to your Content, your use of the Services or any willful
                misconduct on your part. Severability All rights and
                restrictions contained in this Agreement may be exercised and
                shall be applicable and binding only to the extent that they do
                not violate any applicable laws and are intended to be limited
                to the extent necessary so that they will not render this
                Agreement illegal, invalid or unenforceable. If any provision or
                portion of any provision of this Agreement shall be held to be
                illegal, invalid or unenforceable by a court of competent
                jurisdiction, it is the intention of the parties that the
                remaining provisions or portions thereof shall constitute their
                agreement with respect to the subject matter hereof, and all
                such remaining provisions or portions thereof shall remain in
                full force and effect. Dispute resolution The formation,
                interpretation, and performance of this Agreement and any
                disputes arising out of it shall be governed by the substantive
                and procedural laws of Florida, United States without regard to
                its rules on conflicts or choice of law and, to the extent
                applicable, the laws of United States. The exclusive
                jurisdiction and venue for actions related to the subject matter
                hereof shall be the courts located in Florida, United States,
                and you hereby submit to the personal jurisdiction of such
                courts. You hereby waive any right to a jury trial in any
                proceeding arising out of or related to this Agreement. The
                United Nations Convention on Contracts for the International
                Sale of Goods does not apply to this Agreement. Assignment You
                may not assign, resell, sub-license or otherwise transfer or
                delegate any of your rights or obligations hereunder, in whole
                or in part, without our prior written consent, which consent
                shall be at our own sole discretion and without obligation; any
                such assignment or transfer shall be null and void. We are free
                to assign any of its rights or obligations hereunder, in whole
                or in part, to any third party as part of the sale of all or
                substantially all of its assets or stock or as part of a merger.
                Changes and amendments We reserve the right to modify this
                Agreement or its terms relating to the Services at any time,
                effective upon posting of an updated version of this Agreement
                on the Services. When we do, we will post a notification within
                the Services. Continued use of the Services after any such
                changes shall constitute your consent to such changes.
                Acceptance of these terms You acknowledge that you have read
                this Agreement and agree to all its terms and conditions. By
                accessing and using the Services you agree to be bound by this
                Agreement. If you do not agree to abide by the terms of this
                Agreement, you are not authorized to access or use the Services.
                Contacting us If you would like to contact us to understand more
                about this Agreement or wish to contact us concerning any matter
                relating to it, you may send an email to
                yennecustomersupport@rosewoodventures.com.
              </Text>
            </Text>
          </ScrollView>
        </View>
        <View style={styles.actionWrapper}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => {
                setSelection(!isSelected);
              }}
              style={styles.checkbox}
            />
            <Text style={styles.label}>I agree with Terms and Conditions</Text>
          </View>
          <View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
          <View style={[styles.buttonContent, { justifyContent: 'center' }]}>
            <Button
              style={[styles.button]}
              disabled={loading}
              onPress={onSubmit}
            >
              GET STARTED
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.appLoading,
  serverError: state.auth.verifyError,
});

export default connect(mapStateToProps, {
  verifyCode,
  resendCode,
  clearSignUpError,
  resetCodeError,
  verifyCodeError,
})(TermsAndConditionsScreen);

export const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  errorText: {
    color: 'red',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  scrollView: {
    height: hp('50.12568306010928%'),
    minHeight: hp('50.12568306010928%'),
  },
  label: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  actionWrapper: {
    top: -60,
    paddingHorizontal: 20,
  },
  termsTextWrapper: {
    top: -90,
    backgroundColor: 'white',
    marginHorizontal: 30,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    backgroundColor: 'header-background-color',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginBottom: hp('3.278688524590164%'),
    paddingTop: hp('4.278688524590164%'),
    height: hp('30%'),
  },

  headerView: { alignItems: 'center' },
  headerTitle: { color: 'text-white-color' },
  button: {
    backgroundColor: 'color-primary-500',
    borderColor: 'color-primary-500',
    borderRadius: 50,
    paddingHorizontal: 30,
  },
  buttonArea: {
    alignItems: 'center',
    padding: 12,
    marginBottom: hp('7.278688524590164%'),
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
  headingText: {
    fontWeight: '700',
    marginBottom: 20,
    flex: 1,
  },
  text: {
    flexDirection: 'column',
  },
});
