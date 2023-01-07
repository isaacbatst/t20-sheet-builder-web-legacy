import { enableMapSet } from 'immer'
import Head from 'next/head'
import SheetBuilderSection from '../components/SheetBuilderSection/SheetBuilderSection'

enableMapSet()

export default function Home() {
  return (
    <>
      <Head>
        <title>Nova ficha de T20</title>
        <meta name="description" content="Construa sua ficha do zero" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-center'>
        <SheetBuilderSection />
      </main>
    </>
  )
}
