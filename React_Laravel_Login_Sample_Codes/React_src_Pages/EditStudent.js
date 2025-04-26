import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditStudent() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/student-edit/${id}`).then((e) => {
      console.log(e.data.student);
      console.log(e.data.message);
      console.log(e.data.status);
      setFirstname(e.data.student.firstname);
      setLastname(e.data.student.lastname);
      setAge(e.data.student.age);
      setAddress(e.data.student.address);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/student-update/${id}`, {
        firstname,
        lastname,
        age,
        address,
      });
      navigate("/show-student");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
    <div className="card container">
      <div classclassName="card-body">
        <h1>Update</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={lastname}
              onChange={(e)=>setLastname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              value={age}
              onChange={(e)=>setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
    </>
    
  );
}

export default EditStudent;
