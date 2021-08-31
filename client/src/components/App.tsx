import { FC } from "react";
import Three from "./three/Three";
import DucklingSuckler from "./DucklingSuckler";

const App: FC = () => {
  return (
    <div>
      <h1>Hobla! It works (or at least seems to work).</h1>

      <DucklingSuckler name="Pekkis" />

      <h2>A Grand Welcome</h2>

      <div
        style={{
          border: "1px solid #000",
          height: "400px",
          width: "400px"
        }}
      >
        <Three />
      </div>
      <h2>Attention!</h2>

      <p>
        Below is a nice helpful iframe trying to fetch it's stuff from{" "}
        <a href="http://localhost:8889/person">http://localhost:8889/person</a>.
        If the iframe contains some mysterious JSON blob of random person data,
        you're probably good to go. If not, start the server process.
      </p>

      <p>
        Also open the browser's dev console and assert that it has all kinds of
        stuff. Warnings and shit!
      </p>

      <iframe width="100%" src="http://localhost:8889/person"></iframe>

      <h2>More attention!</h2>

      <p>
        I might do some late surprise changes so you should{" "}
        <code>git pull</code> and <code>yarn</code> come the first training
        day's morning.
      </p>

      <h2>Extra attention!</h2>

      <p>
        Open `src/components/App.tsx`, do a code change there and save the file.
        The browser should update without a hard reload.
      </p>

      <p>
        If you're using Linux and it doesn't work or stops working, go here:
      </p>

      <ul>
        <li>
          <a target="_blank" href="https://webpack.js.org/configuration/watch/">
            https://webpack.js.org/configuration/watch/
          </a>{" "}
          and check the part where it talks about not having enough watchers.
        </li>
      </ul>
    </div>
  );
};

export default App;
