import { lessonsRouter } from "~/server/api/routers/lessons";
import { usersRouter } from "~/server/api/routers/users";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  lessons: lessonsRouter,
  users: usersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
