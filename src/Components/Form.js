import React, { useState } from "react";
import SideInfo from "./SideInfo";

function Form({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    power: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addStudent(student);
    setStudent({
      name: "",
      lastName: "",
      phoneNumber: "",
      power: "",
      email: "",
    });

    console.log(student);
  };
  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };
  return (
    <div className="form-page">
      <form className="form" onSubmit={handleSubmit}>
        <label>Frist Name</label>
        <input name="name" onChange={handleChange} value={student.name} />

        <label>Last Name</label>
        <input
          name="lastName"
          onChange={handleChange}
          value={student.lastName}
        />

        <label>Phone Nember</label>
        <input
          name="phoneNumber"
          type="tel"
          onChange={handleChange}
          value={student.phoneNumber}
        />

        <label>Power</label>
        <input name="power" onChange={handleChange} value={student.power} />

        <label>Email Address</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={student.email}
        />

        <input type="submit" value="Add Student" />
      </form>
      <SideInfo />
    </div>
  );
}

export default Form;
