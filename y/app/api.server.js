import { readFile, writeFile } from "node:fs/promises";



export const updateHinta = async (rivi) => {
  const hinnatJSON = await readFile("data/hinnat.json");
  const hinnat = JSON.parse(hinnatJSON);
  const muokattavaRivi = hinnat.find(hinta => hinta.name === rivi.name);

  muokattavaRivi.price = Number(rivi.price);
  
  const pävitettyhinnatJSON = JSON.stringify(hinnat, null, 2);
  await writeFile("data/hinnat.json", pävitettyhinnatJSON);
}



export const getHinnat = async () => {
  const hinnat = await readFile("data/hinnat.json");
  return JSON.parse(hinnat);
};