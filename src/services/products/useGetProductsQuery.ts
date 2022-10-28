import {useQuery} from 'react-query'

function useGetProductsQuery() {
  return useQuery(['key'], () => {
    // API 함수 호출

    return {}
  })
}

export default useGetProductsQuery
