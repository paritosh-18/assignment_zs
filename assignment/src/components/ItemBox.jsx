import React from "react";

const ItemBox = ({ item }) => {
  return (
    <div className="flex items-center justify-center bg-slate-200 w-32 h-16 m-2 p-2">
      <h1 className="p-2">{item}</h1>
    </div>
  );
};

export default ItemBox;
