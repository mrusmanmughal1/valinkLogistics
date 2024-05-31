"use client";
import SilderMain from "@/UI/SilderMain";
import DymanicUI from "@/components/DymanicUI";
import Hero from "@/components/Hero";

import { useEffect } from "react";
import { useRouter } from 'next/navigation'
const Page = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === "/#quote") {
      document.getElementById("quote").scrollIntoView({ behavior: "smooth" });
    }
  }, [router]);

  return (
    <div>
      <Hero />
      <SilderMain />
      <DymanicUI />
    </div>
  );
};

export default Page;
