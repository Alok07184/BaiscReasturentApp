import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Dashboard2 from "./components/Dashboard2";

function App() {
  const [itemData, setItemData] = useState([]);
  const handleData = (price, item, tableno) => {
    const obj = {
      price,
      item,
      tableno,
    };
    setItemData((prev) => {
      return [...prev, obj];
    });
  };
  return (
    <>
      {console.log(itemData)}
      <Form onAddingData={handleData} />

      <Dashboard itemData={itemData} />
    </>
  );
}

export default App;
