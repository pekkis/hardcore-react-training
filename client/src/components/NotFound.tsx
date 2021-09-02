import { useStore } from "../services/state";

const NotFound = (props) => {
  const someState = useStore((store) => store.persons);

  return <div>{JSON.stringify(props)}</div>;
};

export default NotFound;
