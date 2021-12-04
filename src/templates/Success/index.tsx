import { Done } from '@styled-icons/material-outlined/Done'
import Link from 'next/link'

import Base from 'templates/Base'

import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import Showcase from 'components/Showcase'

import * as S from './styles'
import { useCart } from 'hooks/use-cart'
import { useEffect } from 'hoist-non-react-statics/node_modules/@types/react'

export type SuccessTemplateProps = {
  recommendTitle: string
  recommendGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Success = ({
  recommendTitle,
  recommendGames,
  recommendedHighlight
}: SuccessTemplateProps) => {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Your purchase was successful!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Wait for your payment details by email. Your game is now available
            for download inside your{' '}
            <Link href="/profile/orders">
              <a>Orders List</a>
            </Link>
            . Enjoy!
          </S.Text>
        </S.Wrapper>
      </Container>

      <Showcase
        title={recommendTitle}
        games={recommendGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Success
