import React from 'react'
import { Box } from './box/Box';

export const Board = ({ board, onClick}) => {
  return (
      <div>
          {/* iterate through list and map it to box component */}
          {board.map((value, index) => {
              return <Box value={value} onClick={() => onClick(index)} />
          })}
          
          </div>
  )
}
