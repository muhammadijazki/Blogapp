import { AppBar, Button, Container, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar color='secondary'>
            <Container>
                <Toolbar>
                    <Typography
                         variant="h6"
                         noWrap
                         component="a"
                         href="/"
                         sx={{
                           mr: 40,
                           display: { xs: 'none', md: 'flex' },
                           fontFamily: 'monospace',
                           fontWeight: 700,
                           letterSpacing: '.3rem',
                           color: 'inherit',
                           textDecoration: 'none',
                         }}
                       >
                         Welcome to our COMMUNITY</Typography>
                         <Button ><Link to={'/'} style={{color:"white",textDecoration:"none"}}><b>Home</b></Link></Button>
                         <Button ><Link to={'/form'} style={{color:"white",textDecoration:"none"}}><b>Add-Blogs-Links</b></Link></Button>                       
                         

                </Toolbar>
            </Container>
        </AppBar>

       
    </div>
  )
}

export default Navbar