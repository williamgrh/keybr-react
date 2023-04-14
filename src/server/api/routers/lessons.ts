import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const lessonsRouter = createTRPCRouter({
  createLesson: privateProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.userId;

    // TODO: rate limit? Careful as users can complete lessons quickly

    // generate lesson
    const availableKeys = ctx.prisma.userKeyStats.findMany({
      where: {
        unlocked: true,
      },
    });

    // const lesson = await ctx.prisma.lesson.create({});
    return {};
  }),
});
