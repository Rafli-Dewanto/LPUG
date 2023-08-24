"use client";

import { navigationData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "./ui/skeleton";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      id="#home"
      className="body-font sticky top-0 z-20 w-full bg-white pt-4 font-bold text-gray-600 md:px-16 lg:px-8"
    >
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

        {/* Large screen nav */}
        <section className="flex items-center justify-center gap-x-6 px-8">
          <ul className="flex items-center justify-center gap-x-6">
            {navigationData.map((data, index) => (
              <React.Fragment key={index}>
                <li className="text-base font-bold text-gray-800">
                  <Link className="text-gray-600" href={data.hash}>
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
      <nav className="flex items-center justify-between xl:hidden">
        <section className="pl-12 pt-4">
          <Image
            alt="lpug"
            src={"https://lpug.gunadarma.ac.id/imagelanding/LPUG_FIX.png"}
            width={208}
            height={104}
          />
        </section>

        <div
          onClick={() => setIsActive(!isActive)}
          className="mx-20 cursor-pointer"
        >
          <RxHamburgerMenu />
        </div>
      </nav>

      {isActive ? (
        <div className="flex flex-col items-center justify-center gap-y-4 pb-8">
          <ul className="">
            {navigationData.map((data, index) => (
              <React.Fragment key={index}>
                <li className="text-center text-base font-bold leading-9 text-gray-800">
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
        </div>
      ) : null}
    </header>
  );
}
