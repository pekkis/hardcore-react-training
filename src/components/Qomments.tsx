import * as quarticleService from "@/services/quarticle";
import ClientQomments from "./ClientQomments";

type Props = {
  appId: string;
  quarticleId: string;
};

export default async function Qomments({ appId, quarticleId }: Props) {
  const qomments = await quarticleService
    .getComments(appId, quarticleId)
    .then((q) => {
      return new Promise<quarticleService.QommentType[]>((resolve) => {
        setTimeout(() => {
          resolve(q);
        }, 3000);
      });
    });

  return (
    <section>
      <ClientQomments
        appId={appId}
        quarticleId={quarticleId}
        qomments={qomments}
      />
    </section>
  );
}
