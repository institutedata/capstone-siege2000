import React, { useEffect, useState } from "react";
//import specials from "../static/specials.json";
import logo from "../static/Logo.PNG";
import "./print.css";

export default function ShelfLabels() {
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("allSpecials"));
    if (items) {
      setSelectedItems(items);
      // Optionally, clear the selected items from local storage here if they're no longer needed
    }
  }, []);

  return (
    <>
      <div className="no-print" style={{ marginTop: "80px", width: "100%" }}>
        <h2>Shelf Labels</h2>
      </div>
      <div id="toPrint">
        {selectedItems.map((special) => (
          <div className="label" key={special.Stock.plu}>
            <p className="label-header">Special</p>
            <p className="tradename-shelf">{special.Stock.TradeName}</p>
            <p className="special-price-shelf">
              ${(special.SpecialPrice/100).toFixed(2)}
            </p>
            <p className="retail-price">
              Normally ${(special.Stock.Retail/100).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
