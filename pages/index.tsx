import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CurrencyInput from '../components/CurrencyInput';

const Home: NextPage = () => {
  const exchangeRate = 3;

  const [amount, setAmount] = useState(0);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  const handleFromAmountChange = (e: any) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e: any) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

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
          <CurrencyInput
            currency={'NEP'}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          ></CurrencyInput>
          <div className={styles.switcher}></div>
          <CurrencyInput
            currency={'BUSD'}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          ></CurrencyInput>
          <button className={styles.buttonCheck}>Check Wallet Details</button>
        </div>
      </main>

    </div>
  )
}

export default Home
