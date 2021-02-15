import React from 'react'

const Members = (props) => {
  return (
    <div>
      {props.newMember.map(teamMate => (
        <div>
          <h1>Name: {teamMate.name}</h1>
          <h2>Email: {teamMate.email}</h2>
          <h3>Role: {teamMate.role}</h3>
        </div>
      ))}
    </div>
  )
}

export default Members