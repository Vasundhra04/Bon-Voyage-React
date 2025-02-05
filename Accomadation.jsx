import React, { Component } from 'react'
import {Grid, Paper, Typography,Box,Button} from '@mui/material'
import { Link } from 'react-router-dom'

export default class Accomodation extends Component {
    hstyle={margin:'10px',align:'center',color:'beige',fontSize:'50px',fontFamily:'serif'}
    boxstyle={display:'inline-block',marginTop:'40px',height:'200px',width: '200px',opacity:'1',borderRadius:'50%'}
    divstyle={flex: '10%', padding: '0 4px'}
    typostyle={marginRight:'10px',marginBottom:'10px',padding:'0px'}
  render() {
    return (
        <div style={{backgroundImage:'url(../acc.jpg)',height:'150vh',
        marginTop:'0px',padding:'0px',fontSize:'50px',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',opacity:'01'}}>
            <br/>
        <Typography><h1 align="center" style={this.hstyle}>ACCOMODATION</h1></Typography>
          <Grid align="center" padding={"50px"} marginBottom="100px">
            <br/>
            <Paper variant='outlined' style={{width:'1200px',height:'660px', borderRadius:'20px' ,opacity:'0.85'}}>
              <div style={{display: 'flex',flexWrap: 'wrap',padding: '0px 4px'}}>
                <div style={this.divstyle}>
                  <Box 
                      component="img"
                      sx={this.boxstyle}
                          src="https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGVydmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                          alt="camper"
                  />   
                  <Typography style={this.typostyle}><Button variant="contained" color="primary">CAMPER VAN STAY</Button></Typography>
                </div>
                <div style={this.divstyle}>
                  <Box 
                      component="img"
                      sx={this.boxstyle}
                          alt="resort"
                          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />   
                  <Typography style={this.typostyle}><Button variant="contained" color="primary">RESORT STAY</Button></Typography>
                </div>
                <div style={this.divstyle}>
                  <Box 
                      component="img"
                      sx={this.boxstyle}
                          alt="Boat"
                          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhJTIwYmFja3dhdGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />   
                  <Typography style={this.typostyle}><Button variant="contained" color="primary">BOAT HOUSE STAY</Button></Typography>
                </div>
              </div>
              <div style={{display: 'flex',
                    flexWrap: 'wrap',
                    padding: '0px 170px'}}>
                <div style={this.divstyle}>
                  <Box 
                      component="img"
                      sx={this.boxstyle}
                          src="https://images.unsplash.com/photo-1605443618061-e2ec80097df1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y290dGFnZSUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                          alt="cottage"
                  />   
                  <Typography style={this.typostyle}><Button variant="contained" color="primary">COTTAGE STAY</Button></Typography>
                </div>
                <div style={this.divstyle}>
                  <Box 
                      component="img"
                      sx={this.boxstyle}
                          alt="hotel"
                          src="https://cdn.pixabay.com/photo/2014/05/18/19/15/walkway-347319__340.jpg"
                  />   
                  <Typography style={this.typostyle}><Button variant="contained" color="primary">HOTEL STAY</Button></Typography>
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
