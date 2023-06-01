import { QuarticleType, getQuarticles } from "@/services/quarticle";

export default async function Latest() {
  const latest = await getQuarticles(0, 20).then((articles) => {
    console.log("TUSSI", articles);

    return new Promise<QuarticleType[]>((resolve) => {
      setTimeout(() => {
        resolve(articles.quarticles);
      }, 5000);
    });
  });

  return (
    <div>
      <h3>LATEST HEADLINEX</h3>
      {latest.length} latest puuperoinens
    </div>
  );
}
