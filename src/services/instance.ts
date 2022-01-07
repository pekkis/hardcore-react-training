import { v4 } from "uuid";
import axios from "axios";

export type TestPersonType = {
  id: string;
  appId: string;
};

export const getAppId = (): string | undefined => {
  const predefinedAppId = import.meta.env.VITE_APPID;

  if (typeof predefinedAppId !== "string") {
    return undefined;
  }

  const appId = window.localStorage.getItem("appId");

  if (appId) {
    return appId;
  }

  const newAppId = v4();
  window.localStorage.setItem("appId", newAppId);
  return newAppId;
};

export const getUrl = (): string =>
  `${import.meta.env.VITE_API}/person/${getAppId()}`;

export const getPersons = async (): Promise<TestPersonType[]> => {
  const response = await axios.get<TestPersonType[]>(`${getUrl()}`);
  return response.data;
};

export const cleanse = async (): Promise<boolean> => {
  const ret = await axios.post<boolean>(`${getUrl()}/cleanse`);
  return ret.data;
};
