import { Hono } from "hono";
import { logger } from "hono/logger";
import { statusRoute } from "./statusRoute";
import { checkWordRoute, randomWordRoute } from "./wordsRoute";

const app = new Hono();

app.use(logger());

app.route("/api/status", statusRoute);

//Wordle
app.route("/api/words/check", checkWordRoute);
app.route("/api/words/random", randomWordRoute);

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
