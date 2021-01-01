import React from 'react'

import ReactInput from 'react-input'
import 'react-input/dist/index.css'

const App = () => {
  const onChange = (value: string) => {
    console.log(value)
  }
  return <ReactInput value='test' onChange={onChange} />
}

export default App
