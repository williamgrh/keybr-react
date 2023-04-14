import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const defaultKeys = [
  { key: "E", unlocked: true },
  { key: "N", unlocked: true },
  { key: "I", unlocked: true },
  { key: "T", unlocked: true },
  { key: "R", unlocked: true },
  { key: "L", unlocked: true },
  { key: "S" },
  { key: "A" },
  { key: "U" },
  { key: "O" },
  { key: "D" },
  { key: "Y" },
  { key: "C" },
  { key: "H" },
  { key: "G" },
  { key: "M" },
  { key: "P" },
  { key: "B" },
  { key: "K" },
  { key: "V" },
  { key: "W" },
  { key: "F" },
  { key: "Z" },
  { key: "X" },
  { key: "Q" },
  { key: "J" },
];

export const usersRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const userKeys = await ctx.prisma.userKeyStats.findMany({
        where: {
          userId: input.id,
        },
      });

      if (!userKeys) throw new TRPCError({ code: "NOT_FOUND" });

      return {
        keys: userKeys,
      };
    }),

  create: privateProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.userId;

    const userKeys = await ctx.prisma.userKeyStats.findMany({
      where: {
        userId: userId,
      },
    });

    if (userKeys) throw new TRPCError({ code: "CONFLICT" });

    const createdUserKeys = await ctx.prisma.userKeyStats.createMany({
      data: defaultKeys.map((key) => ({ ...key, userId })),
    });

    return {
      keys: createdUserKeys,
    };
  }),
});
