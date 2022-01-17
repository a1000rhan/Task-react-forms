import React from "react";
import Student from "./Student";

function StudentsList({ list, deletStudent, updateStudent }) {
  const lists = list.map((student) => (
    <Student student={student} deletStudent={deletStudent} key={student.id} />
  ));
  return <div>{lists}</div>;
}

export default StudentsList;
