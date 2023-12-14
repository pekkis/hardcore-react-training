import { CurrencyRecord } from "@/services/currency";
import { doNothing } from "@/services/util";
import { FC, memo } from "react";

type Props = {
  rates: {
    currency: string;
    record: CurrencyRecord;
  }[];
};

const CurrencyList: FC<Props> = ({ rates }) => {
  return (
    <table border={2}>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Value</th>
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

export default memo(CurrencyList);
