import { useState } from 'react'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'

import { CardElement } from '@stripe/react-stripe-js'
import { ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import * as S from './styles'

const PaymentForm = () => {
  const [error, setError] = useState<string | null>()

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setError(event.error ? event.error.message : '')
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>

        <CardElement
          options={{ hidePostalCode: true }}
          onChange={handleChange}
        />
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button fullWidth icon={<ShoppingCart />}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
