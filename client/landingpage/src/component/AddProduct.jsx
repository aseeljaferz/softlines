import React,{useState, useEffect} from 'react';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {FaFileUpload} from 'react-icons/fa';
const AddProduct = () => {
  return (
    <div>
       <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <FaFileUpload className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }} 
                  />
                </div>
        </form>
    </div>
  )
}

export default AddProduct
