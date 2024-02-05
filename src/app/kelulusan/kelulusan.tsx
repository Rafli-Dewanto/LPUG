'use client'

import React, { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import useKelulusan from "@/hooks/use-kelulusan";
import Loading from "./loading";
import { Pagination, PaginationContent, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Kelulusan = () => {
  const PER_PAGE = 20;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageStr = searchParams.get('page');
  const { setQuery, kelulusan, totalPages } = useKelulusan();

  useEffect(() => {
    if (pageStr == null) {
      return router.replace("/kelulusan?page=1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageStr]); // ignore router as a dependency

  const page = Number(pageStr);

  // Calculate the starting index for a paginated list based on the current page number
  // and the number of items per page.
  // @param {number} page - The current page number
  // @param {number} PER_PAGE - The number of items per page
  // @returns {number} - The starting index for the paginated list
  // @example
  // page = 1, startIndex = 0
  // page = 2, startIndex = 20
  // page = 3, startIndex = 40
  const startIndex = (page - 1) * PER_PAGE;
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    router.replace('/kelulusan?page=1');
    setQuery(e.target.value);
  }

  function handlePrev() {
    if (Number(page) === 1) {
      return;
    }
    router.replace(`/kelulusan?page=${Number(page) - 1}`);
  }

  function handleNext() {
    if (Number(page) === totalPages) {
      return;
    } else {
      router.replace(`/kelulusan?page=${Number(page) + 1}`);
    }
  }

  return (
    <>
      <div className="my-10 flex w-full flex-col gap-x-4 gap-y-2 sm:flex-row">
        <Input
          onChange={handleChange}
          className="
          w-full border-input
          focus-visible:outline-purple-800
          sm:w-[50%]
          md:w-[40%]
          lg:w-[30%]
          "
          type="text"
          placeholder="Nama / NIM / Kursus / Periode"
        />
      </div>
      <Suspense fallback={<Loading />}>
        <Table className="overflow-x-scroll">
          <TableCaption>Kelulusan Peserta</TableCaption>
          <TableHeader>
            <TableRow className="bg-purple-800 hover:bg-purple-900">
              <TableHead className="text-white">No</TableHead>
              <TableHead className="text-white">Nama</TableHead>
              <TableHead className="text-white">NIM</TableHead>
              <TableHead className="text-white">Kursus</TableHead>
              <TableHead className="text-white">Periode</TableHead>
              <TableHead className="text-white">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {kelulusan.map((data, index) => (
              <TableRow
                className="even:bg-slate-50 even:bg-opacity-70 hover:bg-slate-100"
                key={data.id}
              >
                <TableCell className="font-medium">
                  {startIndex + index + 1}
                </TableCell>
                <TableCell>{data.nama}</TableCell>
                <TableCell>{data.nim}</TableCell>
                <TableCell>{data.kursus.toUpperCase()}</TableCell>
                <TableCell className="">{data.periode}</TableCell>
                <TableCell
                  className={clsx("font-semibold", {
                    "text-green-500": data.status.toLowerCase() === "lulus",
                    "text-red-500": data.status.toLowerCase() === "tidak_lulus",
                    "text-yellow-400":
                      data.status.toLowerCase() === "sedang_mengikuti",
                  })}
                >
                  {data.status.replace("_", " ").toUpperCase()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {totalPages > 0 ? (
          <div className='flex min-w-0 justify-center items-center w-full mx-auto py-6'>
            <Pagination className="border rounded-lg border-slate-200 max-w-[30%]">
              <PaginationContent>
                <PaginationPrevious onClick={handlePrev} />
                <PaginationLink>{page}</PaginationLink>

                {page + 1 <= totalPages && (
                  <PaginationLink href={`/kelulusan?page=${page + 1}`}>{page + 1}</PaginationLink>
                )}

                {page + 2 <= totalPages && (
                  <PaginationLink href={`/kelulusan?page=${page + 2}`}>{page + 2}</PaginationLink>
                )}

                <PaginationNext onClick={handleNext} />
              </PaginationContent>
            </Pagination>
          </div>
        ) : (
          <p className="my-2 flex items-center justify-center text-gray-600">
            No data found
          </p>
        )}
      </Suspense>
    </>
  )
}

export default Kelulusan