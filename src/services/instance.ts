import axios from "axios";

export const getAppId = (): string => {
  const predefinedAppId = process.env.NEXT_PUBLIC_APPID;

  if (typeof predefinedAppId !== "string") {
    throw new Error("APP ID IS NOT DEFINED!!!");
  }

  return predefinedAppId;
};

export const getBaseUrl = (): string =>
  `${process.env.NEXT_PUBLIC_API}/${getAppId()}`;

export const cleanse = async (): Promise<boolean> => {
  const ret = await axios.post<{ purged: boolean }>(`${getBaseUrl()}/cleanse`, {
    method: "POST"
  });

  return ret.data.purged;
};
