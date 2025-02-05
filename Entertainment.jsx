import React, { Component } from 'react'
import {Grid, Paper, Typography,Box,Button} from '@mui/material'
import { Link } from 'react-router-dom' 

export default class Entertainment extends Component {
  render() {
    return (
      <div style={{backgroundImage:'url(../enterbg1.jpg)',height:'110vh',
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'01'}}>
      <Typography>
        <h1 align="center" style={{color:"beige"}}>ENTERTAINMENT</h1>
        {/* <h5 align="center">How do you wish to spend your time?</h5> */}
      </Typography>
        <Grid align="center" padding={"50px"} marginBottom="100px">
          <Paper variant='outlined' style={{width:'1200px',height:'660px', borderRadius:'20px' ,opacity:'0.7'}}>
            <div style={{display: 'flex',
                  flexWrap: 'wrap',
                  padding: '0px 4px'}}>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        display:'inline-block',
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'10%'
                      }}
                        src="https://images.pexels.com/photos/54581/escalator-stairs-metal-segments-architecture-54581.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Mall"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                  <Link to = '../Malldetails'>
                  <Button variant="contained" color="warning">MALL</Button>
                  </Link>
                </Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'10%'
                      }}
                        alt="Theatre"
                        src="https://images.unsplash.com/photo-1568772472528-9f7f5795e094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRoZWF0cmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                <Link to = '../Malldetails'>
                  <Button variant="contained" color="warning">THEATRE</Button>
                  </Link>
                </Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'10%'
                      }}
                        alt="Theme Park"
                        src="https://images.pexels.com/photos/2840896/pexels-photo-2840896.jpeg?auto=compress&cs=tinysrgb&w=600"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                <Link to = '../Malldetails'>
                  <Button variant="contained" color="warning">THEME PARK</Button>
                  </Link>
                </Typography>
              </div>
            </div>
            <div style={{display: 'flex',
                  flexWrap: 'wrap',
                  padding: '0px 170px'}}>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        display:'inline-block',
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'10%'
                        }}
                        src="https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Fun Zone"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                <Link to = '../Malldetails'>
                  <Button variant="contained" color="warning">FUN ZONE</Button>
                  </Link>
                </Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'10%'
                      }}
                        alt="Adventure"
                        src="https://images.pexels.com/photos/3413678/pexels-photo-3413678.jpeg?auto=compress&cs=tinysrgb&w=600"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                <Link to = '../Malldetails'>
                  <Button variant="contained" color="warning">ADVENTURE</Button>
                  </Link>
                </Typography>
              </div>
            </div>
          </Paper>
          <Typography style={{marginLeft:'1200px',marginTop:'35px',padding:'0px'}}>
                <Link to="../Malldetails">
                    <Button variant="contained" size="large" color='secondary'>BACK</Button>
                  </Link>
                </Typography>
        </Grid>
      </div>
    )
  }
}