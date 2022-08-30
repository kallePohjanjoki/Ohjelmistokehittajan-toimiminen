export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

       <h1>Hallinta</h1>

       <input type="text" id="myText" value="Some text...">

        <p>Click the "Try it" button to get the text in the text field.</p>

        <button onclick="myFunction()">Try it</button>

        <p id="demo"></p>

        <script>
        function myFunction() {
        var x = document.getElementById("myText").value;
        document.getElementById("demo").innerHTML = x;
        }
        </script>
      
    </div> 
  );
}
