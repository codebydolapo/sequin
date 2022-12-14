import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Mainbody from '../components/Mainbody'

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} font-opensans`}>
      <Head>
        <title>Sequin</title>
        <meta name="description" content="Hotel App: CodeByDolapo" />
        <link rel="icon" href="/icons/logo.png" />
      </Head>
      <div className={`${styles.gradient}`}>
        <Navbar rentals = {false}/>
        <Mainbody/>
      </div>
    </div>
  )
}

export default Home
