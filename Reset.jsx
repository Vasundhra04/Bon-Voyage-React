import React, { Component } from 'react'
import {Grid, Paper, TextField, Typography,Button} from '@mui/material'
import  {Link} from 'react-router-dom'

export default class Login extends Component {

  render() {
    return (
      <div style={{backgroundImage:'url(../pexels4.jpg)',height:'100vh',
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'1'}}>
        <Grid align="center" padding={"100px"}>
           <Paper variant='outlined' style={{width:'500px',height:'400px', borderRadius:'20px' ,opacity:'0.5'}}>
            <Typography>
                <h1 align="center" padding={"5px"}>Reset Password</h1>
              </Typography> 
              <TextField  label="Email" type="email" placeholder='Enter your email' variant='outlined' required></TextField>
           <br/>
           <TextField  label="New Password" type="password" placeholder='Enter your password' variant='outlined' required></TextField>
           <br/>
           <TextField  label="Confirm Password" type="password" placeholder='Enter your password' variant='outlined' required></TextField>
        </Paper>
        <Link to="/">
        <Button><h2 style={{color:'white'}}>DONE</h2></Button>
        </Link>
        </Grid>
        </div>
    )
  }
}