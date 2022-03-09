import React from 'react'
import { useParams } from 'react-router-dom'

const UserPage = () => {
  const {id} = useParams()
  return (
    <>
      <p className="page-user">{id} user</p>
    </>
  )
}

export default UserPage