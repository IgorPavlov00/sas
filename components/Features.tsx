"use client";

import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div id="features">
        <br />
      </div>
      <section
        className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
        id="features"
      >
        <div className="max-container padding-container relative w-full flex justify-end">
          <motion.div
            className="flex flex-1 lg:min-h-[800px] lg:ml-10 xl:ml-16" // ✅ Slight right shift
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Image
                src="/iphone.png"
                alt="phone"
                width={290}
                height={1000}
                className="w-auto h-auto max-w-full"
              />
            </motion.div>
          </motion.div>

          <div className="z-20 flex w-full flex-col lg:w-[60%]">
            <div className="relative">
              <motion.h2
                className="bold-40 lg:bold-64"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Our Features
              </motion.h2>
            </div>
            <motion.ul
              className="grid gap-10 md:grid-cols-2 lg:gap-10"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {FEATURES.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                  variants={itemVariants}
                />
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({
  title,
  icon,
  description,
  variants,
}: FeatureItem & { variants: any }) => {
  return (
    <motion.li
      className="flex w-full flex-1 flex-col items-start"
      variants={variants}
    >
      <div className="rounded">
        <Image src={icon} alt={title} width={48} height={38} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </motion.li>
  );
};

export default Features;
