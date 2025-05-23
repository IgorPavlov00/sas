"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div id="about" className="pt-12 md:pt-24"></div>

      <section className="flex flex-col items-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full max-w-screen-xl"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-12">
            {/* Text Section */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Explore your city
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                Browse a curated selection of parties, workshops, festivals, concerts, and more, all tailored to your interests. Powerful search filters help you find exactly what you're looking for, while interactive maps guide you to the venue.
                <br /><br />
                For organizers, Foxspot provides the tools to create and manage events, sell tickets, and connect with attendees. Experience the future of event discovery with Foxspot.
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="w-full lg:w-1/2 relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
            >
              <div className="w-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1652641742436-1a5b9a18636b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="nature scene"
                  width={720}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              <motion.div
                className="absolute bg-white p-4 sm:p-6 flex flex-col sm:flex-row gap-4 rounded-2xl shadow-lg border top-4 left-4 sm:left-[-10%] sm:top-10 max-w-[90%] sm:max-w-[80%]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
              >
                <Image
                  src="/meter.svg"
                  alt="icon"
                  width={20}
                  height={158}
                  className="h-20 sm:h-full w-auto mx-auto sm:mx-0"
                />
                <div className="flex flex-col gap-4 text-center sm:text-left">
                  <div>
                    <p className="text-gray-400 text-sm">Our Values</p>
                    <p className="text-lg font-semibold">Sustainability</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Our Vision</p>
                    <h4 className="text-lg font-semibold whitespace-nowrap">
                      Inspiring Exploration
                    </h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
