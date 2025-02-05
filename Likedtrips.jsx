import React, { Component } from 'react'
import {Grid,Typography,Paper,Box,Button} from '@mui/material';
import { Link } from 'react-router-dom';
export default class Myprofile extends Component {
    boxstyle={ marginBottom:'5px',marginLeft:'50px',height:'200px',width: '200px',opacity:'1',borderRadius:'5%',marginTop:'15px'}
    boxstyle1={marginBottom:'5px',marginLeft:'80px',marginTop:'15px',height:'200px',width: '200px',borderColor:'black', opacity:'1',borderRadius:'5%'}
    buttonstyle1={color:'#1E025F',backgroundColor:'#D885B1 ',borderColor:'#0480AB',marginLeft:'100px', marginTop:'2px',marginBottom:'20px',padding:'5px',align:'center'}
    buttonstyle={color:'#1E025F',backgroundColor:'#D885B1  ',borderColor:'#0480AB',marginLeft:'130px', marginTop:'2px',marginBottom:'20px',padding:'5px',align:'center'}
    buttonstyle2={color:'#F5F3E1',backgroundColor:'#F58484 ',borderColor:'#0480AB',marginLeft:'80px', marginTop:'15px',marginBottom:'15px',padding:'5px',align:'center',fontSize:'20px'}
    buttonstyle3={color:'#F5F3E1',backgroundColor:'#F58484 ',borderColor:'#0480AB',marginLeft:'1300px', marginTop:'10px',marginBottom:'10px',padding:'5px',align:'center',fontSize:'15px'}
  render() {
    return (
      <div style={{backgroundImage:'url(../likedbg.jpg)',height:'100vh',
      marginTop:'0px',padding:'0px',fontSize:'50px',backgroundSize:'cover',backgroundRepeat:'no-repeat',opacity:'0.95'}}>
        <Grid style ={{padding:'50px'}}>
                <Typography>
                    <h1 style={{margin:'10px',fontFamily:'serif',fontStyle:'revert-layer',align:'center',marginTop:'25px',color:'#7A1038 '}}>LIKED TRIPS</h1>
                    <br/>
                    <Paper style={{opacity:'0.8',backgroundcolor:'#CDE5F3',padding:'15px',marginTop:'30px'}}>
                            <div style={{align:'center',display:'inline-block'}}>
                                <Box 
                                    sx= {{
                                        display: 'flex',
                                        flexDirection:'row',
                                        alignItems: 'center',
                                        marginTop:'15px'
                                    }} >
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle}
                                        src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                        <br/>
                                        <Link to='../Whatsnext'>
                                            <Button variant="text" sx={this.buttonstyle1}>MANALI</Button>
                                        </Link>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                        <br/>
                                        <Link to='../Whatsnext'>
                                            <Button variant="text" sx={this.buttonstyle}>GOA</Button>
                                        </Link>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src="https://images.unsplash.com/photo-1631102006950-64c80c08681e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxsb3JhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                        <br/>
                                        <Link to='../Whatsnext'>
                                            <Button variant="text" sx={this.buttonstyle}>ELLORA</Button>
                                        </Link>
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src="https://media.istockphoto.com/id/1137765360/photo/morning-sunrise-in-sunderbans-delta-west-bengal.jpg?b=1&s=170667a&w=0&k=20&c=ql-GSAGhZsTGLHMBXQbBLs4M_XrGFGEtFpNO6wg8OYE="/>
                                        <br/>
                                        <Link to='../Whatsnext'>
                                            <Button variant="text" sx={this.buttonstyle}>SUNDERBANS</Button>
                                        </Link>
                                </div>
                                {/* <div>
                                    <Box
                                        component="img"
                                        sx={this.boxstyle1}
                                        src ="https://images.unsplash.com/photo-1569157087866-f4a8e9250605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9uZGljaGVycnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                                        <br/>
                                        <Link to='../Whatsnext'>
                                            <Button variant="text" sx={this.buttonstyle}>PONDICHERRY</Button>
                                        </Link>

                                </div> */}
                                </Box>
                            </div>
                    </Paper>
                    <Link to= '../Destination'>
                        <Button variant="text" sx={this.buttonstyle2}>PLAN A TRIP</Button>
                    </Link>
                    <h1 style={{color:'#FCFAE9'}}>Jobs fill your pockets, Travel fills your soul !!</h1>
                    <Link to="../Myprofile">
                    <Button variant="text" sx={this.buttonstyle3}size="large" color='secondary'>BACK</Button>
                  </Link>
                </Typography>
            
        </Grid>
      </div>
    )
}
}
