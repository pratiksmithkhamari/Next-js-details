import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h2>user {params.userid} review number {params.reviewid}</h2>
    </div>
  )
}

export default page
