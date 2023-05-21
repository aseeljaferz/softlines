import React from 'react'
import {doc, setDoc} from 'firebase/firestore'
import AdminList from './AdminList'
const Admin = () => {
  return (
    <div>
      <AdminList/>
    </div>
  )
}

export default Admin
