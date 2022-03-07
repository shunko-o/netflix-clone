import React from 'react'
import './Banner.css'

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header className='banner'
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
      backgroundPosition: "center center",
    }}
    >
      <div className='banner__contants'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(`this is banner descriptionthis is banner description
          this is banner descriptionthis is banner description
          this is banner descriptionthis is banner description
          this is banner descriptionthis is banner description
          this is banner descriptionthis is banner description
          this is banner descriptionthis is banner description
          this is banner descriptionthis is banner description
          this is banner descriptionthis is banner description
          this is banner descriptionthis is banner description`, 150)}
        </h1>
      </div>

      <div className='banner--fadeBottom'/>
    </header>
  )
}

export default Banner
