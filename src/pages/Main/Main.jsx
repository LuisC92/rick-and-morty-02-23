import React from 'react'
import {Routes, Route} from "react-router-dom"
import AboutUs from '../AboutUs/AboutUs'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
import CharacterList from '../CharacterList/CharacterList'
import HomePage from '../HomePage/HomePage'

const Main = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/characters-list" element={<CharacterList />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
        </Routes>
    </>
  )
}

export default Main