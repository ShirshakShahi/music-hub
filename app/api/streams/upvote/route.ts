import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const UpvoteSchema = z.object({
  streamId: z.string(),
});

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json(
      {
        message: "Not authenticated",
      },
      {
        status: 403,
      }
    );
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return NextResponse.json(
      {
        message: "Not authenticated",
      },
      {
        status: 403,
      }
    );
  }
  try {
    const data = UpvoteSchema.parse(await req.json());

    await prismaClient.upvote.create({
      data: {
        userId: user.id,
        streamId: data.streamId,
      },
    });
  } catch (e) {
    return NextResponse.json(
      {
        message: "You cannot upvote twice",
      },
      {
        status: 403,
      }
    );
  }
}
