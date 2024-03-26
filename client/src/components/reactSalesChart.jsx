import React, { useEffect, useState } from "react";
import axios from "axios";

import { Typography } from "@mui/material";

import moment from "moment";

import { BarChart } from "@mui/x-charts/BarChart";

const ReactSalesChart = (props) => {
  const stockID = props.stockID;
  const stockTradeName = props.stockName;
  console.log(stockID);
  const [historyResults, setHistoryResults] = useState([]);
  const apiUrl = `http://localhost:8080/api/history/search?stockID=${stockID}`;
  console.log(apiUrl);

  useEffect(() => {
    const getHistoryDetails = async () => {
      try {
        console.log("History request received");
        const response = await axios.get(apiUrl);
        console.log(response.data);
        setHistoryResults(response.data); // API Data the array of history
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };
    getHistoryDetails();
    console.log(`HistoryResults ${historyResults}`);
  }, [stockID]);
  console.log(`HistoryResults2 ${historyResults}`);
  const months = historyResults.map((row) => row.Month);
  const qtySoldData = historyResults.map((row) => row.QtySold);

  console.log(months);

  return (
    <React.Fragment>
      <Typography variant="h6">Stock Sales Chart for whatever</Typography>
    </React.Fragment>
  );
};
export default StockSalesChart;
