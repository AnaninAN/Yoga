import './App.css'

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { routes } from './routes'
import { MAIN_ROUTE } from './utils/consts'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route path={path} element={element} key={index} />
          ))}
          <Route path="/*" element={<Navigate replace to={MAIN_ROUTE} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
