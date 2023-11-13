import { random } from "./random";

export type QuackTubeVideo = {
  title: string;
  url: string;
  attribution: string;
  description: string;
};

export const videos: QuackTubeVideo[] = [
  {
    title: "Mustat joutsenet",
    description:
      "Taloustilanteen ennakoimattomat tapahtumat huolettavat monia. Toimittajamme kysyi mustilta joutsenilta, mitä he *itse* ajattelevat nykyisestä taloustilanteesta ja omasta vaikutuksestaan vuoden 2024 koronnostoihin Euroopan keskuspankissa.",
    url: "https://hardcore-react-training.s3.eu-north-1.amazonaws.com/black-swan.webm",
    attribution:
      "The Nature Box, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
  },
  {
    title: "Kvauppalehden työharjoittelijat",
    description: "Kvauppalehden työharjoittelijat esittelyssä",
    url: "https://hardcore-react-training.s3.eu-north-1.amazonaws.com/mallard.webm",
    attribution:
      "https://en.wikipedia.org/wiki/File:Canard_colvert_femelle_et_ses_petits_(Lac_Archambault,_Qc).webm"
  }
];

export const getVideos = async (): Promise<QuackTubeVideo[]> => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(videos);
      },
      random.integer(100, 300)
    );
  });
};
