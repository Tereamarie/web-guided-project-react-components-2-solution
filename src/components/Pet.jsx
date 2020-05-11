import React from 'react'

export default function Pet({ pet }) {
  return (
    <div className='pet-friends container'>
      <h4>{pet.name} ({pet.type})</h4> 
    </div>
  )
}
