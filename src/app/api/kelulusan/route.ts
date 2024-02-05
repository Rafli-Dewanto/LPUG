import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// dynamic API nextjs -> https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
  const userQuery = request.nextUrl.searchParams.get("query");
  const pageQuery = request.nextUrl.searchParams.get("page");
  const page = Number(pageQuery);
  const perPage = 20;

  if (isNaN(page) || page < 1) {
    return NextResponse.json(
      { error: "Invalid page number or page query was not provided." },
      { status: 400 },
    );
  }

  if (!userQuery) {
    try {
      const totalRows = await prisma.kelulusan.count();
      const totalPages = Math.ceil(totalRows / perPage);
      const data = await prisma.kelulusan.findMany({
        orderBy: [
          {
            periode: "desc",
          },
          {
            kursus: "asc",
          },
        ],
        take: perPage,
        skip: (page - 1) * perPage,
      });
      return NextResponse.json({
        status: "OK",
        data,
        metadata: {
          totalPages,
        },
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "An error occurred while fetching data." },
        { status: 500 },
      );
    }
  }

  try {
    const userQueryStr = String(userQuery);
    const periodeQuery = parseInt(userQueryStr);
    const isPeriode = !isNaN(periodeQuery) && userQueryStr.length !== 8;

    let data;
    let whereCondition;

    if (isPeriode) {
      whereCondition = {
        periode: periodeQuery,
      };
    } else {
      whereCondition = {
        OR: [
          {
            nama: {
              contains: userQueryStr,
            },
          },
          {
            nim: {
              contains: userQueryStr,
            },
          },
          {
            kursus: {
              contains: userQueryStr,
            },
          },
        ],
      };
    }

    const totalRows = await prisma.kelulusan.count({
      where: whereCondition,
    });

    const totalPages = Math.ceil(totalRows / perPage);

    data = await prisma.kelulusan.findMany({
      where: whereCondition,
      orderBy: [
        {
          periode: "desc",
        },
        {
          kursus: "asc",
        },
      ],
      take: perPage,
      skip: (page - 1) * perPage,
    });

    return NextResponse.json({
      status: "OK",
      data,
      metadata: {
        totalPages,
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching data." },
      { status: 500 },
    );
  }
}
