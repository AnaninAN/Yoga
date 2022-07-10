import './App.css'

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { routes } from './routes'
import { MAIN_ROUTE } from './utils/consts'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route path={path} element={element} key={index} />
        ))}
        <Route path="/*" element={<Navigate replace to={MAIN_ROUTE} />} />
      </Routes>
      <Footer />
    </div>
  )
}
