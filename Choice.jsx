import React, { Component } from 'react'
import {Grid, Paper, Typography,Box, Button} from '@mui/material'
import { Link } from 'react-router-dom'

export default class Choice extends Component {
  render() {
    return (
      <div style={{backgroundImage:'url(../pic2.jpg)',height:'150vh',
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'01'}}>
      <Typography><h1 align="center">WHAT'S NEXT ?</h1></Typography>
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
                        src="https://images.unsplash.com/photo-1536489885071-87983c3e2859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                        alt="Food"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                  <Link to="../Food">
                    <Button variant="contained" color="info">FOOD</Button>
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
                        borderRadius:'50%'
                      }}
                        alt="Accomodation"
                        src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWNjb21vZGF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                  <Link to="../Accomodation">
                    <Button variant="contained" color="info">ACCOMODATION</Button>
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
                        borderRadius:'50%'
                      }}
                        alt="Basic needs"
                        src="https://images.unsplash.com/photo-1548104144-32c5171cf929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cGVyJTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                  <Link to="../Basicneeds">
                    <Button variant="contained" color="info">BASIC NEEDS</Button>
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
                        borderRadius:'50%'
                        }}
                        src="https://images.unsplash.com/photo-1630395822970-acd6a691d97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                        alt="Entertainment"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                  <Link to="../Entertainment">
                    <Button variant="contained" color="info">ENTERTAINMENT</Button>
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
                        borderRadius:'50%'
                      }}
                        alt="Transport"
                        src="https://images.unsplash.com/photo-1522482178516-7a04ae0dce7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHRyYW5zcG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                  <Link to="../Transport">
                    <Button variant="contained" color="info">TRANSPORT</Button>
                  </Link>
                </Typography>
              </div>
            </div>
          </Paper>
          <Typography style={{marginLeft:'1200px',marginTop:'35px',padding:'0px'}}>
                <Link to="../Destination">
                    <Button variant="contained" size="large" color='secondary'>BACK</Button>
                  </Link>
          </Typography>
        </Grid>
      </div>
    )
  }
}
