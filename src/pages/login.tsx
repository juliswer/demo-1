import logo from '@/assets/images/logo.svg'
import Head from 'next/head'
import Image from 'next/image'
import { ButtonLoginGoogle } from '@/components/common/ButtonLoginGoogle'
function LoginPage() {
  return (
    <>
      <Head>
        <title>Log In | StackIt SDK with Nextjs </title>
      </Head>
      <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md gap-3 space-y-8">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-center">
            Log In
          </h2>
          <div className="flex justify-center gap-2 h">
            <p className="text-sm">by</p>
            <Image alt="Interview-buddy logo" height={20} src={logo} />
          </div>
          <ButtonLoginGoogle />
        </div>
      </div>
    </>
  )
}

export default LoginPage
