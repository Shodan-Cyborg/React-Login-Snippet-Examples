import React, { useState } from "react";
import axios from "axios";

function AddStudent() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [age, setAge] = useState("")
  const [address, setAddress] = useState("")
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post("http://127.0.0.1:8000/api/add-student", {firstname, lastname, age, address})
      alert(result.data.message)
      setFirstname("")
      setLastname("")
      setAge("")
      setAddress("")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <center>
        <h1>Add Student</h1>
       <form onSubmit={handleSubmit}>
          First Name:  <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} /> <br /><br />
          Last Name:  <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} /> <br /><br />
          Age:  <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} /> <br /><br />
          Address:  <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} /> <br /><br />
        <input type="submit" />
       </form><br/><br/>
      </center>
    </>
  );
}

export default AddStudent;
