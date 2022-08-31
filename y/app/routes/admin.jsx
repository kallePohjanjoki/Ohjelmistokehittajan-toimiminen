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
  
         <h1>Hallinta</h1>
        <ul>
        
        


        <form>
            <label>
                98 hinta:  
                <input type="text" name="price" defaultValue={hinnat[0].price}/>
            </label>
            <input type="submit" value="Submit" />
        </form>    


        <form>
            <label>
                95 hinta:  
                <input type="text" name="price" />
            </label>
            <input type="submit" value="Submit" />
        </form>  



        <form>
            <label>
                dieselin hinta:  
                <input type="text" name="price" />
            </label>
            <input type="submit" value="Submit" />
        </form>  
         
        </ul>
      </div> 
    );
  }
  

  