import React from 'react'

export default function Search(props) {
  // STRETCH - What prop do we need to be able to change the value of
  // the search term (which is state that lives in the top-level component)?
  const { setSearchTerm } = props
  const changeHandler = event => {
    // STRETCH - On 'change' of the input we should set a new search term in app state
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)
  }

  return (
    <div className='search-friends container'>
      <input onChange={changeHandler} />
    </div>
  )
}
