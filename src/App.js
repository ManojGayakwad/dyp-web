import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import FacultyList from './Components/FacultyList.jsx';
import FacultyDetails from './Components/FacultyDetails.jsx';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/facultyList" element={<FacultyList/>} />
        <Route path="/faculty/:id" element={<FacultyDetails />} />
       
      </Routes>
    </>
  );
}

export default App;
