import React, {PropsWithChildren, useCallback, useEffect} from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './headers/Header'
import {down} from 'styled-breakpoints'
import {useBreakpoint} from 'styled-breakpoints/react-styled'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Layout({children}: PropsWithChildren<any>) {
  const isMobile = useBreakpoint(down('mobile'))

  useEffect(() => {
    if (isMobile === false) toast.error('현재 모바일 버전만 사용이 가능합니다.')
  }, [isMobile])
  return (
    <>
      {!!isMobile ? (
        <MobileWrapper>
          <Header />
          <Section>{children}</Section>
          <Footer />
        </MobileWrapper>
      ) : (
        <PCWrapper>
          {!isMobile && <ToastContainer position={'top-center'} />}
          <h1>준비중..</h1>
        </PCWrapper>
      )}
    </>
  )
}

export default Layout

const PCWrapper = styled.div`
  font-family: 'Noto Nastaliq Urdu';
  opacity: 1;
  height: 100vh;
  background: #273a6e 0 0 no-repeat padding-box;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MobileWrapper = styled.div`
  min-height: 900px;
  width: 100%;
  max-width: 1024px;
  background: #273a6e 0 0 no-repeat padding-box;
  margin: 0 auto;
  padding: 0;
`

const Wrapper = styled.div``
const Section = styled.div`
  margin: 100px 44px 0 44px;
`
