import React from 'react'

const RequestedProject = (props) => {
    console.log(props)
  return (
    <div>
      
      <p><span>Requested Project Name :</span> {props.projectName}</p>
    
      <p><span>Requested By : </span>{props.universityEmail}</p>
     {
         props.state === "pending" ?
         <>
         <button>Approve</button>
         <button>Reject</button>
         </>
          : props.state
    } 
      <br />
    </div>
  )
}

export default RequestedProject
