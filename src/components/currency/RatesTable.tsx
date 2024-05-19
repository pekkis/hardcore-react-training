import { doNothing } from "@/services/util";
import { FC, memo } from "react";

export type Entry = {
  currency: string;
  value: number;
};

type Props = {
  rates: Entry[];
};

const RatesTable: FC<Props> = ({ rates }) => {
  doNothing(200);

  return (
    <table border={2}>
      <thead>
        <tr>
          <th>Valuutta</th>
          <th>€</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((rate) => {
          return (
            <tr key={rate.currency}>
              <td>{rate.currency}</td>
              <td>{rate.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default memo(RatesTable);
