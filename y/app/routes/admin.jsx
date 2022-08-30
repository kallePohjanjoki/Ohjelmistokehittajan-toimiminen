export default function Index() {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
  
         <h1>Hallinta</h1>
        <ul>
        
            
            
          
         
        <form>
            <label>
                Huoltoaseman nimi:  
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form> 
            



        <form>
            <label>
                bensan hinta:  
                <input type="text" name="price" />
            </label>
            <input type="submit" value="Submit" />
        </form>    
         
        </ul>
      </div> 
    );
  }
  