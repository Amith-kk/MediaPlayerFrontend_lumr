import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import { deleteAVideoHistory, getAllHistory } from '../services/allAPI'

function Watch() {
  const navigate = useNavigate()

  const [history, setHistory] = useState([])

  const allHistory = async()=>{
    const {data} = await getAllHistory()
    setHistory(data)
  }

  //function to remove history
  const removeHistory = async(id)=>{
    await deleteAVideoHistory(id)
    //to get the remaining history
    allHistory()
  }

  useEffect(()=>{
    allHistory()
  },[])

  return (
    <div className='container mt-3'>
      <div className='d-flex justify-content-between'>
        <h1>Watch History</h1>
        <h4 onClick={()=>navigate('/home')}><i class="fa-solid fa-arrow-left me-2"></i>Back To Home</h4>

      </div>
      <div className='d-flex justify-content-center align-items-center w-100'>
        <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history?.length>0?
              history?.map((item, index)=>(
                <tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td><a href={`${item.embedLink}?autoplay=1`} target='_blank'>{item.embedLink}</a></td>
              <td>{item.timestamp}</td>
              <td><button onClick={()=>removeHistory(item?.id)} type='button' className='btn btn-danger '><i className='fa-solid fa-trash'></i></button>
</td>
            </tr>
              ))
              :
              <p className='mt-5 fw-bolder fs-4 text-danger'>No Watch History</p>
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Watch