import React from "react";

const Content = () => {
  var name = "Harsh";
  var age = 20;
  var project = "Wed_Joy";
  var isProjectAssigned = 1; //here 1 can be used in place of true and 0 can be used for false

  return (
    <div>
      <h1>JSX calling through content Component </h1>

      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>Project Assigned = {isProjectAssigned == true ? "Yes" : "No"}</h3>
      <h3>Project : {project}</h3>
    </div>
  );
};

export default Content;
