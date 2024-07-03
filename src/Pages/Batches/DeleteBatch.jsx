import axios from 'axios';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const DeleteBatch = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const handleDeleteBatch = () => {
        axios.delete(`http://localhost:5000/batches/remove/${id}`)
        .then(() => {
            navigate('/batches')
            console.log("Success");
        })
        .catch((err) => {
            console.log(err);
            alert("Not deleted");
        })
    }
  return (
    <div className='method__batches-delete'>
        <div className='method__batches-delete-head'>
            <div className='method__batches-delete-main'>Are you sure you want to delete?</div>
            <div className='method__batches-delete-confirm'>
                <button onClick={handleDeleteBatch}>Delete</button>
                <Link to={'/batches'}>Cancel</Link>
            </div>
        </div>
    </div>
  )
}

export default DeleteBatch