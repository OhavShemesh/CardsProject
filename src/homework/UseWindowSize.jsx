import React from 'react'
import useWindowSize from './hooks/useWindowSize'
import { Box, Button, Container, Typography } from '@mui/material'

export default function UseWindowSize() {

    const { width, heigth, handleHeightMinus, handleHeightPlus, handleWidthMinus, handleWidthPlus } = useWindowSize()

    return (
        <Container sx={{ display: "flex", gap: 10 }}>
            <Box sx={{ border: "2px solid black", width: `${width}vw`, height: `${heigth}vw` }}></Box>
            <Box>
                <Button variant='contained' onClick={handleWidthPlus}>+</Button>
                <Typography>Width: {width}</Typography>
                <Button variant='contained' onClick={handleWidthMinus}>-</Button>
            </Box>
            <Box>
                <Button variant='contained' onClick={handleHeightPlus}>+</Button>
                <Typography>Heigth: {heigth}</Typography>
                <Button variant='contained' onClick={handleHeightMinus}>-</Button>
            </Box>
        </Container >
    )
}
