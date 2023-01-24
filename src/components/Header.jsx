import React from 'react'

const Header = () => {
  return (
    <div className='heading'>
        <div >
        <form className="search-bar">
            <div className="site-name">
                <h1 className="site">Splash</h1>
                <p className="para">
                    your source of high quality photos
                </p>
            </div>
          <input
            className="head-search"
            type="search"
            placeholder="Search for high quality photos.. "
          />
        </form>
        </div>
    </div>
  )
}

export default Header