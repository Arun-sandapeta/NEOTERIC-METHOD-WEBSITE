import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBatch = () => {
    const [editBatch, setEditBatch] = useState([])
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/batches/${id}`);
                setEditBatch(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    },[id])

    const handleChanges = (e) =>{
        setEditBatch({[e.target.name]: e.target.value})
    }    

    const handleEditedData = ()=>{
        axios.put(`http://localhost:5000/batches/${id}`,editBatch).then(
            (res) =>{
                console.log(res)
                navigate('/batches')
            }
        ).catch(
            (err)=>{
                console.log(err)
                alert("cant edit")
            }
        )
    }

    return (
        <div>
            <div>Update the Batch Details</div>
            <form onSubmit={handleEditedData}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="batchName" value={editBatch.batchName} name="batchName" placeholder="Enter batch name" onChange={handleChanges} required />

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value="2024-12-04" onChange={handleChanges} required />

                <label htmlFor="time">Time:</label>
                <input type="text" id="time" name="time" value={editBatch.time} placeholder="Enter time" onChange={handleChanges} required />

                <label htmlFor="duration">Duration:</label>
                <input type="text" id="duration" name="duration" value={editBatch.duration} placeholder="Enter Duration" onChange={handleChanges} required />

                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateBatch