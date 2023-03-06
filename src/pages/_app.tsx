import Wrapper from '@layout/Wrapper'
import '@styles/globals.css'
import '@styles/tailwind.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { rootStore } from '@/store/store'
import 'react-toastify/dist/ReactToastify.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import 'react-modern-drawer/dist/index.css'
import * as React from 'react'

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const googleClientId: string = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ''

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <ReduxProvider store={rootStore}>
        <ThemeProvider defaultTheme="light">
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ThemeProvider>
      </ReduxProvider>
    </GoogleOAuthProvider>
  )
}
