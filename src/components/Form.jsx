import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div>
      <br /><br /> <br /><br /> <Typography variant="h3" color="secondary">Blog Form</Typography><br />
        <TextField label="Author Name" variant="filled" color="secondary"></TextField><br /><br />
        <TextField label="Blog Name" variant="filled" color="secondary"></TextField><br /><br />
        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          color='secondary'
        />

       <br /><br /> <Button variant="contained" color="secondary">Submit</Button>
    </div>
  )
}

export default Form