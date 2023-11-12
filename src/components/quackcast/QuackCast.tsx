import { getQuackCast } from "@/services/audio";
import Player from "./Player";
import Paragraph from "../duck-ui/Paragraph";

const QuackCast = async () => {
  const quackCast = await getQuackCast();
  return (
    <div>
      <Paragraph>
        Päivän kvaakcastissa toimitusjohtajat <strong>Gaylord McAnkka</strong>,{" "}
        <strong>Kulta-Into Pii</strong> ja <strong>Kroisos Pennonen</strong>{" "}
        keskustelevat talouden ennakoimattomista tapahtumista, niin kutsutuista
        mustista joutsenista.
      </Paragraph>

      <Player clip={quackCast} />
    </div>
  );
};

export default QuackCast;
