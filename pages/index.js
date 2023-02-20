import Head from 'next/head'

import { Inter } from '@next/font/google'
import Information from '../components/Information'
import TextAreaSection from '../components/TextAreaSection'
import ContactInformation from '../components/ContactInformation'
import DarkmodeButton from '../components/DarkmodeButton'
import Header from '../components/Header'
import Square from '../components/square'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tuon's page</title>
        <meta name="description" content="Created by Tuon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon-sm.png" />
      </Head>
      <main>
        <Header/>
        <Information/>
        <Footer/>
      </main>
    </div>
  )
}
