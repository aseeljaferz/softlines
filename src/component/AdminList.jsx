import { collection,  deleteDoc, doc, onSnapshot } from 'firebase/firestore';
// import { getDocs } from 'firebase/firestore';
import React,{useState, useEffect} from 'react';
// import {collection, getDocs, deleteDoc, doc, onSnapshot} from "firebase/firestore";
import { db } from '../Firebase';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./datatable.scss";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';



const AdminList = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{

    const unsub = onSnapshot(
        collection(db, "product"),
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  
      return () => {
        unsub();
      };
}, []);

 

  console.log(data)


  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "product", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='datatable'>
         <div className="datatableTitle">
        Add New Product
        <Link to="/addproduct" className="link">
          Add New
        </Link>
        </div>
       
        <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{textAlign:'center'}}>#</th>
          <th style={{textAlign:'center'}}>Product Name</th>
          <th style={{textAlign:'center'}}>Product Desc</th>
          <th style={{textAlign:'center'}}>Price</th>
          <th style={{textAlign:'center'}}>Category</th>
          <th style={{textAlign:'center'}}>Image</th>
          <th style={{textAlign:'center'}}>Action</th>
        </tr>
      </thead>

      <tbody>
      {data.map((product)=>(

        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.productName}</td>
          <td>{product.productDesc}</td>
          <td>{product.productPrice}</td>
          <td>{product.category}</td>
          <td><img src={product.img || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} className='product-img-table' alt="product-img"/> </td>
          <td> 
          <br />
                <Button variant="danger" onClick={()=>handleDelete(product.id)}>Delete</Button>
                </td>
        </tr>

      ))}
      </tbody>
        
    </Table>
      
    </div>
  )
}

export default AdminList
