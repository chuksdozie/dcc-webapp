import Image from "next/image";
import { Inter } from "next/font/google";
import PrimaryButtton from "@/components/buttons/PrimaryButtton";
import colors from "@/constants/colors";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex bg-[${colors.white}] h-[100vh] items-center justify-center`}
    >
      <div className="bg-gray-500 flex w-[700px] h-[500px] justify-center items-center rounded-md">
        DCC Community
        <PrimaryButtton />
      </div>
    </main>
  );
}
