import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStoreDetails } from "../../store/actions/store.action";
import VendorTable from "../../components/vendorTable/VendorTable";
import Loader from "../../components/loader/Loader";

const Profile = props => {
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const { store, loading, products } = useSelector(state => state.store);

  useEffect(() => {
    dispatch(getStoreDetails(storeId));
  }, [dispatch, storeId]);

  return (
    <section>
      <div className="mt-4">
        <h4 className="text-center mb-4">{store?.name.toUpperCase()} VENDORS</h4>
        <section className="">
          {!loading ? <VendorTable data={products} /> : <Loader />}
        </section>
      </div>
    </section>
  );
};

export default Profile;
