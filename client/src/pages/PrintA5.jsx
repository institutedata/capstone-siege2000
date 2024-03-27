import React, { useEffect, useState } from 'react';
import './printA5.css';


function PrintA5() {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('selectedSpecials'));
    if (items) {
      setSelectedItems(items);
      // Optionally, clear the selected items from local storage here if they're no longer needed
    }
  }, []);

  return (
   <>
   

   <div className="no-print"style={{ marginTop: "80px", width: "100%" }}><h2>A5 Posters</h2></div>
   
    <div id="toPrint">
     
      {/* Format selected items for A5 printing */}
      {selectedItems.map((stockID) => (
        <div className="page"key={stockID}>
          {/* Display selected item details */}
          <div className="announce">Special</div>
        <div className="tradename">{  stockID.Stock.TradeName}</div>
        <div className="special">${(stockID.SpecialPrice/100).toFixed(2)}</div>
        <div className="retail">${(stockID.Stock.Retail/100).toFixed(2)}</div>
        
          
        </div>
      ))}
    
    </div>
    </>
  );
}

export default PrintA5; 