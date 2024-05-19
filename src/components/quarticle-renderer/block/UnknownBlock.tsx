import { FC } from "react";

type Props = {
  data: {
    type: string;
  };
};

const UnknownBlock: FC<Props> = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UnknownBlock;
