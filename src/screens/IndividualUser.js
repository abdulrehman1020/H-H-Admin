import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader.js";
import ActivePending from "../components/ActivePending";
import { useDispatch, useSelector } from "react-redux";
import { getAllIndividuals } from "../redux/action/IndividualAction.js";
import UserListComponent from "../components/userComponents/UserListComponent.js";
// import { Alert } from "@mui/material";
// import { deleteHostReset, hostListReset } from "../store/slices/HostSlices";

function IndividualUser() {

  const dispatch = useDispatch()
  const [limit, setLimit] = useState(10);

  const [active,] = useState('Active Individual');
  const [pending,] = useState('Pending Individual');
  const [activeTab, setActiveTab] = useState(active);

  // Use selector -----------------------------------
  const { loading, individualList, error } = useSelector((state) => state.allIndividuals)
  // const { message: messageDelete, loading: loadingDelete, success: successDelete, error: errorDelete } = useSelector((state) => state.deleteHost)

  let individualData = individualList && individualList.filter((host) => {
    if (activeTab == active) {
      if (!host.isVerified) return host
    }
    if (activeTab == pending) {
      if (!host.isVerified || !host.isOnBoarded) return host
    }
  })

  individualData = individualData && individualData.map((user, index) => {
    return {
      id: user._id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      // mobile: host.phoneNumber,
      // emailVerified: host.isVerified === "true" ? "true" : "false",
      // stripeVerified: host.isOnBoarded ? true : false
    }
  })



  useEffect(() => {

    let status = activeTab == active ? 'active' : 'pending';
    dispatch(getAllIndividuals({ limit, status }))
  }, [limit, activeTab])

  // useEffect(() => {
  //   setTimeout(() => {
  //     error && dispatch(hostListReset())
  //     successDelete && dispatch(deleteHostReset())
  //     errorDelete && dispatch(deleteHostReset())
  //   }, 2000)
  // }, [successDelete, errorDelete, error])

  return (
    <div className="flex w-full h-screen overflow-auto">

      {/* Error show here
      {successDelete && (
        <Alert
          severity="success"
          sx={{
            position: "fixed",
            width: "90%",
            margin: "auto",
            top: 20,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <strong>{messageDelete}</strong>
        </Alert>
      )}

      {errorDelete && (
        <Alert
          severity="error"
          sx={{
            position: "fixed",
            width: "90%",
            margin: "auto",
            top: 20,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <strong>{errorDelete}</strong>
        </Alert>
      )}

      {error && (
        <Alert
          severity="error"
          sx={{
            position: "fixed",
            width: "90%",
            margin: "auto",
            top: 20,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <strong>{error}</strong>
        </Alert>
      )} */}


      <div className="flex flex-col w-full mx-auto bg-[#F5F5F5]">
        <div className="px-10 bg-white">
          <AdminHeader heading={"Properties Hosts List"} pages={"Pages / Properties Hosts List"} />
        </div>

        <div className="px-6 py-5 h-screen overflow-auto">

          <ActivePending active={active} pending={pending} activeTab={activeTab} setActiveTab={setActiveTab} />

          <UserListComponent data={individualData} setLimit={setLimit} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default IndividualUser;
