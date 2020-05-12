import React from 'react'
import Pet from './Pet'

export default function PetsList({ pets }) {
  return (
    <div className='list-pets-friends container'>
      {/* Loop over the pets generating a Pet element as you go */}
      {/* What props does the Pet component expect? */}
      {
        pets.map(pet => <Pet pet={pet} key={pet.id} />)
      }
    </div>
  )
}
