import React, { useEffect, useState } from 'react'
import './Batches.scss'
import axios from "axios"
import { Link } from "react-router-dom"
import edit from "../../assets/batches/edit-batch.svg"
import remove from "../../assets/batches/delete-batch.svg"

const Batches = () => {

    const [batches, setBatches] = useState([])
    // const [showDeleteModal, setShowDeleteModal] = useState(false);
    // const [batchIdToDelete, setBatchIdToDelete] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/batches');
                setBatches(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])


    return (
        <div className='Batches-main'>

            <div className='Batches-Table'>
                <div className='Batches-table-main'>
                    <div className='Batches-title'>Batches time table </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Edit</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                batches.map((batch, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{batch.batchName}</td>
                                            <td>{batch.date.slice(0, 10)}</td>
                                            <td>{batch.time}</td>
                                            <td>{batch.duration}</td>
                                            <td className='Batches-actions'>
                                                <Link to={`/batches/update/${batch._id}`}>
                                                    <img src={edit} alt="edit" />
                                                </Link>
                                                <img src={remove} alt="remove" />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to={`/batches/add`}>Add New Batch</Link>

        </div>
    )
}

export default Batches