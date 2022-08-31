import { readFile } from "node:fs/promises";

export const getHinnat = async () => {
  const hinnat = await readFile("data/hinnat.json");
  return JSON.parse(hinnat);
};