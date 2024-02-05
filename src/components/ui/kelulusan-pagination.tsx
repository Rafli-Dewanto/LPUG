"use client";

import { pageAtom, totalPagesAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Separator } from "./separator";

export default function KelulusanPagination() {
  const [page, setPage] = useAtom(pageAtom);
  const [totalPages] = useAtom(totalPagesAtom);

  function handlePrevClick() {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  }

  function handleNextClick() {
    if (page === totalPages) {
      return;
    } else {
      setPage(page + 1);
      window.scrollTo(0, 0);
    }
  }

  return (
    <section className="flex items-center justify-center space-x-4 py-4">
      <div className="flex h-5 items-center space-x-4 text-sm">
        <FiChevronLeft
          className={`
            h-8 w-8 cursor-pointer
            text-slate-500
            transition-all
            hover:text-purple-600
            ${page === 1 ? "invisible" : "block"}
            `}
          onClick={handlePrevClick}
        />
        <Separator orientation="vertical" />
        <p className="px-6">
          {page} of {totalPages}
        </p>
        <Separator orientation="vertical" />
        <FiChevronRight
          className={`
              h-8 w-8
              cursor-pointer
              text-slate-500
              transition-all
              hover:text-purple-600
              ${page === totalPages ? "invisible" : "block"}
              `}
          onClick={handleNextClick}
        />
      </div>
    </section>
  );
}
