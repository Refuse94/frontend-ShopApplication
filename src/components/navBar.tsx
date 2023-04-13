import { Link } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  return (
    <div>
      Welcome on our application{" "}
      <span style={{ color: "orange" }}>IGTITO MAPASI</span>
      <br />
      <br />
      <br />
      <Link
        style={{
          color: "orange",
          textDecoration: "none",
          marginRight: "50px",
          border: "2px solid white",
          background: "black",
          padding: "10px",
          borderRadius: "20px",
        }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{
          color: "orange",
          textDecoration: "none",
          marginRight: "50px",
          border: "2px solid white",
          background: "black",
          padding: "10px",
          borderRadius: "20px",
        }}
        to="/newProduct"
      >
        New Product
      </Link>
      <Link
        style={{
          color: "orange",
          textDecoration: "none",
          marginRight: "50px",
          border: "2px solid white",
          background: "black",
          padding: "10px",
          borderRadius: "20px",
        }}
        to="/bestSales"
      >
        Best sales
      </Link>
      <Link
        style={{
          color: "orange",
          textDecoration: "none",
          marginRight: "50px",
          border: "2px solid white",
          background: "black",
          padding: "10px",
          borderRadius: "20px",
        }}
        to="/filter"
      >
        Find specific product
      </Link>
    </div>
  );
};
