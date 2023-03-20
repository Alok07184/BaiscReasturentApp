import { useEffect, useState } from "react";

const Dashboard2 = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(props.itemData);
  }, [props.itemData]);
  return (
    <>
      {console.log("Re-Render Dashboard")}
      <h1>Tabel 1</h1>
      <h1>Tabel 2</h1>
      <h1>Tabel 3</h1>
    </>
  );
};
export default Dashboard2;
