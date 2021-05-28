import React, { useCallback } from 'react'
import { Image, StyleSheet } from 'react-native'
import cardValidator from 'card-validator'

type Props = {
  cardNumber: string
  style?: any
}

type Card = {
  icon: number
  animation: any
  alternativeAnimation?: any
  
}

const CARDS: Record<string, Card> = {
  visa: {
    icon: require('./icons/visa.png'),
    animation: require('./lottie/visa.json'),
  },
  mastercard: {
    icon: require('./icons/mastercard.png'),
    animation: require('./lottie/mastercard.json'),
  },
  'american-express': {
    icon: require('./icons/amex.png'),
    animation: require('./lottie/amex.json'),
    alternativeAnimation: require('./lottie/amexBlue.json'),
  },
  discover: {
    icon: require('./icons/discover.png'),
    animation: require('./lottie/discover.json'),
  },
}

const CardIcon: React.FC<Props> = (props) => {
  const { cardNumber } = props
  const { card } = cardValidator.number(cardNumber)

  const data: Card = CARDS[card?.type || -1]

  if (!data) return null
 
    return <Image style={[styles.icon, props?.style ? props.style: {}]} source={data.icon} />
  
}

const styles = StyleSheet.create({
  icon: {
    top: 8,
    width: 38,
    height: 38,
  },
})

export default CardIcon
