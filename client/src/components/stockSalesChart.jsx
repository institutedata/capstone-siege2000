import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

import { Typography } from "@mui/material";

import moment from "moment";

import { BarChart } from "@mui/x-charts/BarChart";

const StockSalesChart = (props) => {
  const stockID = props.stockID;

  console.log("stockId", stockID);

  const [historyResults, setHistoryResults] = useState([]);
  const [months, setMonths] = useState([]);
  const [qtySoldData, setQtySoldData] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/history/search?stockID=${stockID}`;
    console.log("apiUrl", apiUrl);
    const fetchStockDetails = async () => {
      try {
        console.log("History request received");
        const response = await axios.get(apiUrl);
        console.log("I am in USE EFFECT: ", response?.data);
        setHistoryResults(response?.data); // API Data the array of history
        setMonths(response.data.map((row) => row.Month));
        setQtySoldData(response.data?.map((row) => row.QtySold));
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };
    fetchStockDetails();
  }, [stockID]);

  // useEffect(() => {
  //   console.log(`HistoryResults ${historyResults}`);
  // }, [historyResults])

  console.log("Months: ", months);

  return (
    <React.Fragment>
      <Typography variant="h6">Stock Sales Chart for {stockID}</Typography>

      <BarChart
        series={[{ data: qtySoldData }]}
        height={290}
        xAxis={[{ data: months, scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </React.Fragment>
  );
};
export default StockSalesChart;
