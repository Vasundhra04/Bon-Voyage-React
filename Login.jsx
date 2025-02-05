import React, { Component } from 'react'
import { Grid, Paper, TextField, Typography,Button} from '@mui/material'
import { Link } from 'react-router-dom'

export default class Login extends Component {

  render() {
    return (
      <div style={{backgroundImage:'url(../pexels7.jpg)',height:'150vh',
      
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'1'}}>
        <Grid align="center" padding={"100px"}>
           <Paper variant='outlined' style={{width:'400px', borderRadius:'20px' ,opacity:'0.5'}}>
            <Typography>
                <h1 align="center" padding={"80px"}>LOGIN</h1>
              </Typography> 
           <TextField  label="UserName" type="text" placeholder='Enter your name' variant='outlined' required style={{marginTop:"40px"}}></TextField>
           <br/>
           <br/>
           <TextField  label="PassWord" type="Password" placeholder='Enter your password' variant='outlined' required></TextField>
           <br/>
           <br/>
        </Paper>
        <Link to='profile'>
        <Button variant="contained" size="large" color="info">Login</Button>
        </Link>

        <Typography>
          <Link to='Signup'>
            <Button><h4 style={{marginTop:"10px",color:"beige"}} align="center" >Don't Have An Account? SignUp</h4></Button>
          </Link>
          <div>
            <Link to='Reset'>
              <Button><h4 style={{marginTop:"10px",color:"beige"}} align="center" >Reset Password</h4></Button>
            </Link>
          </div>
          
        </Typography>
        </Grid>
        </div>
    )
  }
}
