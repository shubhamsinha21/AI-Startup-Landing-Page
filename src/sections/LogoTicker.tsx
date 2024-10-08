"use client";

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoTicker() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams </h2>
          </div>

          {/* flex-none -> provides as much space as logo needs */}
          <div
            className="flex flex-1 overflow-hidden 
          [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
          >
            <motion.div
              initial={{
                translateX: "-50%",
              }}
              animate={{
                translateX: "0",
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[
                acmeLogo,
                pulseLogo,
                apexLogo,
                celestialLogo,
                echoLogo,
                quantumLogo,
                acmeLogo,
                pulseLogo,
                apexLogo,
                celestialLogo,
                echoLogo,
                quantumLogo,
              ].map((logo, index) => (
                <Image
                  src={logo.src}
                  alt={logo.src}
                  key={index}
                  width={100}
                  height={24}
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
