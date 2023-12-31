import React from 'react'
import SearchBar from '../../components/Home/Searchbar'
import FilterPanel from '../../components/Home/FilterPanel'
import List from '../../components/Home/List'

const Home = () => {
  return (
    <div className='home'>
        <SearchBar  />
        <div className="home_panelList-wrap">
            <div className="home_panel-wrap">
        <FilterPanel  />
        </div>
        <div className="home_panel-wrap">
        <List  />
        </div>
        </div>
    </div>
  )
}

export default Home