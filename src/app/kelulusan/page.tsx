'use client'

import React from 'react';
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
import clsx from 'clsx';
import useKelulusan from '@/hooks/use-kelulusan';

export default function Page() {
    const { setQuery, kelulusan } = useKelulusan()

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
                    <TableRow className='bg-purple-800 hover:bg-purple-900'>
                        <TableHead className='text-white'>No</TableHead>
                        <TableHead className='text-white'>Nama</TableHead>
                        <TableHead className='text-white'>NIM</TableHead>
                        <TableHead className='text-white'>Kursus</TableHead>
                        <TableHead className="text-white">Periode</TableHead>
                        <TableHead className="text-white">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {kelulusan.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{item.nama}</TableCell>
                            <TableCell>{item.nim}</TableCell>
                            <TableCell>{item.kursus.toUpperCase()}</TableCell>
                            <TableCell className="">{item.periode}</TableCell>
                            <TableCell
                                className={clsx("font-semibold", {
                                    "text-green-500": item.status.toLowerCase() === "lulus",
                                    "text-red-500": item.status.toLowerCase() === "tidak_lulus",
                                    "text-yellow-400": item.status.toLowerCase() === "sedang_mengikuti"
                                })}>
                                {item.status.replace("_", " ").toUpperCase()}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    );
}
