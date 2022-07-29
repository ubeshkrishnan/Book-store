import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <Box display={'flex'} flexDirection={'column'} alignItems='center'>
        <Button LinkComponent={Link} to="/books" variant="contained" sx={{marginTop: 15, backgroundColor:'#1b3657'}}>
            <Typography variant='h5'> View All Products
        </Typography> 
     </Button>
       </Box>
    </div>
  )
}

export default Home