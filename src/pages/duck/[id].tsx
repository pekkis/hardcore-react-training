import { DuckType } from "@/services/duck";
import { useRouter } from "next/router";
import { FC } from "react";

type Props = {
  ducks: DuckType[];
};

const DuckPage: FC<Props> = ({ ducks }) => {
  const router = useRouter();

  const id = router.query.id as string;
  const duck = ducks.find((d) => d.id === id);

  if (!duck) {
    return <div>oh noes</div>;
  }

  return (
    <section>
      <h2>
        {duck.lastName}, {duck.firstName}
      </h2>
    </section>
  );
};

export default DuckPage;
