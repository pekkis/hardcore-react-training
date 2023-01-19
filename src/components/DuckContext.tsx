import { createContext, FC, ReactNode, useContext } from "react";

type DuckContextType = {
  quotations: string[];
};

const DuckContext = createContext<DuckContextType>({} as DuckContextType);

type Props = {
  children: ReactNode;
  quotations: string[];
};

export const Provider: FC<Props> = ({ children, quotations }) => {
  return (
    <DuckContext.Provider
      value={{
        quotations
      }}
    >
      {children}
    </DuckContext.Provider>
  );
};

export const useQuotations = (): DuckContextType["quotations"] => {
  const duckContext = useContext(DuckContext);
  return duckContext.quotations;
};
