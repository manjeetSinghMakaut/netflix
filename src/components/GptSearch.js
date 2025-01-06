import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'

const GptSearch = () => {
  return (
    <div className=' bg-black min-h-screen justify-center flex-col p-5 overflow-x-hidden pt-28 md:pt-20'>
      <GptSearchBar />
      <GptMoviesSuggestions/>

    </div>
  )
}

export default GptSearch
 