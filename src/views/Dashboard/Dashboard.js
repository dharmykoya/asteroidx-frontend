import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllStore} from "../../store/actions/store.action"
import TableData from "../../components/table/Table";
import "./Dashboard.css";

const Dashboard = props => {

  const dispatch = useDispatch()
  const { stores,loading } = useSelector(state => state.store);

  useEffect(() => {
    dispatch(getAllStore());
  }, [dispatch])


  return (
    <section className="mt-4">
        <h3 className="text-center">All Stores</h3>
        <TableData data={stores} />
      </section>
  );
};

export default Dashboard;
