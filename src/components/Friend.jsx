import React from 'react'
import PetsList from './PetsList'

export default function Friend({ friend }) {
  return (
    <div className='friend-friends container'>
      <h2>{friend.name}</h2>

      <div className='friend-info'>
        <div >
          <h3>1- General Info</h3>
          <p>Age: {friend.age}</p>

          {/* Display something better in the Married area */}
          <p>Married: {friend.married ? 'Yes' : 'No'}</p>
          <div>Likes:
            <ul>
              {/* Loop over the friend's likes and generate <li/> elements as you go */}
              {friend.likes.map(
                (like, index) => <li key={index}>{like}</li>
              )}
            </ul>
          </div>
        </div>

        <div>
          <h3>2- Pets</h3>

          {/* What does the PetsList need? */}
          {/* What is the exact name of the prop it expects? */}
          {/* Is the pets data around here somewhere so I may pass it? */}
          <PetsList pets={friend.pets} />
        </div>
      </div>
    </div>
  )
}
