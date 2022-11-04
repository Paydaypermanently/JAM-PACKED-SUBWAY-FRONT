import {useBreakpoint} from 'styled-breakpoints/react-styled'
import {between, up} from 'styled-breakpoints'

function useDevice() {
  const isPc = useBreakpoint(up('tablet'))
  const isTablet = useBreakpoint(between('tablet', 'pc'))

  if (isPc) return 'pc'
  if (isTablet) return 'tablet'
  return 'mobile'
}

export default useDevice
