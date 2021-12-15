import { ChangeEventHandler } from "react";

export interface CurrencyRowProps {
  currency: string;
  onChangeAmount: ChangeEventHandler;
  amount: number;
}