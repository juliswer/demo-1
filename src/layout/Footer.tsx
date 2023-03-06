import Image from 'next/image'
import logo from '@/assets/images/logo.svg'
import { type ReactNode } from 'react'
import { useRouter } from 'next/router'

type Props = {
  children?: ReactNode
  height?: string
}

export function Footer({ children, height }: Props) {
  const router = useRouter()

  if (router.pathname.includes('/login')) {
    return null
  }

  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content h-[60px]">
      <div className="items-center grid-flow-col">
        <Image alt="Interview-buddy logo" className="w-[200px]" src={logo} />
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      {children}
    </footer>
  )
}
