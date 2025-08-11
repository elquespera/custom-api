import { Hono } from "hono";

export const statusRoute = new Hono();

statusRoute.get("", async (c) => {
  return c.json({
    status: "running",
  });
});
