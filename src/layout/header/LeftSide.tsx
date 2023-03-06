import { HamburgerMenu } from '@/components/common/HamburgerMenu'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/stackitAppLogo.svg'

export function LeftSide() {
  return (
    <div className="navbar-start">
      <HamburgerMenu type="">
        <li>
          <Link
            className="text-lg font-semibold text-indigo-900"
            href="/interviews"
          >
            Link
          </Link>
        </li>
        <li>
          <Link
            className="text-lg font-semibold text-indigo-900"
            href="/interviews"
          >
            Link
          </Link>
        </li>
      </HamburgerMenu>

      <div className="flex items-center w-3/6 h-auto">
        <Link className="h-auto text-xl normal-case btn btn-ghost" href="/">
          <Image alt="Interview-buddy logo" className="w-[200px]" src={logo} />
        </Link>
      </div>
    </div>
  )
}
