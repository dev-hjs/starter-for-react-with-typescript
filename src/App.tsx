import { Route, Routes } from 'react-router-dom'

import Layout from './components/layouts/Layout'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}></Route>
      </Routes>
    </div>
  )
}

export default App
