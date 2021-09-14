import { Heading, Paragraph } from "@theme-ui/components";
import { FC, useState, useEffect } from "react";
import {
  getPersons,
  getUrl,
  PersonType,
  cleanse
} from "../../services/instance";
import Spinner from "./Spinner";

const BackendChecker: FC = () => {
  const [backendIsChecked, setBackendIsChecked] = useState<boolean>(false);
  const [persons, setPersons] = useState<PersonType[]>([]);
  const url = getUrl();

  useEffect(() => {
    const initializer = async () => {
      const persons = await getPersons();

      if (persons.length !== 0) {
        setPersons(persons);
        setBackendIsChecked(true);
        return;
      }

      await cleanse();
      const cleansed = await getPersons();
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
      <Paragraph>
        Your personal imaginary backend lives at{" "}
        <code>
          <a href={url}>{url}</a>
        </code>
        .
      </Paragraph>

      <Paragraph>
        Below is an iframe fetching it's stuff from there. If the iframe
        contains a mysterious JSON blob of random person data, you're probably
        good to go. If not, reload the page and it <em>should be ok</em>. If it
        doesn't want to be ok after multiple reloads, the backend might be down
        and you should holler about it to the teacher.
      </Paragraph>

      <Paragraph>
        Also open the browser's dev console and assert that it has all kinds of
        stuff. Warnings and whatnot!
      </Paragraph>

      {persons.length > 0 && (
        <iframe title="check-json" width="100%" src={url}></iframe>
      )}
    </>
  );
};

export default BackendChecker;
