import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {


  const [userData,setUserData] = useContext(AuthContext);
  // console.log(authData.employees);

  return (
    <div
      id="Alltask"
      className="bg-[#1c1c1c] p-5 rounded mt-5"
    >
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 "> Employee Name </h2>
        <h3 className="text-lg font-medium w-1/5 ">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 "> active Task </h5>
        <h5 className="text-lg font-medium w-1/5 "> Completed</h5>
        <h5 className="text-lg font-medium w-1/5 "> Failed </h5>
      </div>
      <div className="">
        {userData.map(function (elem,idx) {
          return (
            <div key={idx} className="bg-black mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="w-1/5 "> {elem.name} </h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">{elem.taskCount.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400"> {elem.taskCount.active} </h5>
              <h5 className="text-lg font-medium w-1/5 text-white"> {elem.taskCount.completed} </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600"> {elem.taskCount.failed} </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
