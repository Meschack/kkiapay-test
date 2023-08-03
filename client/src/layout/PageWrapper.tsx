import type { PropsWithChildren } from 'react'

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className='container page'>
      <div className='col-10 col-md-8 col-lg-6 mx-auto'>{children}</div>
    </div>
  )
}
