import { FC } from "react";

type Props = {
  rates: {
    abbreviation: string;
    value: number;
  }[];
};

const RatesTable: FC<Props> = ({ rates }) => {
  if (rates.length === 0) {
    return <p>päivälle ei löytynyt kursseja.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>lyhenne</th>
          <th>arvo EURoina</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((rate) => {
          return (
            <tr key={rate.abbreviation}>
              <td>{rate.abbreviation}</td>
              <td>{rate.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RatesTable;
