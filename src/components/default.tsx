import { Link } from "react-router-dom";

export const Default: React.FC<{}> = () => {
  return (
    <div>
      Welcome on our application{" "}
      <span style={{ color: "orange" }}>IGITO MAPASI</span>
      <br />
      <p></p>
    </div>
  );
};

// npx json-server --watch src/data/productData.json --port 8000
