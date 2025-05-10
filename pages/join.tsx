import { useEffect } from "react";
import { useRouter } from "next/router";
import AboutUs from "@/components/about_us/AboutUs";
import { links } from "@/constants/links";

const Launch = () => {
  const router = useRouter();

  useEffect(() => {
    window.location.href = links.join_community;
  }, []);

  return <AboutUs />;
};

export default Launch;
