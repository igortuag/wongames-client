import { rest } from 'msw'

type LoginReqBody = {
  email: string
}

export const handlers = [
  rest.post<LoginReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    (req, res, ctx) => {
      const { email } = req.body
    }
  )
]
