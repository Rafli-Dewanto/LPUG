import type { Kelulusan } from "@prisma/client";
import { useDebugValue, useEffect, useState } from "react";

export default function useKelulusan() {
    const [query, setQuery] = useState("");
    const [kelulusan, setKelulusan] = useState<Kelulusan[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/kelulusan?query=${query}`);
                const result = await response.json();
                setKelulusan(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData()
    }, [query]);

    useDebugValue(kelulusan)

    return { setQuery, kelulusan }
}