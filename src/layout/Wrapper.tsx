import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Navbar } from '@layout/header/Navbar'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@store/hooks/useAppDispatch'
import { logIn } from '@features/auth/actions/logIn/logIn'
import { useAppSelector } from '@store/hooks/useAppSelector'
import { type Note } from '@common/types/note.types'
import { setNote } from '@features/app/store/app.slice'
import { Footer } from './Footer'
interface Props {
  children: React.ReactNode
}

function Wrapper({ children }: Props): React.ReactElement {
  const dispatch = useAppDispatch()
  const { isOpenDrawer, note } = useAppSelector((state) => state.app)
  const router = useRouter()

  useEffect(() => {
    const accessToken = localStorage.getItem('userAccessToken')
    if (!router.pathname.includes('/login')) {
      if (!accessToken) {
        void router.push('/login')
      } else {
        void dispatch(logIn(accessToken))
      }
    }
  }, [dispatch, router])

  useEffect(() => {
    if (!isOpenDrawer && note.id) dispatch(setNote({} as Note))
  }, [dispatch, isOpenDrawer, note])

  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />

      <ToastContainer
        autoClose={5000}
        newestOnTop
        pauseOnHover={false}
        position="top-right"
      />
    </>
  )
}

export default Wrapper
