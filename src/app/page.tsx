import Welcome from "@/components/welcome/Welcome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome - Hardcore React Training"
};

export default async function IndexPage() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
