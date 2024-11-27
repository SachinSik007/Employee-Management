import React from "react";
import Header from "../other/Header";
import Createtask from "../other/Createtask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={props.changeUser} />
      <Createtask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
