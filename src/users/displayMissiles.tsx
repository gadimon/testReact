import { useEffect, useState } from "react";

interface Missile {
  id: string;
  name: string;
  description: string;
  speed: number;
  intercepts: string[];
  price: number;
}

export default function DisplayMissiles() {
  const [missiles, setMissiles] = useState<Missile[]>([]);

  useEffect(() => {
    const fetchMissiles = async () => {
      try {
        const response = await fetch("http://localhost:3000/data", {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
          const data = await response.json();
          setMissiles(data);
        } else {
          console.error("Failed to fetch missiles");
        }
      } catch (error) {
        console.error("Get failed", error);
      }
    };

    fetchMissiles();
  }, []);

  return (
    <div className="form-container">
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Speed</th>
              <th>Intercepts</th>
              <th>Price</th>
              <th>Buy</th>
            </tr>
          </thead>
          <tbody>
            {missiles.map((missile) => (
              <tr key={missile.id}>
                <td>{missile.name}</td>
                <td>{missile.description}</td>
                <td>{missile.speed}</td>
                <td>{missile.intercepts}</td>
                <td>{missile.price}</td>
                <td>
                  <button>Buy</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
