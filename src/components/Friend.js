import React from 'react'
import PetsList from './PetsList'

export default function Friend(props) {
  const { friend, changeStatus } = props

  if (!friend) return (
    <div className='friend-friends container'></div>
  )

  return (
    <div className='friend-friends container'>
      <div className='friend-info'>
        <div>
          <h3>Name: {friend.name}</h3>
          <p>Age: {friend.age}</p>

          {/* 1- Display something better in the Married area */}
          <p>Married: {friend.married ? 'Yes' : 'No'} <button onClick={() => changeStatus(friend.id)}>change</button></p>
          <div>Hobbies:
            <ul>
              {/* 2- Loop over the friend's hobbies and generate <li/> elements as you go */}
              {friend.hobbies.map(
                (like, index) => <li key={index}>{like}</li>
              )}
            </ul>
          </div>
        </div>

        <div>
          {/* 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? */}
          <PetsList pets={friend.pets} />
        </div>
      </div>
    </div>
  )
}
