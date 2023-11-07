import duckling from "@/assets/duckling-2.png";
import cx from "clsx";
import { FC } from "react";
import BackendChecker from "./BackendChecker";
import HotReloadTester from "./HotReloadTester";

import dynamic from "next/dynamic";

const Three = dynamic(() => import("./Three"), {
  ssr: false,
  loading() {
    return <div>LADDARE...</div>;
  }
});

import Form from "./Form";
import VanillaExtractChecker from "./VanillaExtractChecker";
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

const Welcome: FC = () => {
  if (!process.env.NEXT_PUBLIC_APPID) {
    return (
      <div>
        <pre>process.env.NEXT_PUBLIC_APPID</pre> is missing.
        <ul>
          <li>cp .env.example .env.local</li>
          <li>
            edit .env.local, make NEXT_PUBLIC_APPID be something{" "}
            <em>alphanumeric</em> that you would think is uniquely yours!
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
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
            <Form />
          </div>

          <div>
            <Three />
          </div>

          <div className={contentClass}>
            <img
              src={duckling.src}
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
            I will probably do some late changes so you should{" "}
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

          <HotReloadTester />

          <p>
            If you are using Linux and it doesn not work or stops working, you
            might have to google for solutions for number of watchers. Sorry
            about that, but Linux people are smart people and you can solve
            anything!
          </p>

          <VanillaExtractChecker />
        </div>
      </main>
    </>
  );
};

export default Welcome;
