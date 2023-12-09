import NextAuth, { type DefaultSession } from 'next-auth'
import Credential from 'next-auth/providers/credentials'

declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's id. */
      id: string
    } & DefaultSession['user']
  }
}

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    Credential({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        try {
          // do zk stuff
          // const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }
          console.log('auth: ')
          // if (user) {
          //   return user
          // } else {
          //   return null
          // }
          return null
        } catch (error) {
          console.log('error :', error)
          return null
        }
      }
    })
  ],
  // callbacks: {
  //   jwt({ token, profile }) {
  //     if (profile) {
  //       token.id = profile.id
  //       token.image = profile.avatar_url || profile.picture
  //     }
  //     return token
  //   },
  //   session: ({ session, token }) => {
  //     if (session?.user && token?.id) {
  //       session.user.id = String(token.id)
  //     }
  //     return session
  //   },
  //   authorized({ auth }) {
  //     return !!auth?.user // this ensures there is a logged in user for -every- request
  //   }
  // },
  pages: {
    signIn: '/sign-in'
  }
})
