import React from 'react'
import './board.css'
import { Box } from './box/Box';

export const Board = ({ board, onClick}) => {
  return (
      <div className='board'>
          {/* iterate through list and map it to box component */}
          {board.map((value, index) => {
              return <Box value={value} onClick={() => value === null && onClick(index)} />
          })}
          
          </div>
  )
}
