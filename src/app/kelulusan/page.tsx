'use client'

import React, { useState, useEffect } from 'react';
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
import type { Kelulusan } from '@prisma/client';

export default function Page() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState<Kelulusan[]>([]);
    const [defaultData, setDefaultData] = useState<Kelulusan[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (query !== "") {
                    const response = await fetch(`/api/kelulusan?query=${query}`);
                    const result = await response.json();
                    setData(result.data);
                } else {
                    const response = await fetch(`/api/filterUser?query=65`);
                    const result = await response.json();
                    setDefaultData(result.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData()
    }, [query]);

    return (
        <section className='min-h-screen px-12 bg-white'>
            <h1 className='text-2xl font-bold'>PENCARIAN DATA KELULUSAN KURSUS</h1>
            <div className='flex flex-col mt-10 mb-10 sm:flex-row gap-x-4 gap-y-2'>
                <Input
                    onChange={(e) => setQuery(e.target.value)}
                    className='w-full sm:w-[30%] border-input focus-visible:outline-purple-800' type="text" placeholder="Nama / NIM / Periode" />
            </div>
            <Table className='overflow-x-scroll'>
                <TableCaption>Kelulusan Peserta</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Nama</TableHead>
                        <TableHead>NIM</TableHead>
                        <TableHead className="text-right">Periode</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {query && query.length > 0 ?  (
                        data.map((item, index) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell>{item.nama}</TableCell>
                                <TableCell>{item.nim}</TableCell>
                                <TableCell className="text-right">{item.periode}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        defaultData.map((item, index) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell>{item.nama}</TableCell>
                                <TableCell>{item.nim}</TableCell>
                                <TableCell className="text-right">{item.periode}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </section>
    );
}
