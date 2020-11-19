import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const TableData = props => {
  const { data } = props;
  return (
    <div className="table-responsive-md">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((store, index) => (
            <tr key={store.id}>
              <td>{index + 1}</td>
              <td>{store.name}</td>
              <td>{store.url}</td>
              <td>
                <Link to={`/store/${store.id}/dashboard`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
