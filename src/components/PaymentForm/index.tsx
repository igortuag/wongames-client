import { useState, useEffect } from 'react'
import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js'

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import * as S from './styles'
import { useCart } from 'hooks/use-cart'
import { createPaymentIntent } from 'utils/stripe/methods'
import { Session } from 'next-auth'
import { FormLoading } from 'components/Form'
import { useRouter } from 'next/router'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const { push } = useRouter()
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState<string | null>()
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecrect, setClientSecrect] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string
        })

        if (data.freeGames) {
          setFreeGames(true)
          return
        }

        if (data.error) {
          setError(data.error)
          return
        }

        if (data.clientSecret) {
          setFreeGames(false)
          setClientSecrect(data.clientSecret)
          return
        }
      }
    }

    setPaymentMode()
  }, [items, session.jwt])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPaymentIntent({
      items,
      paymentIntent,
      token: session.jwt as string
    })

    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (freeGames) {
      saveOrder()
      push('/success')
      return
    }

    const payload = await stripe!.confirmCardPayment(clientSecrect, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setLoading(false)
      return
    }

    setError(null)
    setLoading(false)
    saveOrder(payload.paymentIntent)
    push('/success')
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" lineBottom size="small">
            Payment
          </Heading>

          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
          ) : (
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
          )}

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
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (!!error || disabled)}
          >
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
