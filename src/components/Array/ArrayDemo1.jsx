import React from "react";

const ArrayDemo1 = () => {
  let students = [
    {
      name: "harsh",
      age: 20,
      marks: 45,
    },
    {
      name: "vasu",
      age: 20,
      marks: 90,
    },
    {
      name: "Kushal",
      age: 20,
      marks: 105,
    },
  ];

  return (
    <div>
      {students.map((stu) => {
        return (
          <div>
            <li>Name : {stu.name}</li>
            <li>Age : {stu.age}</li>
            <li>marks : {stu.marks}</li>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default ArrayDemo1;
