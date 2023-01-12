import { FC, useEffect, useState } from "react";
import DucklingSuckler from "./DucklingSuckler";
import Three from "./Three";
import duckling from "../../assets/duckling-2.png";
import HotReloadTester from "./HotReloadTester";
import BackendChecker from "./BackendChecker";
import cx from "clsx";

import { HelmetProvider, Helmet } from "react-helmet-async";

import {
  codeClass,
  contentClass,
  duckImageClass,
  flexClass,
  headerClass,
  headingClass,
  paddedClass,
  welcomeClass
} from "./Welcome.css";
import VanillaExtractChecker from "./VanillaExtractChecker";

const Welcome: FC = () => {
  const [suckledSeconds, setSuckledSeconds] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSuckledSeconds((ss) => ss + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Suuuuckliiiiing on a duuuuckliiing</title>
      </Helmet>
      <header className={headerClass}>
        <h1 className={headingClass.cute}>
          💖 Welcome to Pekkis&apos; Hardcore React Training 💖
        </h1>

        <div>
          This is a two day workshop for professional developers, devsigners and
          people who like duck typing.
        </div>
      </header>

      <main>
        <div className={flexClass}>
          <div className={cx(welcomeClass, contentClass)}>
            <h2>A Grand Welcome</h2>

            <DucklingSuckler name="Pekkis" />
          </div>

          <div>
            <Three suckledSeconds={suckledSeconds} />
          </div>

          <div className={contentClass}>
            <img
              src={duckling}
              alt="A succulent duckling"
              className={duckImageClass}
            />
          </div>
        </div>

        <div className={paddedClass}>
          <h2>Attention!</h2>
          <BackendChecker />

          <h2>More Attention!</h2>

          <p>
            I might do some late surprise changes so you should{" "}
            <code>git pull</code> and <code>pnpm i</code> come the first
            training day&apos;s morning.
          </p>

          <h2>Even More Attention!</h2>

          <p>
            Open{" "}
            <code className={codeClass}>
              src/components/welcome/HotReloadTester.tsx
            </code>
            , do a text change there and save the file. The next paragraph
            should update without a hard reload (look at the next paragraph).
          </p>

          <p>
            <HotReloadTester />
          </p>

          <p>
            If you are using Linux and it doesn not work or stops working, you
            might have to google for solutions for number of watchers. Sorry
            about that, but Linux people are smart people and you can solve
            anything!
          </p>

          <VanillaExtractChecker />
        </div>
      </main>
    </HelmetProvider>
  );
};

export default Welcome;
