import styled from 'styled-components'

function Home() {
  return <Content>실시간 서울 지하철 칸별 혼잡도</Content>
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
