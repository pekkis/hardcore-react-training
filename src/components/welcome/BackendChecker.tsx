import { FC, useState, useEffect } from "react";
import {
  getTestData,
  getBaseUrl,
  TestDuckType,
  cleanse
} from "../../services/instance";
import CleanseButton from "../debug/Cleanser";
import Spinner from "../debug/Spinner";
import { codeClass } from "./Welcome.css";

const BackendChecker: FC = () => {
  const [backendIsChecked, setBackendIsChecked] = useState<boolean>(false);
  const [persons, setPersons] = useState<TestDuckType[]>([]);
  const url = getBaseUrl();

  useEffect(() => {
    const initializer = async () => {
      const persons = await getTestData();

      if (persons.length !== 0) {
        setPersons(persons);
        setBackendIsChecked(true);
        return;
      }

      await cleanse();
      const cleansed = await getTestData();
      setPersons(cleansed);
      setBackendIsChecked(true);
    };

    initializer();
  }, []);

  if (!backendIsChecked) {
    return (
      <>
        <Spinner />
        Hold your horses, I am initializing your imaginary backend!
      </>
    );
  }

  return (
    <>
      <p>
        Your personal imaginary backend lives at{" "}
        <code className={codeClass}>
          <a href={url}>{url}</a>
        </code>
        . You should copy-pasteurize this to your notes because you might going
        to need it later.
      </p>

      <p>
        Below is an iframe fetching stuff from your backend. If the iframe
        contains a mysterious JSON blob of mysterious duck data, you are good to
        go backend-wise. If not, reload the page and it <em>should be ok</em>.
        If it does not want to work even after multiple reloads, it could be a
        more mysterious issue and you should contact the teacher.
      </p>

      <p>
        Also open the browser dev console and assert that it has all kinds of
        stuff. Warnings and whatnot!
      </p>

      {persons.length > 0 && (
        <iframe title="check-json" width="100%" src={`${url}/duck`}></iframe>
      )}

      <p>
        If you manage to mess up your ducks (it might happen) you can always
        cleanse the flock with the pre-made <code>CleanseButton</code> component
        from <code>/src/components/debug/CleanseButton.tsx</code>. Just render
        the component and click the cleanse button and wait patiently and your
        flock should be reset to a safe starting state.
      </p>

      <p>
        <CleanseButton />
      </p>
    </>
  );
};

export default BackendChecker;
