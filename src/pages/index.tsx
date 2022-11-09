import Logo from '../components/main/Logo'
import SubwayForm from '../components/main/SubwayForm'
import styled from 'styled-components'
import SubmitButton from '../components/main/SubmitButton'
import {useCallback} from 'react'
import {useRouter} from 'next/router'
import {Formik} from 'formik'
import {toast, ToastContainer} from 'react-toastify'
import {FormikContextType, useFormikContext} from 'formik'

const initials = {
  initialValues: {
    line: '',
    station: '',
    direction: '',
    speed: ''
  }
}

function Main() {
  const router = useRouter()
  const form: FormikContextType<any> = useFormikContext()

  const handleSubmit = useCallback(
    ({line, direction, station, speed}: ISubwayForm) => {
      if (line.length < 1) {
        toast.error('호선을 입력하세요.')
        return
      } else if ((line === '1호선' || line === '9호선') && speed !== undefined && speed.length < 1) {
        toast.error('급행 여부를 선택하세요.')
        return
      } else if (direction.length < 1) {
        toast.error('방향을 입력하세요.')
        return
      } else if (station.length < 1) {
        toast.error('역을 입력하세요.')
        return
      }
      router.push(`/congestionResult?line=${line}&speed=${speed}&direction=${direction}&station=${station}`)
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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
