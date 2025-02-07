import React from 'react'

const ArrayDemo2 = () => {


    let arr =["harsh","vasu" , "kushal"]
  return (
    <div>
      {
        arr.map((user)=>{
            return <li>{user}</li>
        })
      }
    </div>
  )
}

export default ArrayDemo2
