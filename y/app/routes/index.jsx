import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getHinnat } from "~/api.server";



export const loader = async () => {
  const hinnat = await getHinnat();
  return json(hinnat));
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

       <h1>Welcome to Remix</h1>

       <ul>
        {ostoslista.map((ostos, index) => {
          const nimi = ostos.nimi;
          if (ostos.hankittu) {
            return (
              <li key={index}>
                <s>{nimi}</s>
              </li>
            );
          }
          return <li key={index}>{nimi}</li>;
        })}
      </ul>
     
    </div> 
  );
}
