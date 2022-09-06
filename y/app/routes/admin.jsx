import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getHinnat, updateHinta } from "~/api.server";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const values = Object.fromEntries(formData);
    await updateHinta(values);
  
    return null;
  };

export const loader = async () => {
  const hinnat = await getHinnat();
  return json(hinnat);
};

export default function Index() {
    const hinnat = useLoaderData()
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
  
         <h1>Hallinta</h1>
        <ul>
        
        {hinnat.map((hinta) => {
          const price = hinta.price;
          const name = hinta.name;
          return (
            <form method="POST">
            <label>
                {name} hinta:  
                <input type="text" name="price" defaultValue={price}/>
                <input type="hidden" name="name" value={name} />
            </label>
            <input type="submit" value="Submit" />
        </form> 
          );
        })}
        </ul>
      </div> 
    );
  }
  

  