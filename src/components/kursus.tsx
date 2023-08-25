"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { kursus } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (idx: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25 * idx,
      duration: 0.9,
    },
  }),
};

function Kursus() {
  return (
    <section className="scroll-mt-24 overflow-hidden text-gray-600" id="kursus">
      <div>
        <div className="flex flex-row justify-between">
          <div className="mx-10 mb-4 mt-14 flex flex-col lg:mx-24 lg:mb-8 lg:mt-24">
            <h1 className="mb-1 text-xl font-bold lg:mb-4 lg:text-3xl">
              Kursus
            </h1>
            <span className="ml-4 h-1 w-7 rounded-none bg-orange-100 lg:ml-6 lg:h-2 lg:w-14"></span>
          </div>
          <div className="flex flex-col">
            <Image
              width={100}
              height={100}
              src="/image/vector2.png"
              className="right-0 h-auto w-12 lg:w-36"
              alt="vector flower"
            />
          </div>
        </div>

        {/* card kursus */}
        <section className="grid grid-cols-1 gap-x-6 gap-y-5 px-16 py-4 lg:mx-8 lg:grid-cols-3">
          {kursus.map((k, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={"initial"}
                whileInView={"animate"}
                variants={fadeInAnimationVariants}
                custom={idx}
                viewport={{
                  once: true,
                }}
              >
                <div className="flex min-h-[12rem] sm:min-h-[16rem] flex-col items-center justify-center rounded-xl bg-white px-6 py-4 sm:py-8 shadow-lg transition-all duration-200 hover:scale-110">
                  <Image
                    width={200}
                    height={200}
                    className="h-24 object-contain"
                    src={k.img}
                    alt="logo kursus"
                  />
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </section>

        <div className="flex flex-col">
          <Image
            width={100}
            height={100}
            src="/image/vector3.png"
            className="left-0 h-auto w-11 lg:w-28"
            alt="vector flower"
          />
        </div>
      </div>
    </section>
  );
}

export default Kursus;
