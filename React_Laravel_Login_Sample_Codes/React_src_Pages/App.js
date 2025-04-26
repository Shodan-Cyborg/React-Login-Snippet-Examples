import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowStudent from "./ShowStudent";
import EditStudent from "./EditStudent";
import Login from "./Login";
import Register from "./Regiter";
import AddStudent from "./AddStudent";
import Logout from "./Logout";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestRoute><Login /> </GuestRoute>} />
        <Route path="/show-student" element={<ProtectedRoute> <ShowStudent /> </ProtectedRoute>} />
        <Route path="/register-user" element={<Register />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/display-student-edit/:id/" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
