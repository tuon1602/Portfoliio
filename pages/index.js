import Head from 'next/head'

import { Inter } from '@next/font/google'
import Information from '../components/Information'
import TextAreaSection from '../components/TextAreaSection'
import ContactInformation from '../components/ContactInformation'
import DarkmodeButton from '../components/DarkmodeButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-slate-800 h-screen">
      <Head>
        <title>Tuon's page</title>
        <meta name="description" content="Created by Tuon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkmodeButton/>
      <main className='flex flex-col items-center pt-10'>
        <Information/>
        <TextAreaSection/>
        <ContactInformation/>
      </main>
    </div>
  )
}
