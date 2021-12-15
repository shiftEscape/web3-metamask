import React from 'react';
import { CurrencyRowProps } from '../interfaces/CurrencyRowProps';
import styles from '../styles/Home.module.css'

export default function CurrencyRow(props: CurrencyRowProps) {
  const {
    currency,
    onChangeAmount,
    amount
  } = props
  return (
    <div className={styles.inputGroup}>
      <small className={styles.label}>{ currency }</small>
      <input className={styles.input} type="number" placeholder="0.00" value={amount} onChange={onChangeAmount}/>
    </div>
  )
}