import { random } from "./random";

export type QuackCastAudio = {
  title: string;
  url: string;
  description: string;
  attribution: string;
};

const quackCast: QuackCastAudio = {
  title: "Kvaakcast",
  url: "https://hardcore-react-training.s3.eu-north-1.amazonaws.com/kvaakcast.ogg",
  description:
    "Päivän kvaakcastissa toimitusjohtajat **Gaylord McAnkka**, **Kulta-Into Pii** ja **Kroisos Pennonen** keskustelevat talouden ennakoimattomista tapahtumista, niin kutsutuista mustista joutsenista.",
  attribution:
    "https://en.wikipedia.org/wiki/File:Mallard_(Anas_platyrhynchos)_(W1CDR0001518_BD17).ogg"
};

export const getQuackCast = async (): Promise<QuackCastAudio> => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(quackCast);
      },
      random.integer(500, 1000)
    );
  });
};
