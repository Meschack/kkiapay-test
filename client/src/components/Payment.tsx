import {
  openKkiapayWidget,
  addKkiapayListener,
  removeKkiapayListener,
} from 'kkiapay'

import { useEffect, useState } from 'react'
import { PageWrapper } from '../layout/PageWrapper.tsx'
import { useFormDatas } from '../hooks/useFormDatas.tsx'

type PaymentStatus = {
  status: string
  message: string
}

export const Payment = () => {
  const { datas } = useFormDatas()

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus | null>(null)

  function open() {
    openKkiapayWidget({
      api_key: import.meta.env.VITE_KKIAPAY_SECRET,
      sandbox: true,
      theme: '#0d6efd',
      phone: '97000000',
      amount: datas.quantity * 10,
      email: datas.email,
      firstname: datas.firstname,
      lastname: datas.lastname,
    })
  }

  function successHandler(response: JSON) {
    console.log(response)

    setPaymentStatus({
      status: 'success',
      message: 'Payé',
    })
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
            <strong className='underline'>Prénom</strong>
            <span>{datas.firstname}</span>
          </li>
          <li>
            <strong className='underline'>Nom</strong>
            <span>{datas.lastname}</span>
          </li>
          <li>
            <strong className='underline'>Email</strong>
            <span>
              <a
                href={`mailto:${datas.email}`}
                className='mail-link underline'
                target='_blank'
              >
                {datas.email}
              </a>
            </span>
          </li>
          <li>
            <strong className='underline'>Quantité</strong>
            <span>{datas.quantity}</span>
          </li>
        </ul>

        <button
          type='button'
          className={`pay btn btn-${paymentStatus?.status ?? 'primary'}`}
          disabled={Boolean(paymentStatus)}
          onClick={open}
        >
          {paymentStatus ? 'Payé' : 'Passer au paiement'}
        </button>
      </div>
    </PageWrapper>
  )
}
