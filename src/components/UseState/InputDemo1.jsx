import React, { useState } from "react";

const InputDemo1 = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tdate, setTdate] = useState("");

  const fnameHandler = (e) => {
    setFname(e.target.value);
  };
  const lnameHandler = (e) => {
    setLname(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const numberHandler = (e) => {
    setPhone(e.target.value);
  };
  const dateHandler = (e) => {
    setTdate(e.target.value);
  };

  return (
    <div>
      <h1 style={{ marginBottom: "10px" }}>Input Demo 1</h1>

      <table>
        <thead>
          <tr>
            <td>
              <label  >First Name </label>{" "}
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter Your First Name"
                onChange={(e) => {
                  fnameHandler(e);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label >Last Name</label>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                onChange={(e) => {
                  lnameHandler(e);
                }}
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <label >Email</label>{" "}
            </td>
            <td>
              <input
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => {
                  emailHandler(e);
                }}
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <label >Number</label>
            </td>
            <td>
              <input
                type="number"
                placeholder="Enter Your Number"
                onChange={(e) => {
                  numberHandler(e);
                }}
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <label style={{marginRight:"60px"}}>Date</label>
            </td>
            <td style={{padding:"10px"}}>
              <input
                type="date"
                placeholder="Enter Date"
                onChange={(e) => {
                  dateHandler(e);
                }}
              ></input>
            </td>
          </tr>
        </thead>
      </table>
      <br></br>
      <h1>Values</h1>
      <p style={{fontSize:"20px",fontWeight:"bold"}}>First Name : {fname}</p>
      <p style={{fontSize:"20px",fontWeight:"bold"}}>Last Name : {lname}</p>
      <p style={{fontSize:"20px",fontWeight:"bold"}}>Email: {email}</p>
      <p style={{fontSize:"20px",fontWeight:"bold"}}>Number : {phone}</p>
      <p style={{fontSize:"20px",fontWeight:"bold"}}>Date : {tdate}</p>
    </div>
  );
};

export default InputDemo1;
