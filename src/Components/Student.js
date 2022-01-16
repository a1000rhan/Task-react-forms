import React from "react";

function Student({ student, deletStudent, updateStudent }) {
  return (
    <div className="student">
      <p>{student.name}</p>
      <p>{student.lastName}</p>
      <ul>
        <li>phone number :{student.phoneNumber}</li>
        <li>power: {student.power}</li>
      </ul>
      <div>
        <p className="delete" onClick={() => deletStudent(student)}>
          delete
        </p>
        <p className="delete" onClick={() => updateStudent(student)}>
          update
        </p>
      </div>
    </div>
  );
}

export default Student;
