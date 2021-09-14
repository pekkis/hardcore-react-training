import { v4 } from "uuid";
import axios from "axios";

export type PersonType = {
  id: string;
  appId: string;
};

export const getAppId = (): string => {
  const predefinedAppId = process.env.REACT_APP_APPID;
  if (predefinedAppId) {
    return predefinedAppId;
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
  `${process.env.REACT_APP_API}/person/${getAppId()}`;

export const getPersons = async (): Promise<PersonType[]> => {
  const response = await axios.get<PersonType[]>(`${getUrl()}`);
  return response.data;
};

export const cleanse = async (): Promise<boolean> => {
  const ret = await axios.post<boolean>(`${getUrl()}/cleanse`);
  return ret.data;
};
