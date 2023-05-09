import React,{useState, useEffect} from 'react';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {FaFileUpload} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db  } from '../Firebase';
const AddProduct = () => {

  const[file,setFile] = useState("");

  const handleAdd = async(e) =>{
    e.preventDefault() 
    await addDoc(collection(db, "cities"), {
      name:"Los Angeles",
      state:"CA",
      country:"USA"
    });
    // console.log(res)
  }


  return (
    <div>
       <Form onSubmit={handleAdd}>

          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" placeholder="Enter product price" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFile">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="file" placeholder="product Image" onChange={(e) => setFile(e.target.files[0])} required/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Add
          </Button>


              {/* <div className="formInput">
                <label htmlFor="file">
                  Image: <FaFileUpload className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }} 
                  />
                </div> */}
        </Form>
    </div>
  )
}

export default AddProduct
