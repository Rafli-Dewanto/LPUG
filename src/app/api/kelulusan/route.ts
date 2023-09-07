import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const userQuery = request.nextUrl.searchParams.get("query");
  if (!userQuery) {
    return NextResponse.json({
      status: "OK",
      data: []
    })
  }

  const periodeQuery = Number(userQuery);
  // Jika user query bilangan
  if (!isNaN(periodeQuery)) {
    try {
      const data = await prisma.kelulusan.findMany({
        where: {
          periode: periodeQuery,
        },
      });
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
  } else {
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
            {
              kursus: {
                contains: userQuery,
              },
            },
          ],
        },
      });

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
}
