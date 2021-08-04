import { parseQueryStringToWhere } from '.'

const filterItems = [
  { name: 'price_lte', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price_lte: 1000,
  platform: ['windows', 'linux'],
  developers: 'Rockstar Games',
  sort: 'price:asc'
}

describe('parserQueryStringToWhere', () => {
  it('shoud parse queryString to where format', () => {
    const parseQuery = parseQueryStringToWhere({ queryString, filterItems })

    expect(parseQuery).toStrictEqual({
      price_lte: 100,
      platform: { name_contains: ['windows', 'linux'] },
      developers: { name_contains: ['Rockstar Games'] }
    })
  })
})
