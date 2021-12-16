import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CurrencyInput from '../components/CurrencyInput';

const Home: NextPage = () => {
  const exchangeRate = 3;
  const currencyRegex = /[^\d.]|\.(?=.*\.)/g;

  const [amount, setAmount] = useState('0.00');
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount: string = '0.00', fromAmount: string = '0.00';

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = (+amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (+amount / exchangeRate).toFixed(2);
  }

  const handleFromAmountChange = (e: any) => {
    e.target.value = e.target.value.replace(currencyRegex, '');
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e: any) => {
    e.target.value = e.target.value.replace(currencyRegex, '');
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

export default Home;
