import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);

 
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    // console.log(loggedInUser)
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])


  const HandleLogin = (email, password) => {
    if (email == "sachindauji@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees", data:employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : ( user == "employee" ? <EmployeeDashboard changeUser={setUser} data = {loggedInUserData}/> : null)}
    </>
  );
};

export default App;
