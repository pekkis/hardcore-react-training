import { CurrencyRecord } from "@/services/currency";
import { FC } from "react";

type Props = {
  rates: {
    currency: string;
    record: CurrencyRecord;
  }[];
};

const CurrencyTable: FC<Props> = ({ rates }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Valuutta</td>
          <td>Arvo €</td>
        </tr>
      </thead>
      <tbody>
        {rates.map(({ currency, record }) => {
          return (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{record.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CurrencyTable;
