import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'

const GptSearch = () => {
  return (
    <div className=' bg-black min-h-screen'>
      <GptSearchBar />
      <GptMoviesSuggestions/>

    </div>
  )
}

export default GptSearch
 