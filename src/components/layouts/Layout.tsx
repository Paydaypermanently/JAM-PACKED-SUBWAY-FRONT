import React, {PropsWithChildren} from 'react'
import Footer from './Footer'
import Header from './headers/Header'
import styled from 'styled-components'

function Layout({children}: PropsWithChildren<any>) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  background: #143790;
  height: 100%;
`

const Main = styled.div``
