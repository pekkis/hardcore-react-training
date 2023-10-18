import { CurrencyRecord } from "@/services/currency";
import { doNothing } from "@/services/util";
import { FC, memo } from "react";

type Props = {
  rates: [abbreviation: string, CurrencyRecord][];
};

const RatesTable: FC<Props> = ({ rates }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>lyhenne</th>
          <th>arvo</th>
        </tr>
      </thead>
      <tbody>
        {rates.map(([key, entry]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{entry.value}</td>
              <td>--</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default memo(RatesTable);
