"use client";

import { navigationData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "./ui/skeleton";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      id="#home"
      className="body-font sticky top-0 z-20 w-full bg-white pt-4 font-bold text-gray-600 md:px-16 lg:px-8"
    >
      {/* Large screen nav */}
      <nav className="hidden justify-between bg-white xl:flex">
        <section className="pl-12 pt-4">
          <Suspense
            fallback={<Skeleton className="h-[24rem] w-[64rem] rounded-lg" />}
          >
            <Image
              alt="lpug"
              src={"https://lpug.gunadarma.ac.id/imagelanding/LPUG_FIX.png"}
              width={208}
              height={104}
            />
          </Suspense>
        </section>

        <section className="flex items-center justify-center gap-x-6 px-8">
          <ul className="flex items-center justify-center gap-x-6">
            {navigationData.map((data, index) => (
              <React.Fragment key={index}>
                <li className="text-base font-bold text-gray-800">
                  <Link className="text-gray-600 hover:text-gray-900" href={data.hash}>
                    {data.name}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
          <Link href={"https://ecourse-lpug.gunadarma.ac.id/login/index.php"}>
            <Button className="group flex h-11 w-[6rem] items-center justify-center rounded-lg border-0 bg-purple-800 text-white transition-all hover:scale-105 hover:bg-purple-950 focus:outline-none active:scale-95">
              Login
            </Button>
          </Link>
        </section>
      </nav>


      {/* Responsive */}
      <nav>
        <div className="flex items-center justify-between xl:hidden">
          <section className="pl-12 pt-4">
            <Image
              alt="lpug"
              src={"https://lpug.gunadarma.ac.id/imagelanding/LPUG_FIX.png"}
              width={208}
              height={104}
            />
          </section>

          <motion.div
            variants={{
              "360": {
                rotate: 360
              }
            }}
            whileHover={'360'}
            onClick={() => setIsActive(!isActive)}
            className="sm:mx-20 mx-10 cursor-pointer bg-purple-800 rounded-xl px-4 py-4 mb-3 sm:mb-0"
          >
            <RxHamburgerMenu className='text-white' />
          </motion.div>
        </div>
        <AnimatePresence>
          {isActive ? (
            <motion.div
              transition={{ duration: 0.4 }}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -900 }}
              className="flex flex-col items-center justify-center gap-y-4 pb-8 xl:hidden">
              <ul className="">
                {navigationData.map((data, index) => (
                  <React.Fragment key={index}>
                    <li className="text-center text-base font-bold leading-9 text-gray-800 hover:text-gray-900">
                      <Link href={data.hash}>{data.name}</Link>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
              <Link href={"https://ecourse-lpug.gunadarma.ac.id/login/index.php"}>
                <Button className="group flex h-11 w-[6rem] items-center justify-center rounded-lg border-0 bg-purple-800 text-white transition-all hover:scale-105 hover:bg-purple-950 focus:outline-none active:scale-95">
                  Login
                </Button>
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>

    </header>
  );
}
