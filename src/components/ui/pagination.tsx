"use client";

import { pageAtom, totalPagesAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export default function Pagination() {
  const [page, setPage] = useAtom(pageAtom);
  const [totalPages, setTotalPages] = useAtom(totalPagesAtom);

  function handlePrevClick() {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
    }
  }

  function handleNextClick() {
    if (page === totalPages) {
      return;
    } else {
      setPage(page + 1);
    }
  }

  return (
    <section className="flex items-center justify-center py-4">
      <FiChevronLeft
        className={`h-8 w-8 cursor-pointer transition-all hover:text-purple-600`}
        onClick={handlePrevClick}
      />
      <p className="px-6">
        {page} of {totalPages}
      </p>
      <FiChevronRight
        className={`h-8 w-8 cursor-pointer transition-all hover:text-purple-600`}
        onClick={handleNextClick}
      />
    </section>
  );
}
