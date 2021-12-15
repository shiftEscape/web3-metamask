import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 - Metamask Demo</title>
        <meta name="description" content="Web3 - Metamask Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2>Crypto Converter</h2>
          <div className={styles.inputGroup}>
            <small className={styles.label}>NEP</small>
            <input className={styles.input} type="number" placeholder="Enter value (e.g. 100)" />
          </div>
          <div className={styles.switcher}></div>
          <div className={styles.inputGroup}>
            <small className={styles.label}>BUSD</small>
            <input className={styles.input} type="number" placeholder="Enter value (e.g. 100)" />
          </div>
          <button className={styles.buttonCheck}>Check Wallet Details</button>
        </div>
      </main>

    </div>
  )
}

export default Home
