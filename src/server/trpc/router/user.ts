import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  signIn: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async (options) => {
      return {};
    }),
});
