import FormSignIn from 'components/FormSignIn'
import Auth from 'templates/Auth'

export default function ForgotPassword() {
  return (
    <Auth title="Request new password">
      <FormSignIn />
    </Auth>
  )
}
