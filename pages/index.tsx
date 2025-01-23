import { Inter } from "next/font/google";
import ComingSoon from "@/components/ComingSoon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ComingSoon />
    </main>
  );
}
