import { User } from "@prisma/client";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    const isEmailVerified = currentUser.emailVerified
      ? new Date(currentUser.emailVerified?.toISOString())
      : null;

    return {
      ...currentUser,
      createdAt: new Date(currentUser.createdAt.toISOString()),
      updatedAt: new Date(currentUser.updatedAt.toISOString()),
      emailVerified: isEmailVerified,
    };
  } catch (error: any) {
    return null;
  }
}
