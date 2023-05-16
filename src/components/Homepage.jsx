import { TableContainer,Table,TableHead,TableRow,TableCell,TableBody, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Homepage = () => {

    var[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
        console.log(response.data);
        setData(response.data)
    })
    },[])

  return (
    <div>
        <br /><br /><br /><br /><Typography variant='h5' color="secondary">ID & TITLE INFORMATION</Typography>
        <TableContainer >
            <Table sx={{maxWidth:650}} align="center">
                <TableHead>
                    <TableRow>                    
                        <TableCell ><Typography variant='h6' color="secondary">Id</Typography></TableCell>
                        <TableCell ><Typography variant='h6' color="secondary">Title</Typography></TableCell>               
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((value,index)=>{
                            return(
                                <TableRow key={index}>                           
                                    <TableCell>{value.id}</TableCell>
                                    <TableCell>{value.title}</TableCell>
                                
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Homepage