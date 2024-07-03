import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBatch = () => {
  const [newBatch, setNewBatch] = useState([]);
  const navigate = useNavigate()

  const handleChanges = (e) =>{
    setNewBatch({...newBatch, [e.target.name]: e.target.value})
  }

  const handleAddBatch = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/batches/add',newBatch)
    .then(() =>{
      navigate('/batches')
      setNewBatch([])
    })
    .catch((err) =>{
      alert(`Can't add the batch`)
      console.log(err)
    })
  }

  return (
    <div>
      <form onSubmit={handleAddBatch}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="batchName" name="batchName" placeholder="Enter Batch name" onChange={handleChanges} required/>

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" onChange={handleChanges} required/>

        <label htmlFor="time">Time:</label>
        <input type="text" id="time" name="time" placeholder="Enter time" onChange={handleChanges} required/>

        <label htmlFor="duration">Duration:</label>
        <input type="text" id="duration" name="duration" placeholder="Enter Duration"  onChange={handleChanges} required/>

        <button type="submit">Add Batch</button>
      </form>
    </div>
  )
}

export default AddBatch