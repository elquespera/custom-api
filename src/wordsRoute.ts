import { Hono } from "hono";

export const checkWordRoute = new Hono();
export const randomWordRoute = new Hono();

const file = Bun.file("words.json");
const words: Array<string> = await file.json();

checkWordRoute.get("", async (c) => {
  const word = c.req.query("word");

  if (!word) {
    c.status(400);
    return c.json({
      error: "The word must be defined",
    });
  }

  if (word.length !== 5) {
    c.status(400);
    return c.json({
      error: "The word must be 5 letters long",
    });
  }

  const isWord = words.includes(word.toLowerCase());

  return c.json({
    word,
    isWord,
  });
});

randomWordRoute.get("", async (c) => {
  const word = words[Math.floor(Math.random() * words.length)];
  return c.json({
    word,
  });
});
