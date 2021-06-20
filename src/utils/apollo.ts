import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache()
  })
}

export function initializedApollo(initialState = {}) {
  // serve para verificar se já existe uma instância para não criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // recuperando os dados de cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // sempre iniciando no SSR com cache limpo
  if (typeof window === 'undefined') return
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}
