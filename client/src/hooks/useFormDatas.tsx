import { useContext } from 'react'
import { FormDatas } from '../components/FormDatasProvider.tsx'

export const useFormDatas = () => {
  const value = useContext(FormDatas)

  if (value === null) {
    throw new Error("Vous devez entourer ce composant d'un <FormDatasProvider>")
  }

  return value
}
