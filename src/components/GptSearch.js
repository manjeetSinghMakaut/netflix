import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'

const GptSearch = () => {
  return (
    <div className=' bg-black min-h-screen overflow-x-hidden pt-28 md:pt-20'>
      <GptSearchBar />
      <GptMoviesSuggestions/>

    </div>
  )
}

export default GptSearch
 