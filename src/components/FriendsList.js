import React from 'react'
// 1- FriendsList renders several Friend components, import Friend
import Friend from './Friend'

export default function FriendsList(props) {
  // 2- What data does FriendsList need to do its job? Use destructuring
  const { friends, changeStatus } = props

  return (
    <div className='list-friends container'>
      {/* 3- We need to loop over the data rendering a Friend as we go */}
      {/* Each friend is going to need a key prop and also some other prop(s) with data
          It's up to us to decide how to design Friend, what API it should have,
          what props it should consume. */}
      {
        friends.map(fr => {
          return <Friend key={fr.id} friend={fr} changeStatus={changeStatus} />
        })
      }
    </div>
  )
}
