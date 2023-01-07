import { enableMapSet } from 'immer'
import Head from 'next/head'
import SheetBuilderSection from '../components/SheetBuilderSection/SheetBuilderSection'

enableMapSet()

export default function Home() {
  return (
    <>
      <Head>
        <title>Ficha de T20</title>
        <meta name="description" content="Construa sua ficha do zero" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="A1PBUnkWuS_DQFxOtFEs984kX9ClcJV8JRASYzZY4Ao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-center'>
        <SheetBuilderSection />
      </main>
    </>
  )
}
