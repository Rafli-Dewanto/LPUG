"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Alur() {
  return (
    <motion.section
      transition={{ duration: 1.2, delay: 0.4 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="body-font scroll-mt-24 overflow-hidden text-gray-600"
      id="alur"
    >
      <div id="alur" className="flex flex-col">
        <div className="mx-10 mb-8 mt-24 flex flex-col lg:mx-24">
          <h1 className="mb-1 text-xl font-bold lg:mb-4 lg:text-3xl">
            Alur Pendaftaran
          </h1>
          <span className="ml-6 h-1 w-28 rounded-none bg-orange-100 lg:ml-14 lg:h-2"></span>
        </div>

        {/* alur */}
        <div className="flex-cols relative flex flex-wrap items-center justify-center px-8 sm:flex-row">
          <figure className="absolute left-6 hidden xl:block">
            <Image
              className="right-0 h-auto w-12 lg:w-36"
              src="/image/vector5.svg"
              alt="dots"
              width={100}
              height={100}
            />
          </figure>

          <Image
            className=""
            src="/image/alur.png"
            alt=""
            width={900}
            height={900}
          />

          <figure className="absolute bottom-0 right-0 h-auto w-12 lg:w-36">
            <Image
              src="/image/vector1.png"
              width={144}
              height={144}
              alt="bunga"
            />
          </figure>
        </div>
      </div>
    </motion.section>
  );
}

export default Alur;
