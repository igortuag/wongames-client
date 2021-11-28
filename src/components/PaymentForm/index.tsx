import { useState, useEffect } from 'react'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'

import { CardElement } from '@stripe/react-stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import * as S from './styles'
import { useCart } from 'hooks/use-cart'
import { createPaymentIntent } from 'utils/stripe/methods'
import { Session } from 'next-auth'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const [error, setError] = useState<string | null>()
  const [disabled, setDisabled] = useState(true)
  const [clientSecrect, setClientSecrect] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({
          items
        })
      }
    }

    setPaymentMode()
  }, [items])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>

        <CardElement
          options={{
            hidePostalCode: true,
            style: {
              base: {
                fontSize: '16px'
              }
            }
          }}
          onChange={handleChange}
        />

        {error && (
          <S.Error>
            <ErrorOutline size={20} />
            {error}
          </S.Error>
        )}
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          disabled={!!error || disabled}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
