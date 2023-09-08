import type { Kelulusan } from "@prisma/client";
import { useCallback, useDebugValue, useEffect, useState } from "react";

export default function useKelulusan() {
  const [query, setQuery] = useState("");
  const [kelulusan, setKelulusan] = useState<Kelulusan[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`/api/kelulusan?query=${query}`);
      const result = await response.json();
      setKelulusan(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [query])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useDebugValue(kelulusan);

  return { setQuery, kelulusan };
}
