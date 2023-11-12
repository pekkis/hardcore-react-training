import { CurrencyRecord, EnrichedCurrencyRates } from "@/services/currency";
import { doNothing } from "@/services/util";
import { FC, memo } from "react";

type Props = {
  rates: EnrichedCurrencyRates;
  filter: string;
};

const formatter = new Intl.NumberFormat("fi", {
  maximumFractionDigits: 2
});

const filtrado = (filter: string, key: string, record: CurrencyRecord) => {
  if (!filter) {
    return true;
  }

  if (key.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
    return true;
  }

  if (!record.meta) {
    return false;
  }

  return record.meta.currency
    .toLocaleLowerCase()
    .includes(filter.toLocaleLowerCase());
};

const CurrenciesList: FC<Props> = ({ rates, filter }) => {
  doNothing(100);

  if (Object.entries(rates.rates).length === 0) {
    return <p>Tällä päivälle ei löytynyt valuuttakursseja.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>lyhenne</th>
          <th>nimi</th>
          <th>euroja</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(rates.rates)
          .filter(([key, value]) => filtrado(filter, key, value))
          .map(([key, value]) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{value.meta?.currency || key}</td>
                <td>{formatter.format(value.value)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default memo(CurrenciesList);
