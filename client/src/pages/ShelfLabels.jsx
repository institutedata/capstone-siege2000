import React from "react";
import specials from "../static/specials.json";
import logo from "../static/Logo.PNG";
import './print.css'


export default function ShelfLabels(){

    return (
        <>
        <div className="no-print"style={{ marginTop: "80px", width: "100%" }}><h2>Shelf Labels</h2></div>
        <div  id="toPrint">
            
            
                {specials.map(special => (
                    <div className='label' key={special.plu}>
                        <p className='label-header'>Special</p>
                       <p className="tradename-shelf">{special.TradeName}</p>
                       <p className="special-price-shelf">${special.SpecialPrice.toFixed(2)}</p>
                       <p className="retail-price">Normally ${special.Retail.toFixed(2)}</p>
                     
                    
                    </div>
                ))}
            </div>
            </>
      
    )

}