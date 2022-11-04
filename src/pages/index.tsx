import Logo from '../components/main/Logo'
import SubwayForm from '../components/main/SubwayForm'
import styled from 'styled-components'
import SubmitButton from '../components/main/SubmitButton'
import {useCallback} from 'react'
import {useRouter} from 'next/router'
import {Formik} from 'formik'

const initials = {
  initialValues: {
    line: '',
    station: '',
    direction: ''
  }
}

function Main() {
  const router = useRouter()
  const handleSubmit = useCallback(
    (values: ISubwayForm) => {
      router.push('/congestionResult')
    },
    [router] //form
  )
  return (
    <Wrapper>
      <Formik {...initials} onSubmit={handleSubmit}>
        {(form) => (
          <form onSubmit={form.handleSubmit}>
            <Logo />
            <SubwayForm />
            <SubmitButton />
          </form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div``
