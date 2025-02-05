import React, { Component } from 'react'
import {Grid, Paper, Typography,Box,Button} from '@mui/material'
import  {Link} from 'react-router-dom'


export default class Choice extends Component {
  render() {
    return (
      <div style={{backgroundImage:'url(../pexels8.jpg)',height:'150vh',
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'01'}}>
      <Typography><h1 align="center">ENJOY THE WORLD</h1></Typography>
        <Grid align="center" padding={"10px"} marginBottom="100px">
          <Paper variant='outlined' style={{width:'1200px',height:'710px', borderRadius:'20px' ,opacity:'0.7'}}>
            <Typography style={{fontFamily:'cursive',color:'#993333'}}><h2>CHOOSE YOUR DESTINATION</h2></Typography>
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
                        src="https://c4.wallpaperflare.com/wallpaper/858/348/52/kettuvallam-houseboat-kerala-india-wallpaper-preview.jpg"
                        alt="KERALA"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                  <Link to="../Choice"><Button variant="contained" sx={{color:'#ffffff',backgroundColor:'#000000',fontFamily:'initial'}}>KERALA</Button></Link></Typography>
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
                        src="https://wallpaperaccess.com/full/2142721.jpg"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}>
                <Link to="../Choice"><Button variant="contained" sx={{color:'#ffffff',backgroundColor:'#000000',fontFamily:'initial'}}>HYDERABAD</Button></Link></Typography>
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
                        src="https://w0.peakpx.com/wallpaper/931/708/HD-wallpaper-switzerland-zurich-lake-clouds-trees-mountains-nature-thumbnail.jpg"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Link to="../Choice"><Button variant="contained" sx={{color:'#ffffff',backgroundColor:'#000000',fontFamily:'initial'}}>SHIMLA</Button></Link></Typography>
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
                        src="data:image/jpeg;base64,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" 
                        alt="delhi"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Link to="../Choice"><Button variant="contained" sx={{color:'#ffffff',backgroundColor:'#000000',fontFamily:'initial'}}>DELHI</Button></Link></Typography>
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
                        src="https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGthc2htaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Link to="../Choice"><Button variant="contained" sx={{color:'#ffffff',backgroundColor:'#000000',fontFamily:'initial'}}>KASHMIR</Button></Link></Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      </div>
    )
  }
}
