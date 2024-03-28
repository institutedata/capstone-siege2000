import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import moment from "moment";
import { Chart } from "react-google-charts";
const StockSalesChart = (props) => {
  const stockID = props.stockID;
  // const tradeName = props.stockName; - not required for this component
  //console.log("stockId", stockID);

  const [historyResults, setHistoryResults] = useState([]);
  const [months, setMonths] = useState([]);
  const [qtySoldData, setQtySoldData] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/history/search?stockID=${stockID}`;
    //console.log("apiUrl", apiUrl);
    const fetchStockDetails = async () => {
      try {
        //console.log("History request received");
        const response = await axios.get(apiUrl);
        //console.log("I am in USE EFFECT: ", response?.data);
        setHistoryResults(response.data); // API Data the array of history
        setMonths(response.data.map((row) => moment(row.Month).format("MMM")));
        setQtySoldData([response.data.map((row) => row.QtySold)]);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };
    fetchStockDetails();
  }, [stockID]);

  useEffect(() => {
    //console.log(`HistoryResults ${historyResults}`);
  }, [historyResults]);

  // console.log("Months: ", months);
  // console.log("QtySoldData: ", useState(qtySoldData));

  const data = [months, qtySoldData];
  //console.log("Data: ", data);
  const chartData = useMemo(() => {
    // First row for column headers
    const header = [["Month", "Qty Sold"]];
    // Data rows
    //map history results to an array of arrays for Google Charts. Each row is an array of [Month, QtySold] - month data is converted by moment to MMM format.
    const dataRows = historyResults.map(({ Month, QtySold }) => [
      moment(Month).format("MMM"),
      QtySold,
    ]);
    // Combine headers and data rows
    return header.concat(dataRows);
  }, [historyResults]);

  return (
    <React.Fragment>
      {/* <BarChart
        series={[{ data: qtySoldData, label: "Qty Sold" }]}
        height={290}
        xAxis={[{ data: months, scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      /> */}

      <Chart
        chartType="ColumnChart"
        width="100%"
        height="200px"
        data={chartData}
        options={{
          title: "12 Month History",
          chartArea: { width: "80%" },
          hAxis: {
            title: "Month",
            minValue: 0,
          },
          vAxis: {
            title: "Qty Sold",
          },
        }}
      />
    </React.Fragment>
  );
};
export default StockSalesChart;
