import { useEffect, useState } from "react";

export default function DisplayMissiles() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [speed, setSpeed] = useState("");
  const [intercepts, setIntercepts] = useState("");
  const [price, setPrice] = useState("");
  const [missiles, setMissiles] = useState([])
  const getMissiles = async (
    name: string,
    description: string,
    speed: number,
    intercepts: string[],
    price: number
  ) => {
    useEffect(() => {
      (async ()=>{
        try {
            const response = await fetch("http://localhost:3000/data", {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, description, speed, intercepts, price}),
            });
      
            if (!response.ok) {
              return false;
            }
      
            const missiles = await response.json();
            
            return true;
          } catch (error) {
            console.error("Get failed");
            return false;
          }})()
        

    }, [])}

  return (
    <>

      <div className="form-container">
      <div className="App">
        {}
    <table>
        <tr>
            <th>Rocket</th>
            <th>Time to Hit</th>
            <th>Price</th>
            <th>Buy</th>
        </tr>
        <tr>
            <td>{}</td>
            <td>19</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
        </tr>
        <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
        </tr>
    </table>
</div>
      </div>
    </>
  );
}
