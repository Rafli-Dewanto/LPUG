"use client";

import { pageAtom, totalPagesAtom } from "@/lib/atom";
import type { Kelulusan } from "@prisma/client";
import { useAtom } from "jotai";
import { useCallback, useDebugValue, useEffect, useState } from "react";

export default function useKelulusan() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useAtom(pageAtom);
  const [totalPages, setTotalPages] = useAtom(totalPagesAtom);
  const [kelulusan, setKelulusan] = useState<Kelulusan[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/kelulusan?query=${query}&page=${page}`,
      );
      const result = await response.json();

      setKelulusan(result.data);
      setTotalPages(result.metadata.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [query, page, setTotalPages]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useDebugValue(kelulusan);

  return { setQuery, kelulusan, totalPages };
}
