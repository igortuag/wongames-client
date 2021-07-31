import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { renderWithTheme } from 'utils/tests/helper'
import filterItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })
})

// describe('<Games />', () => {
//   it('should render sections', () => {
//     renderWithTheme(
//       <MockedProvider mocks={[]} addTypename={false}>
//         <Games filterItems={filterItemsMock} />
//       </MockedProvider>
//     )

//     expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
//     expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

//     expect(
//       screen.getByRole('button', { name: /show more/i })
//     ).toBeInTheDocument()
//   })
// })
