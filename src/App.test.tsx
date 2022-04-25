import { render, screen } from '@testing-library/react'

import App from './App'
import React from 'react'

describe('화면 기본 구성', () => {
  render(<App />)
  const linkElement = screen.getByText(/Layout/i)
  expect(linkElement).toBeInTheDocument()
})
