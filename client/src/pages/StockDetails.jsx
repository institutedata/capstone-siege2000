import { useParams } from 'react-router-dom';


const StockDetails = () => {
 
  const {stockID} =useParams();
    console.log(stockID);

 

  return (
    <div className="posts">
      {/* Render your stock details here */}
      <h2>Stock Details for Stock Name</h2>
      {plu.TradeName}
    </div>
  );
}
export default StockDetails;