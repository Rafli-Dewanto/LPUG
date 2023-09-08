import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const userQuery = request.nextUrl.searchParams.get("query");
  if (!userQuery) {
    return NextResponse.json({
      status: "OK",
      data: [],
    });
  }

  try {
    let data;
    const periodeQuery = parseInt(userQuery);
    
    if (!isNaN(periodeQuery) && String(periodeQuery).length !== 8) {
      data = await prisma.kelulusan.findMany({
        where: {
          periode: periodeQuery
        },
      });
    } else {
      data = await prisma.kelulusan.findMany({
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
            {
              kursus: {
                contains: userQuery,
              },
            },
          ],
        },
      });
    }

    return NextResponse.json({
      status: "OK",
      data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching data." },
      { status: 500 },
    );
  }
}
