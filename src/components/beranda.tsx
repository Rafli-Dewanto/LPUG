"use client";

import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

function Beranda() {
  return (
    <motion.section
      transition={{ duration: 1.2 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex scroll-mt-80 flex-col-reverse items-center justify-center px-6 sm:mt-20 sm:scroll-mt-40 md:px-14 lg:flex-row lg:flex-nowrap lg:px-28"
      id="beranda"
    >
      {/* Left container */}
      <div
        id="beranda"
        className="grid grid-cols-1 items-center justify-center"
      >
        <h1 className="text-left text-3xl font-semibold text-black sm:text-5xl">
          Lembaga Pengembangan
        </h1>
        <h2
          className="bg-gradient-to-r from-purple-800 via-[#FF8136] to-[#ff6d18] 
        bg-clip-text text-left text-3xl font-semibold text-transparent sm:text-5xl"
        >
          Universitas Gunadarma
        </h2>

        <p className="mb-6 mt-9 w-full text-sm tracking-wider text-gray-600 lg:mb-14 lg:w-2/3 lg:text-xl">
          Lembaga Pengembangan Universitas Gunadarma merupakan unit struktural
          yang berada di tingkat universitas.
        </p>
        <Link href={'http://ugpedia.gunadarma.ac.id/content/141/1199/id/lembaga-pengembangan-universitas-gunadarma.html'}>
          <Button className="group flex h-11 w-40 items-center justify-center rounded-lg border-0 bg-purple-800 text-white transition-all hover:scale-105 hover:bg-purple-950 focus:outline-none active:scale-95">
            Lebih Lanjut
            <AiOutlineArrowRight className="ml-3 h-4 w-4 transition-all group-hover:translate-x-1 group-active:-translate-x-1" />
          </Button>
        </Link>
      </div>

      <Image
        width={200}
        height={200}
        className="h-auto w-full max-w-[30rem]"
        src="/image/slider.png"
        alt="slider"
      />
    </motion.section>
  );
}

export default Beranda;
