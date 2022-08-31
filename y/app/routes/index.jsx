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
        {hinnat.map((ostos, index) => {
          const name = ostos.name;
          const price = ostos.price;
          return <li key={index}>{name} {price}</li>;
        })}
      </ul>
     
    </div> 
  );
}
