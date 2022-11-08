import {AppProps} from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from 'styled-components'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {RecoilRoot} from 'recoil'

import '../styles/fonts.css'
import '../styles/reset.css'
import '../styles/colors.css'

import breakpointsTheme from '../styles/breakpoints'
import GlobalStyles from '../styles/globalStyles'
import Layout from '../components/layouts/Layout'

const theme = {...breakpointsTheme}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
      retry: false
    }
  }
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>서울 지하철 혼잡도</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}

export default MyApp
