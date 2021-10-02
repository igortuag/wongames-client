import FormForgotPassword from 'components/FormForgotPassword'
import Auth from 'templates/Auth'

export default function ResetPassword() {
  return (
    <Auth title="Reset password">
      <FormForgotPassword />
    </Auth>
  )
}
