import React, { Component } from 'react'
import {Grid, Paper, Typography,Box,Button} from '@mui/material'
import { Link } from 'react-router-dom'

export default class Basicneeds extends Component {
  render() {
    return (
      <div style={{backgroundImage:'url("https://i2.wp.com/files.123freevectors.com/wp-content/original/202449-light-blue-plain-background.jpg)' ,height:'150vh',
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'01'}}>
      <Typography><h1 align="center" style={{color:"white"}}>BASIC NEEDS</h1></Typography>
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
                        borderRadius:'50%'
                      }}
                        src="Supermarket.jpg" 
                        alt="SUPERMARKET"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" color="info">SUPERMARKET</Button></Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        alt="HOSPITAL"
                        src="Hospital.jpg"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" color="info">HOSPITAL</Button></Typography>
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
                        borderRadius:'50%'
                        }}
                        src="petrol.jpg" 
                        alt="Petrol Bunk"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" color="info">PETROL BUNK</Button></Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        alt="ATM"
                        src="atm.jpg"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" color="info">ATM</Button></Typography>
              </div>
            </div>
          </Paper>
          <Typography style={{marginLeft:'1200px',marginTop:'35px',padding:'0px'}}>
                <Link to="../Choice">
                    <Button variant="contained" size="large" color='secondary'>BACK</Button>
                  </Link>
                </Typography>
        </Grid>
      </div>
    )
  }
}