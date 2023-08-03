import {
  openKkiapayWidget,
  addKkiapayListener,
  removeKkiapayListener,
} from 'kkiapay'

import { useEffect } from 'react'
import { PageWrapper } from '../layout/PageWrapper.tsx'
import { useFormDatas } from '../hooks/useFormDatas.tsx'

export const Payment = () => {
  const { datas } = useFormDatas()

  function open() {
    openKkiapayWidget({
      api_key: import.meta.env.VITE_KKIAPAY_SECRET,
      sandbox: true,
      theme: '#000000',
      phone: '97000000',
      amount: datas.quantity * 10,
      email: datas.email,
      firstname: datas.firstname,
      lastname: datas.firstname,
    })
  }

  function successHandler(response: JSON) {
    console.log(response)
  }

  useEffect(() => {
    addKkiapayListener('success', successHandler)

    return () => {
      removeKkiapayListener('success', successHandler)
    }
  }, [])

  return (
    <PageWrapper>
      <div>
        <h1 className='mb-3'>Récapitulatif</h1>

        <ul className='d-flex flex-column gap-2 recap-list'>
          <li>
            <strong>Prénom</strong>
            <span>{datas.firstname}</span>
          </li>
          <li>
            <strong>Nom</strong>
            <span>{datas.lastname}</span>
          </li>
          <li>
            <strong>Email</strong>
            <span>
              <a href={`mailto:${datas.email}`}>{datas.email}</a>
            </span>
          </li>
          <li>
            <strong>Quantité</strong>
            <span>{datas.quantity}</span>
          </li>
        </ul>

        <button className='pay btn btn-primary' onClick={open}>
          Passer au paiement
        </button>
      </div>
    </PageWrapper>
  )
}
