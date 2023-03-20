import React, { useState } from "react";
const Form = (props) => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [item, setItem] = useState("");
  const [tableno, setTableno] = useState("");

  const handleDetails = (e) => {
    e.preventDefault();
    const obj = {
      orderId,
      price,
      item,
      tableno,
    };
    console.log(obj);
    localStorage.setItem(orderId, JSON.stringify(obj));
    props.onAddingData(price, item, tableno);
    setItem("");
    setOrderId("");
    setPrice("");
    setTableno("");
  };
  return (
    <>
      <div>
        <h2>Enter Details</h2>
        <form>
          <label htmlFor="orderId">Unique Order Id</label>
          <input
            type="number"
            name="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <label htmlFor="Price">Item Price</label>
          <input
            type="number"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="Item">Item Name</label>
          <input
            type="text"
            name="Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <select
            name="tabelno"
            value={tableno}
            onChange={(e) => setTableno(e.target.value)}
          >
            <option selected value="0">
              Choose
            </option>
            <option value="1">Tabel 1</option>
            <option value="2">Tabel 2</option>
            <option value="3">Tabel 3</option>
          </select>
          <button type="submit" onClick={handleDetails}>
            Enter Details
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
