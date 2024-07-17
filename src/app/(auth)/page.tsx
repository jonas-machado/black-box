import LoginForm from "@/components/forms/loginForm";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";

export default function page() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.15] bg-grid-black/[0.2] relative flex items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 h-screen"
        fill="#eadff9"
      />

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="bg-black bg-opacity-20 rounded-lg p-4 backdrop-blur-sm shadow-[0px_0px_100px_20px] shadow-black w-[25rem] ">
        <TextGenerateEffect words="Seja bem-vindo! Loge-se" className="mb-4" />
        <LoginForm />
      </div>
    </div>
  );
}
