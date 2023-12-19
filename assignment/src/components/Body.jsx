import React, { useState, useEffect } from "react";
import ItemBox from "./ItemBox";

const data = new Array(100).fill().map((item, i) => (item = `item ${i}`));
const newData = [];

// console.log(window.outerHeight);
let height = window.outerHeight;

let num = 0;
num = (height - 80) / 90;
num = Math.floor(num);

for (let i = 0; i < num; i++) {
  newData[i] = data[i];
}

const Body = () => {
  const [index, setIndex] = useState(num);
  const [pos, setPos] = useState(num);
  const [data2, setData2] = useState(newData);

  const getPos = (height) => {
    let num = 0;
    num = (height - 80) / 90;
    return Math.floor(num);
  };

  const updateData2 = () => {
    // console.log(pos);
    setData2(data.slice(0,pos));
  };

  useEffect(() => {
    const handleResize = () => {
      setPos(getPos(window.outerHeight));
      updateData2();
    };

    window.addEventListener("resize", () => handleResize());

    return () => {
      window.removeEventListener("resize", () => handleResize());
    };
  }, [pos]);

  const handleClick = (pos, index) => {
    for (let i = index; i < index + pos; i++) {
      newData[i] = data[i];
    }
    // console.log(getPos(height));
    setData2(newData);
    setIndex(index + pos);
  };
  return (
    <div>
      <ul>
        {data2.map((item) => {
          return <ItemBox item={item} />;
        })}
        <button onClick={() => handleClick(pos, index)}>see more...</button>
      </ul>
    </div>
  );
};

export default Body;
