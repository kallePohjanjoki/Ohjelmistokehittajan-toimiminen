import { readFile } from "node:fs/promises";



export const updateHinta = async (rivi) => {
  const hinnatJSON = await readFile("data/hinnat.json");
  const hinnat = JSON.parse(hinnatJSON);
  const muokattavaRivi = hinnat[rivi.name];
console.log(rivi, muokattavaRivi)
}



export const getHinnat = async () => {
  const hinnat = await readFile("data/hinnat.json");
  return JSON.parse(hinnat);
};