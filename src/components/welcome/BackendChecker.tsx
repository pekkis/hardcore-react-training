"use client";
import { FC, useState, useEffect } from "react";
import { getBaseUrl, cleanse } from "../../services/instance";
import CleanseButton from "../debug/Cleanser";
import Spinner from "../debug/Spinner";
import { codeClass } from "./Welcome.css";
import { QuarticleType, getQuarticles } from "@/services/quarticle";

const BackendChecker: FC = () => {
  const [backendIsChecked, setBackendIsChecked] = useState<boolean>(false);
  const [quarticles, setQuarticles] = useState<QuarticleType[]>([]);
  const url = getBaseUrl();

  useEffect(() => {
    const initializer = async () => {
      const { quarticles } = await getQuarticles();

      if (quarticles.length !== 0) {
        setQuarticles(quarticles);
        setBackendIsChecked(true);
        return;
      }

      await cleanse();
      const { quarticles: cleansed } = await getQuarticles();
      setQuarticles(cleansed);
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
        contains a mysterious JSON blob of mysterious quarticle data, you are
        good to go backend-wise. If not, try to push the{" "}
        <strong>CLEANSE</strong> button. If it does not want to work even after
        multiple reloads, it could be a more mysterious issue and you should
        contact the teacher.
      </p>

      {quarticles.length > 0 && (
        <iframe
          title="check-json"
          width="100%"
          src={`${url}/quarticle`}
        ></iframe>
      )}

      <p>
        If you manage to mess up your data (it might happen) you can always
        cleanse everything with the pre-made <code>CleanseButton</code>{" "}
        component from <code>/src/components/debug/CleanseButton.tsx</code>.
        Just render the component and click the cleanse button and wait
        patiently and your data should be reset to a safe starting state.
      </p>

      <CleanseButton />
    </>
  );
};

export default BackendChecker;
