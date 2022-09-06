import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getHinnat } from "~/api.server";



export const loader = async () => {
  const hinnat = await getHinnat();
  return json(hinnat);
};

export default function Index() {
  const hinnat = useLoaderData()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

       <h1>Welcome to Remix</h1>

       <ul>
        {hinnat.map((hinta) => {
          const price = hinta.price;
          const name = hinta.name;
          return <li key={name}>{name} {price}</li>;
        })}
      </ul>
     
    </div> 
  );
}
