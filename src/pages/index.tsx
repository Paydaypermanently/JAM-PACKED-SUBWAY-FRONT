import styled from 'styled-components'

function Home() {
  return (
    <Content>
      Weplanet <br />
      <br /> Next.js Template
    </Content>
  )
}

export default Home

const Content = styled.h1`
  padding: 100px 20px;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
