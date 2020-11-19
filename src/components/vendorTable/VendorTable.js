import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const VendorTable = props => {
  const { data } = props;

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  formatter.format(2500); /* $2,500.00 */
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Vendor Name</th>
            <th>Products Number</th>
            <th>Average Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((vendor, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{vendor.vendor}</td>
              <td>{vendor.productsNumber}</td>
              <td>{formatter.format(vendor.averagePrice)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VendorTable;
