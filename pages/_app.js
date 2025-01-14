import React from 'react'
import Head from 'next/head'

import Analytics from "../components/analytics.js";

import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Meta as={Head}>
       <meta name="google-site-verification" content="7zE7h5foPaxIcnv5Frq6BkcUb9-3UzVc8q3P_cexf9I" />
    </Meta>  
    <Component {...pageProps} />
    <Analytics />
  </ThemeProvider>
)

export default App
