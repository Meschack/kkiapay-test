import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Form } from '../components/Form.tsx'
import { Payment } from '../components/Payment.tsx'
import {
  FormDatasProvider,
  StartDatas,
} from '../components/FormDatasProvider.tsx'

export const Router = () => {
  const startData: StartDatas = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@doe.fr',
    quantity: 1,
  }
  return (
    <FormDatasProvider start={startData}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/commander' element={<Form />} />
          <Route path='/payer' element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </FormDatasProvider>
  )
}
