export type TestDuckType = {
  id: string;
  appId: string;
};

export const getAppId = (): string => {
  const predefinedAppId = process.env.NEXT_PUBLIC_APPID;

  if (typeof predefinedAppId !== "string") {
    throw new Error("APP ID IS NOT DEFINED!!!");
  }

  return predefinedAppId;
};

export const getBaseUrl = (): string =>
  `${process.env.NEXT_PUBLIC_API}/${getAppId()}`;

export const getTestData = async (): Promise<TestDuckType[]> => {
  const response = await fetch(`${getBaseUrl()}/duck`);
  const data = (await response.json()) as TestDuckType[];

  return data;
};

export const cleanse = async (): Promise<boolean> => {
  const ret = await fetch(`${getBaseUrl()}/cleanse`, {
    method: "POST"
  });

  const data = (await ret.json()) as { purged: boolean };

  return data.purged;
};
