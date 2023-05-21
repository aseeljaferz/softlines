import React,{useState, useEffect} from 'react';
import {
  addDoc,
  collection,
  // doc,
  serverTimestamp,
  // setDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db, storage  } from '../Firebase';
import './addProduct.css'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const AddProduct = () => {

  const[file,setFile] = useState("");
  const[data, setData] = useState({});
  const [per, setPer] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const uploadFile = ()=>{
      // const name = new Date().getTime() + file.name
      const storageRef = ref(storage, file.name)

      const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on('state_changed', 
  (snapshot) => {
    
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPer(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default:
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setData((prev)=>({...prev, img:downloadURL}))
    });
  }
);
    };
    file && uploadFile();
  }, [file]);
   
  const handleInput = (e)=>{
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]:value});
  };

  console.log(data)

  const handleAdd = async(e) =>{
    e.preventDefault() 
    try{

      await addDoc(collection(db, "product"), {
        ...data,
        timeStamp: serverTimestamp()
      });
      navigate(-1)
    }
    catch(err){
      console.log(err)
    }
    
  }


  return (
    <div>


      <Card className="text-center" style={{minWidth:"60%", marginLeft:"auto", marginRight:"auto"}}>
            <Card.Header style={{fontFamily:'fantasy' , fontSize:'2.5rem',justifyContent:'center'}}>Soft Line</Card.Header>
            <Card.Body>
              <Card.Title>Add New Product</Card.Title>
              <br />
                <Form onSubmit={handleAdd}>

                <Form.Group className="mb-3" >
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" id='productName' required onChange={handleInput}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" placeholder="Enter product price" id='productPrice' required onChange={handleInput}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                <Form.Label>Product Description</Form.Label>
                <Form.Control type="text" placeholder="Enter product Desc.." id='productDesc' required onChange={handleInput}/>
                </Form.Group>

                {/* <Form.Check 
                  type='radio'
                  id={`default-radio`}
                  label={`CCTV`}
                />

                <Form.Check 
                  type='radio'
                  id={`default-radio`}
                  label={`Biometric`}
                /> */}


                <Form.Group className="mb-3" >
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" placeholder="product Image" onChange={(e) => setFile(e.target.files[0])} required/>
                </Form.Group>
                    <h6 style={{textAlign:'center'}}>Selected Image:</h6>
                <div className='product-image-wrapper'>
                  <img
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt="" className='product-image'
                    />
                </div>
                      <br />
                <Button variant="primary" disabled={per!=null && per<100} className='add-prod-btn' type="submit">
                    &nbsp; &nbsp; Add &nbsp; &nbsp;
                </Button>

               </Form>
              
            </Card.Body>
            <Card.Footer className="text-muted">© All Rights Reserved</Card.Footer>
      </Card>

    </div>
  )
}

export default AddProduct
