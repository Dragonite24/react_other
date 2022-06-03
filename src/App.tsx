import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './rootReducer'

function App() {
  const store = useSelector((store: RootState) => store)
  const dispatch = useDispatch()
  console.log(store)

  return (
    <div>
      <button onClick={() => dispatch({ type: 'CLICK' })}>Users:</button>
    </div>
  )
}

export default App
