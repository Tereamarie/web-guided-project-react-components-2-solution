import React from 'react'

export default function Search({ setSearchTerm }) {
  // On 'change' of the input we should set a new search term in app state
  const changeHandler = event => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)
  }

  return (
    <div className='search-friends container'>
      Search for a friend: <input onChange={changeHandler} />
    </div>
  )
}
