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
                    {kelulusan.map((data, index) => (
                        <TableRow className='even:bg-slate-50 even:bg-opacity-70 hover:bg-slate-100' key={data.id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{data.nama}</TableCell>
                            <TableCell>{data.nim}</TableCell>
                            <TableCell>{data.kursus.toUpperCase()}</TableCell>
                            <TableCell className="">{data.periode}</TableCell>
                            <TableCell
                                className={clsx("font-semibold", {
                                    "text-green-500": data.status.toLowerCase() === "lulus",
                                    "text-red-500": data.status.toLowerCase() === "tidak_lulus",
                                    "text-yellow-400": data.status.toLowerCase() === "sedang_mengikuti"
                                })}>
                                {data.status.replace("_", " ").toUpperCase()}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    );
}
