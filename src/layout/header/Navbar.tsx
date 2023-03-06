import { useRouter } from 'next/router'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'

export function Navbar() {
  const router = useRouter()

  if (router.pathname.includes('/login')) {
    return null
  }

  return (
    <header className="h-[72px] bg-neutral text-neutral-content">
      <div className="py-3 navbar">
        <LeftSide />
        <RightSide />
      </div>
    </header>
  )
}
