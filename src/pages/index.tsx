import Logo from '../components/main/Logo'
import SubwayForm from '../components/main/SubwayForm'
import styled from 'styled-components'
import SubmitButton from '../components/main/SubmitButton'
import {useCallback} from 'react'
import {useRouter} from 'next/router'
import {Formik} from 'formik'
import {toast, ToastContainer} from 'react-toastify'

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
      if (values.line.length < 1) {
        toast.error('호선을 입력하세요.')
        return
      } else if (values.direction.length < 1) {
        toast.error('방향을 입력하세요.')
        return
      } else if (values.station.length < 1) {
        toast.error('역을 입력하세요.')
        return
      }
      router.push('/congestionResult')
    },
    [router] //form
  )
  return (
    <Wrapper>
      <ToastContainer position={'top-center'} />
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
