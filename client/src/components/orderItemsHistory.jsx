import React, { useEffect, useState } from "react";
import {
  FormControl,
  Paper,
  TableContainer,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Typography,
} from "@mui/material";
import axios from "axios";
import moment from "moment";

//fect order items history for card and place in table for viewing.
const OrderItemsHistory = (props) => {
  const stockID = props.stockID;
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/order-items/search/${stockID}`;
    const fetchOrderItems = async () => {
      try {
        const response = await axios.get(apiUrl);
        setOrderItems(response.data);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };
    fetchOrderItems();
  }, [stockID]);
  return (
    <React.Fragment>
      <TableContainer component={Paper} style={{ maxHeight: 220 }}> {/* Adjust this maxHeight value as needed */}
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Quantity Ordered</TableCell>
            <TableCell>Delivered</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderItems.map((row) => (
            <TableRow key={row.OrderItemID}>
              <TableCell>
                {moment(row.oiDateDelivered).format("DD-MMM-YYYY")}
              </TableCell>
              <TableCell>{row.QtyDelivered}</TableCell>
              <TableCell>{row.Quantity}</TableCell>
              <TableCell>${row.oiRealCost / 100}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
};
export default OrderItemsHistory;
