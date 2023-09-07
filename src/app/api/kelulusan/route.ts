import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const userQuery = request.nextUrl.searchParams.get("query");
  if (!userQuery) {
    return NextResponse.json(
      { error: "Query parameter 'query' is required." },
      { status: 400 }
    );
  }

  try {
    const data = await prisma.kelulusan.findMany({
      where: {
        OR: [
          {
            nama: {
              contains: userQuery,
            },
          },
          {
            nim: {
              contains: userQuery,
            },
          },
        ],
      },
    });

    const numericQuery = Number(userQuery);

    if (!isNaN(numericQuery)) {
      const numericData = await prisma.kelulusan.findMany({
        where: {
          periode: numericQuery,
        },
      });

      data.push(...numericData);
    }

    return NextResponse.json({
      status: "OK",
      data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching data." },
      { status: 500 }
    );
  }
}
