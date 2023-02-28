import { useState } from "react";

export const NewProduct: React.FC<{}> = () => {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productCompany, setProductCompany] = useState<string>("Tesco");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = { productName, productPrice, productCompany };
    console.log(formData);
    const formDataJSON = JSON.stringify(formData);

    fetch("http://localhost:8000/data_products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formDataJSON,
    }).then(async (res) => {
      console.log("new Blogg was Added");
    });
  };
  return (
    <div className="formular">
      <h2>Vstupný formulár</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Zadaj názov produktu:</label> <br />
        <input
          type="text"
          required
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Zadaj cenu produktu:</label> <br />
        <input
          type="text"
          required
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label htmlFor="">Zadaj obchodný reťazec</label> <br />
        <select
          name=""
          id=""
          value={productCompany}
          onChange={(e) => setProductCompany(e.target.value)}
        >
          <option value="Tesco">Tesco</option>
          <option value="Lidl">Lidl</option>
          <option value="Kaufland">Kaufland</option>
          <option value="Billa">Billa</option>
          <option value="Jednota">Jednota</option>
          <option value="Koruna">Koruna</option>
        </select>
        <br />
        <br />
        <br />
        <button>Pridaj nový produkt</button> <br />
        <br /> <br />
        {productName} <br />
        {productPrice} <br />
        {productCompany}
      </form>
    </div>
  );
};
