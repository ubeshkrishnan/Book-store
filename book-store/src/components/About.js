import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3" sx={{fontFamily:"fantasy"}}>
                    This is a CRUD Application for Books
            </Typography>
            <Typography variant="h4" sx={{fontFamily:"fantasy"}}>
                   By MERN STACK
            </Typography>
        </Box>
    </div>
  )
}

export default About