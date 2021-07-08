import React, { useState } from 'react'
import Form from './Form.js'
import Members from './Members.js'
import './App.css';

function App() {

  const [newMember, setNewMember] = useState([])
    
    const addNewMember = event => {
      const newMember = {
        name: event.name,
        email: event.email,
        role: event.role
      }
      setNewMember({...newMember, newMember})
    }
    return (
      <div>
        <Form addNewMember={addNewMember} />
        <Members newMember={newMember} />
      </div>
    )
}

export default App;