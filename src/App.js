import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const addStudent = (newStudent) => {
    newStudent.id = studentsInfo.length + 1;
    setStudentsInfo([...studentsInfo, newStudent]);
  };
  const deletStudent = (deletedStudent) => {
    let tempstudent = studentsInfo.filter(
      (student) => student.id !== deletedStudent.id
    );
    setStudentsInfo(tempstudent);
    console.log(tempstudent);
  };

  const updateStudent = (updatedStudent) => {
    let tempstudent = studentsInfo.filter(
      (student) => student.id === updatedStudent.id
    );
    setStudentsInfo(tempstudent);
    console.log(tempstudent);
  };
  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList
          list={studentsInfo}
          deletStudent={deletStudent}
          updateStudent={updateStudent}
        />
      ) : (
        <Form addStudent={addStudent} />
      )}
    </div>
  );
}

export default App;
