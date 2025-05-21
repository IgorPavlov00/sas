"use client";

import React, { useRef } from "react";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

// Assuming useScrollToOffset is a custom hook that returns a ref
import useScrollToOffset from "./hooks/hook"; // Adjust the path as needed

const GetApp = () => {
  // Explicitly type the ref as RefObject<HTMLDivElement>
  const [appRef] = useScrollToOffset<HTMLDivElement>(80, 0.5); // Adjust 80px as needed

  return (
    <>
      {/* Assign the ref to the div */}
      <div ref={appRef} id="app"></div>

      <section className="flexCenter w-full flex-col pb-[100px]" id="app">
        <div className="get-app">
          <motion.div
            className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h2
              className="bold-40 lg:bold-64 xl:max-w-[320px] text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            >
              Get for free now!
            </motion.h2>
            <motion.p
              className="regular-16 text-gray-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            >
              Available for Android and soon for iOS
            </motion.p>
              <motion.div
            className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
          >
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              className="w-[200px] rounded-full px-6 py-3 text-black bg-white hover:bg-gray-100 transition flex items-center justify-center gap-2"
            />
          
            <a
              href="https://play.google.com/store/apps/details?id=com.foxspot.myapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="button"
                title="Play Store"
                icon="/android.svg"
                variant="btn_dark_green_outline"
                className="w-[200px] rounded-full px-6 py-3 border border-green-700 text-green-700 hover:bg-green-50 transition flex items-center justify-center gap-2"
              />
            </a>
          </motion.div>


          </motion.div>

          <motion.div
            className="flex flex-1 items-center justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image src="/phone3.png" alt="phones" width={350} height={570} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GetApp;
