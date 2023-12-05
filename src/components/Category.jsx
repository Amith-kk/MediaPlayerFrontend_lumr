import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addAllCategory, deletecategory, getAVideo, getAllCategories, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewCard from './ViewCard';
import { Col, Row} from 'react-bootstrap'




function Category() {
    const [categoryName, setCategoryName] = useState("")
    const [category, setCategory] = useState([])

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to add category
  const addCategory = async()=>{
    if(categoryName){
      let body = {
        categoryName,
        allvideos:[]
      }
      const response = await addAllCategory(body)
      if(response.status>=200 && response.status<300){
        toast.success("Category added Successfully")
        //state value is made null
        setCategoryName("")
        //close the modal
        handleClose()
        //to get the category
        allCategory()
      }
      else{
        toast.error("Something went wrong. Please Try Later")
      }
    }
    else{
      toast.warning("Please Enter Category Name")
    }
  }

  //function to get all categories
  const allCategory = async()=>{
    const {data} = await getAllCategories()
    setCategory(data)
  }

  //function to delete category
  const deleteACategory = async(id)=>{
    await deletecategory(id)
    //to get the remaining category
    allCategory()
  }
  //function to prevent reload so that the data that we send wont lost
  const dragOver =(e)=>{
    e.preventDefault()
  }

  const videoDrop =async(e, categoryId)=>{
    // to get the data send from videocard
    let videoId = e.dataTransfer.getData("videoID")
    console.log(videoId);
    const {data} = await getAVideo(videoId)
    console.log(data);
    const selectedCategory = category.find(item=>item.id===categoryId)
    selectedCategory.allvideos.push(data)

    await updateCategory(categoryId,selectedCategory)
    allCategory()
  }

  useEffect(()=>{
    allCategory()
  },[])
  return (
    <>
    <div>
        <button onClick={handleShow} style={{backgroundColor:'orange',width:'250px',height:'30px',borderRadius:'6px'}}>Add New Category</button>
    </div>
    {category?.length>0?
    category?.map((item)=>(<div className='m-5 border border-secondary p-3 rounded'>
    <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
      <h6>{item.categoryName}</h6>
      <button onClick={()=>deleteACategory(item?.id)} type='button' className='btn btn-danger ms-5'><i className='fa-solid fa-trash'></i></button>
    </div>
    <Row>
      <Col>
      { item?.allvideos?.length > 0?
      item?.allvideos?.map((card)=>( <ViewCard displayVideo={card} ispresent={true}/>))
      : <p>Nothing to display</p>
      }
      </Col>
    </Row>
  </div>))
      : <p className='m-3 fw-bolder fs-5 text-danger'>No Category Added</p>
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary p-3 rounded'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
      </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default Category