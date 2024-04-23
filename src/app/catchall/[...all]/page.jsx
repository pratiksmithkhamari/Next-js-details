
import React from 'react'
import { notFound } from 'next/navigation'

const page = ({params}) => {
    if(params.all.length == 2){
        return <h2 className='text-red-600 text-2xl capitalize'>hello user {params.all[0]} and   {params.all[1]}</h2>
    }
    if(parseInt(params.all[0])>200){
        return notFound()
    }
  return (
    <div>
      hello ... alll---
      
    </div>
  )
}

export default page
