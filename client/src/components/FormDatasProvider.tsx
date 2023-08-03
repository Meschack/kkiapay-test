import { PropsWithChildren, createContext, useCallback, useState } from 'react'

export interface StartDatas {
  firstname: string
  lastname: string
  email: string
  quantity: number
}

interface FormDatasContextType {
  datas: StartDatas
  updateDatas: (newDatas: StartDatas) => void
}

type Props = PropsWithChildren<{
  start: StartDatas
}>

export const FormDatas = createContext<null | FormDatasContextType>(null)

export const FormDatasProvider = ({ start, children }: Props) => {
  const [datas, setDatas] = useState(start)

  const updateDatas = useCallback((newDatas: StartDatas) => {
    setDatas(newDatas)
  }, [])

  return (
    <FormDatas.Provider value={{ datas, updateDatas }}>
      {children}
    </FormDatas.Provider>
  )
}
