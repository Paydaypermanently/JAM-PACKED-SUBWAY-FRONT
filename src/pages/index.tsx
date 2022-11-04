import Logo from '../components/main/Logo'
import SubwayForm from '../components/main/SubwayForm'
import styled from 'styled-components'
import SubmitButton from '../components/main/SubmitButton'
import {useCallback} from 'react'
import {useRouter} from 'next/router'

function Main() {
  const router = useRouter()
  const handleSubmit = useCallback(
    () => {
      router.push('/congestionResult')
    },
    [router] //form
  )
  return (
    <Wrapper>
      <Logo />
      <SubwayForm />
      <SubmitButton onSubmit={handleSubmit} />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div``
