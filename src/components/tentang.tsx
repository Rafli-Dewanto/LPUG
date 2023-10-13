"use client";

import React, { useState } from "react";
import { about } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

const fadeInFromLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.9,
    },
  },
};

const fadeInFromRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.9,
    },
  },
};

const Tentang = () => {
  const [page, setPage] = useState(0);

  function handleSetPage() {
    if (page === 0) {
      setPage(1);
    } else {
      setPage(0);
    }
  }

  return (
    <section
      className="body-font scroll-mt-96 overflow-hidden text-gray-600 lg:scroll-mt-24"
      id="tentang"
    >
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <Image
              width={100}
              height={100}
              src="/image/vector4.png"
              className="left-0 h-auto w-11 lg:w-28"
              alt="vector flower"
            />
          </div>
          <div className="mx-0 mb-8 mt-14 flex flex-col lg:mx-8 lg:mt-24">
            <h1 className="mb-1 text-xl font-bold lg:mb-4 lg:text-3xl">
              Tentang
            </h1>
            <span className="mx-1 h-1 w-28 bg-[#FDC89E] lg:h-2 lg:w-36"></span>
          </div>
        </div>
        <div className="mx-8 mb-0 flex flex-wrap justify-between lg:mx-24 lg:mb-10">
          <motion.div
            initial={"initial"}
            whileInView={"animate"}
            variants={fadeInFromLeft}
            viewport={{
              once: true,
            }}
            className="flex w-full items-center justify-center lg:-mx-14 lg:w-1/2"
          >
            <Image
              width={624}
              height={901}
              className="mb-6 h-80 w-auto object-cover object-left lg:h-auto lg:w-full"
              src="/image/tentang.png"
              alt="content"
            />
          </motion.div>

          <motion.div
            initial={"initial"}
            whileInView={"animate"}
            variants={fadeInFromRight}
            viewport={{
              once: true,
            }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-xl border-2 border-gray-100 bg-white p-4 lg:p-12">
              <p className="text-left text-sm leading-6 tracking-wider sm:leading-3 lg:text-xl">
                {about[page]}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <AiFillLeftCircle
                  onClick={handleSetPage}
                  className={`h-6 w-6`}
                />
                <AiFillRightCircle
                  onClick={handleSetPage}
                  className={`h-6 w-6`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
