import { Avatar } from '@/components/common/Avatar'
import { Button } from '@/components/common/Button'
import { useAppSelector } from '@/store/hooks/useAppSelector'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaUser } from 'react-icons/fa'

export function RightSide() {
  const { account, isAuthenticated } = useAppSelector((state) => state.auth)
  const router = useRouter()

  const handleLogOut = () => {
    localStorage.removeItem('userAccessToken')
    void router.push('/login')
  }

  if (!isAuthenticated) {
    return (
      <Link className="navbar-end" href="/login">
        <Button color="ghost" extra="hover:bg-slate-600" size="lg">
          Log In / Sign Up
        </Button>
      </Link>
    )
  }

  return (
    <div className="flex items-center navbar-end dropdown dropdown-bottom dropdown-end">
      <label className="btn btn-circle btn-ghost avatar" tabIndex={0}>
        <Avatar url={String(account.image)} width="w-8" />
      </label>
      <ul
        className="p-2 mt-6 rounded shadow-2xl dropdown-content menu w-max bg-white"
        tabIndex={0}
      >
        <li>
          <Link
            className="hidden m-2 font-semibold text-black capitalize md:flex"
            href="/#"
          >
            <FaUser />
            <div className="flex flex-row items-center justify-between w-full">
              <span>
                {account.firstName} {account.lastName}
              </span>
              <span className="text-sm border-none badge">{account.role}</span>
            </div>
          </Link>
        </li>
        <li>
          <Button color="error" onClick={handleLogOut} size="lg">
            Log Out
          </Button>
        </li>
      </ul>
    </div>
  )
}
