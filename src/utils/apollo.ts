import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })
}
