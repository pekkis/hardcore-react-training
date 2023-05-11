import { QuarticleType } from "@/services/quarticle";
import { FC, Suspense } from "react";
import * as styles from "./SuggestedQuarticles.css";
import Spinner from "./Spinner";
import Link from "next/link";

// import styled from "styled-components";

type Props = {
  quarticlesPromise: Promise<QuarticleType[]>;
};

/*
const Suggestore = styled.div({
  border: "5px dotted rgb(255 0 0)",
  padding: "1em",
  margin: "1em 0"
});
*/

const SuggestedQuarticles: FC<Props> = ({ quarticlesPromise }) => {
  return (
    <>
      <h2 className={styles.headline}>Suositellut kvartikkelit</h2>
      <Suspense
        fallback={
          <div>
            <Spinner /> Loso loso loso se on ihan loso joka leikistä suuttuu!
          </div>
        }
      >
        <InnerSuggestedQuarticles quarticlesPromise={quarticlesPromise} />
      </Suspense>
    </>
  );
};

const InnerSuggestedQuarticles: FC<Props> = async ({ quarticlesPromise }) => {
  const quarticles = await quarticlesPromise;

  return (
    <>
      {quarticles.map((quarticle) => {
        return (
          <section className={styles.suggested} key={quarticle.id}>
            <Link href={`/a/${quarticle.id}`}>{quarticle.headline}</Link>
          </section>
        );
      })}
    </>
  );
};

export default SuggestedQuarticles;
