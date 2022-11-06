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
    <Wrapper>
      {!!isMobile ? (
        <Wrapper>
          <Header />
          <Section>{children}</Section>
          <Footer />
        </Wrapper>
      ) : (
        <PCWrapper>
          {!isMobile && <ToastContainer position={'top-center'} />}
          <h1>준비중..</h1>
        </PCWrapper>
      )}
    </Wrapper>
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
const Wrapper = styled.div`
  background: #273a6e 0 0 no-repeat padding-box;
  height: 100vh;
`
const Section = styled.div`
  margin: 100px 44px 0 44px;
`
