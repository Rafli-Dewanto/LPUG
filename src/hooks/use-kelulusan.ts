"use client";

import { pageAtom, totalPagesAtom } from "@/lib/atom";
import type { Kelulusan } from "@prisma/client";
import { useAtom } from "jotai";
import { useCallback, useDebugValue, useEffect, useState } from "react";

export default function useKelulusan() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useAtom(pageAtom);
  const [isLoading, setIsLoading] = useState(false);
  // const [totalPages, setTotalPages] = useAtom(totalPagesAtom);
  const [totalPages, setTotalPages] = useState(1);
  const [kelulusan, setKelulusan] = useState<Kelulusan[]>([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/kelulusan?query=${query}&page=${page}`,
      );
      const result = await response.json();

      setKelulusan(result.data);
      setTotalPages(result.metadata.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [query, page, setTotalPages]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useDebugValue(kelulusan);

  return {
    setQuery,
    kelulusan,
    totalPages,
    isLoading,
  };
}
