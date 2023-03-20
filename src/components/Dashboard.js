import React, { useEffect, useState } from "react";

const Dashboard = (props) => {
  const [items, setItems] = useState([]);
  const [tableno1, setTableno1] = useState([]);
  const [tableno2, setTableno2] = useState([]);
  const [tableno3, setTableno3] = useState([]);
  const [deleting, setDeleting] = useState("");
  useEffect(() => {
    setItems(props.itemData);
    setTableno1([]);
    setTableno2([]);
    setTableno3([]);
    const menu = { ...localStorage };
    Object.keys(menu).forEach((key) => {
      const data = JSON.parse(menu[key]);
      if (data.tableno === "1") {
        setTableno1((prev) => {
          return [...prev, data];
        });
      } else if (data.tableno === "2") {
        setTableno2((prev) => {
          return [...prev, data];
        });
      } else {
        setTableno3((prev) => {
          return [...prev, data];
        });
      }
    });
  }, [props.itemData, deleting]);

  const handleDelet = (id) => {
    setDeleting(localStorage.removeItem(id));
  };
  return (
    <>
      <h1>Tabel 1</h1>
      {tableno1?.map((ele, index) => (
        <li key={ele.orderId}>
          {ele.price} - {ele.item}
          <button onClick={handleDelet.bind(this, ele.orderId)}>Delete</button>
        </li>
      ))}
      <h1>Tabel 2</h1>
      {tableno2?.map((ele, index) => (
        <li key={ele.orderId}>
          {ele.price} - {ele.item}
          <button onClick={handleDelet.bind(this, ele.orderId)}>Delete</button>
        </li>
      ))}
      <h1>Tabel 3</h1>
      {tableno3?.map((ele, index) => (
        <li key={ele.orderId}>
          {ele.price} - {ele.item}
          <button onClick={handleDelet.bind(this, ele.orderId)}>Delete</button>
        </li>
      ))}
    </>
  );
};

export default Dashboard;
