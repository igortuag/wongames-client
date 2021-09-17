import 'next-auth'

declare module 'next-auth/client' {
  export * from 'next-auth/client'

  interface SignInResponse {
    error: string | undefined
    status: number
    ok: boolean
    url: string | null
  }
}
