import { v4 } from "uuid";
import axios from "axios";

export type TestDuckType = {
  id: string;
  appId: string;
};

export const getAppId = (): string | undefined => {
  const predefinedAppId = import.meta.env.VITE_APPID;

  if (typeof predefinedAppId !== "string") {
    return undefined;
  }

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

export const getBaseUrl = (): string =>
  `${import.meta.env.VITE_API}/${getAppId()}`;

export const getTestData = async (): Promise<TestDuckType[]> => {
  const response = await axios.get<TestDuckType[]>(`${getBaseUrl()}/duck`);
  return response.data;
};

export const cleanse = async (): Promise<boolean> => {
  const ret = await axios.post<boolean>(`${getBaseUrl()}/cleanse`);
  return ret.data;
};
