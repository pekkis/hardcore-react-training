import {
  addFavourite,
  getFavourites,
  removeFavourite
} from "@/services/favourite";
import { Quarticle } from "@/services/quarticle";
import { useEffect, useState } from "react";

const useFavourites = (quarticle: Quarticle) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  useEffect(() => {
    const favourites = getFavourites();
    setIsFavourite(favourites.includes(quarticle.id));
  }, [quarticle]);

  return {
    isFavourite,
    addFavourite: () => {
      addFavourite(quarticle.id);
      setIsFavourite(true);
    },
    removeFavourite: () => {
      removeFavourite(quarticle.id);
      setIsFavourite(false);
    }
  };
};

export default useFavourites;
