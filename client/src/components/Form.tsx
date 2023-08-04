import { FormEvent, useEffect } from 'react'
import { PageWrapper } from '../layout/PageWrapper.tsx'
import { useFormDatas } from '../hooks/useFormDatas.tsx'
import { StartDatas } from './FormDatasProvider.tsx'
import { useNavigate } from 'react-router-dom'

export const Form = () => {
  const { datas, updateDatas } = useFormDatas()

  const history = useNavigate()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formDatas = new FormData(e.currentTarget)

    const values: StartDatas = {
      firstname: String(formDatas.get('firstname')),
      lastname: String(formDatas.get('lastname')),
      email: String(formDatas.get('email')),
      quantity: Number(formDatas.get('quantity')),
    }

    updateDatas(values)

    history('/payer')
  }

  useEffect(() => console.log(datas), [datas])

  return (
    <PageWrapper>
      <h1 className='text-center'>Kkiapay Test</h1>
      <form method='post' onSubmit={onSubmit} className='mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='lastname' className='label'>
              Nom
            </label>
            <input
              required
              type='text'
              name='lastname'
              id='lastname'
              className='form-input'
              placeholder='Votre nom'
            />
          </div>

          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='firstname' className='label'>
              Prénoms
            </label>
            <input
              required
              type='text'
              name='firstname'
              id='firstname'
              className='form-input'
              placeholder='Vos prénoms'
            />
          </div>
        </div>

        <div className='row'>
          <div className='mb-3'>
            <label htmlFor='email' className='label'>
              Email
            </label>
            <input
              required
              type='email'
              className='form-input'
              name='email'
              id='email'
              placeholder='abc@mail.com'
            />
          </div>
        </div>

        <div className='row'>
          <div className='mb-3'>
            <label htmlFor='quantity' className='label'>
              Quantité
            </label>
            <input
              required
              type='number'
              className='form-input'
              name='quantity'
              id='quantity'
            />
          </div>
        </div>

        <div className='d-grid mt-3'>
          <button type='submit' className='btn btn-primary'>
            Passer la commande
          </button>
        </div>
      </form>
    </PageWrapper>
  )
}
