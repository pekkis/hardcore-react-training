/** @jsxImportSource @emotion/react */

import { compose, pipe, append } from "ramda";

const pekkisAppender = append("Pekkis");

const theBestestList = pekkisAppender(["Hulk", "Iron Man"]);

export const createAggrandizer = (config) => (Component) => (props) => {
  const { byWhom } = config;
  return <Component {...props} byWhom={byWhom} />;
};

export const HOCUser = createAggrandizer({ byWhom: "The Illuminati" })(
  (props) => {
    const { who, byWhom } = props;
    return (
      <span>
        Ylistetty olkoon {who} tv. {byWhom}
      </span>
    );
  }
);

const Aggrandizer = (props) => {
  const { who, children, ...rest } = props;
  const byWhom = "the government";

  return children({
    who,
    byWhom
  });
};

export const RenderPropperUser = () => {
  return (
    <section>
      <Aggrandizer who="Pekkis">
        {({ who, byWhom }) => {
          return (
            <h1
              css={{
                fontSize: "50px"
              }}
            >
              You shall be aggrandized by {byWhom}, {who}
            </h1>
          );
        }}
      </Aggrandizer>
    </section>
  );
};
