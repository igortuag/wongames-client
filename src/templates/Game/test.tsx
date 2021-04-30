import { render, screen } from '@testing-library/react'

import galleryMock from 'components/Gallery/mock'
import gameInfoMock from 'components/GameInfo/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Game from '.'

describe('<Game />', () => {
  it('should render the heading', () => {
    const { container } = render(<Game />)

    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
