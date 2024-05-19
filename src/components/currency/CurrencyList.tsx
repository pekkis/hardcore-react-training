import { FC, useDeferredValue, useState } from "react";
import RatesTable, { Entry } from "./RatesTable";

type Props = {
  rates: Entry[];
};

const CurrencyList: FC<Props> = ({ rates }) => {
  const [filter, setFilter] = useState("");

  const filteredRates = rates.filter((rate) => {
    if (filter === "") {
      return true;
    }

    return rate.currency
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase());
  });

  const deferredRates = useDeferredValue(filteredRates);

  return (
    <div>
      <p>
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </p>

      <RatesTable rates={deferredRates} />
    </div>
  );
};

export default CurrencyList;
