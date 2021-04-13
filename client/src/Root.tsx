import { FunctionComponent } from "react";

const Root: FunctionComponent = () => {
  return (
    <div>
      <h1>If you see this, it works or at least seems to work.</h1>

      <p>
        I am pretty sure that somewhere, someone, is{" "}
        <em>suckling on a juicy duckling.</em> But I can assure you, it's not
        a-mee, Pekkis.
      </p>

      <h2>Attention!</h2>

      <p>
        Remember to start the server too and navigate to{" "}
        <a href="http://localhost:8889/person">http://localhost:8889/person</a>.
        It should give you a big JSON blob of random person data. Also open the
        browser's dev console, assert that it has all kinds of stuff. Warnings
        and shit!
      </p>

      <h2>More attention!</h2>

      <p>
        I might do some late surprise changes so you should `git pull` come the
        first training day's morning.
      </p>

      <h2>Extra attention!</h2>

      <p>
        Open `src/Root.tsx`, do a change there and save the file. The browser
        should update without a hard reload (hot reloading, baby!).
      </p>

      <p>
        If you're using Linux, go here:
        <ul>
          <li>
            <a
              target="_blank"
              href="https://webpack.js.org/configuration/watch/"
            >
              https://webpack.js.org/configuration/watch/
            </a>{" "}
            and check the part where it talks about not having enough watchers.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Root;
