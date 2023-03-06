import { List } from '@/components/common/List'
import { Form } from '@/components/common/Form'
import Head from 'next/head'

// eslint-disable-next-line no-undef
function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Stackit SDK | Home</title>

        <meta content="Stackit SDK" name="description" />

        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <link href="/favicon.ico" rel="icon" />
      </Head>

      <section className="flex flex-row w-full h-full gap-5 p-5">
        <Form />
        <section className="w-4/5 h-full">
          <h2 className="text-3xl font-semibold text-black">All Notes</h2>
          <List />
        </section>
      </section>
    </>
  )
}

export default Home
