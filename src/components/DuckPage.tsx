import { createElement, FC, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { DuckType } from "../services/duck";
import useStore from "../services/store";

type Props = {};

type SadLifeStoryProps = {
  duck: DuckType;
};

const SadLifeStory: FC<SadLifeStoryProps> = ({ duck }) => {
  return <p>Sad life story!!!</p>;
};

const isAdminDuck = (duck: DuckType) => {
  return duck.isAdmin === true;
};

const checker =
  (Component) =>
  ({ duck, ...rest }) => {
    if (!duck.isAdmin) {
      return "forbiddah!";
    }

    return <Component {...rest} duck={duck} />;
  };

const DuckChecker = ({ duck, children, ...rest }) => {
  if (!duck.isAdmin) {
    return "forbiddah!";
  }

  const Children = children;
  return <Children {...rest} duck={duck} />;
};

const SecretStory = checker(SadLifeStory);

const DuckPage: FC = () => {
  const params = useParams<{ id: string }>();

  const ref = useRef<HTMLDivElement | null>(null);

  const duck: DuckType | undefined = useStore(
    (store) => store.ducks[params.id as string]
  );

  console.log(duck, "duck");

  console.log(ref, "ref");

  useEffect(() => {
    console.log(ref, "REF EFFECT");
  });

  if (!duck) {
    return <div>ANKKAA EI LÖYDY</div>;
  }

  return (
    <div ref={ref}>
      <h2>
        {duck.lastName}, {duck.firstName}
      </h2>

      <SecretStory duck={duck} />

      <DuckChecker duck={duck}>{SadLifeStory}</DuckChecker>
    </div>
  );
};

export default DuckPage;
