import React from 'react'
import Friend from './Friend'

export default function FriendsList({ friends }) {
  return (
    <div className='list-friends container'>
      <h2>My treasured friends:</h2>
      {/* We need to loop over our friends generating a Friend as we go */}
      {
        friends.map(fr => {
          // do we have a friend layin around?
          // What does each Friend component need?
          return <Friend key={fr.id} friend={fr} />
        })
      }
    </div>
  )
}
