import React, { useState } from 'react'

export default function Pet(props) {
  const { pet } = props
  const [fav, setFav] = useState(false)

  return (
    <div className='pet-friends container'>
      <h4>{pet.name} ({pet.type})</h4>
      {fav ? '❤️' : <button onClick={() => setFav(true)}>fav</button>}
    </div>
  )
}

{/* <Pet pet={{ name: 'goldfish', type: 'fish' }} /> */}
