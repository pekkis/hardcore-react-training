/* eslint-disable react/display-name */

import { doNothing } from "@/services/util";
import { FC, memo } from "react";

type Props = {
  currencyData: {
    country: string;
    rate: number;
  }[];
};

export const CurrencyTable: FC<Props> = memo(({ currencyData }) => {
  // todo: optimize?

  return (
    <table border={3}>
      <thead>
        <tr>
          <th>Country</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {currencyData.map((data) => {
          return (
            <tr key={data.country}>
              <td>{data.country}</td>
              <td>{data.rate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});
