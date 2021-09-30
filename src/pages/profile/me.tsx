import { GetServerSidePropsContext } from 'next'

import Profile from 'templates/Profile'
import FormProfile, { FormProfileProps } from 'components/FormProfile'

import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getStaticProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query({
    query: QUERY_PROFILE_ME
  })

  return {
    props: { session, username: data.me.username, email: data.me.email }
  }
}
