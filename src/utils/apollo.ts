import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })
}
