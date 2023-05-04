export const getFavourites = (): string[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem("favourites");
  if (!raw) {
    return [];
  }

  const favourites = JSON.parse(raw) as string[];
  return favourites;
};

export const addFavourite = (id: string): void => {
  const favourites = getFavourites();
  favourites.push(id);
  window.localStorage.setItem("favourites", JSON.stringify(favourites));
};

export const removeFavourite = (id: string): void => {
  const favourites = getFavourites();
  const removed = favourites.filter((f) => f !== id);
  window.localStorage.setItem("favourites", JSON.stringify(removed));
};
