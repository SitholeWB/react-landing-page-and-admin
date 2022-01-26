import React from 'react';
import Header from './Header';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import bulb from '../assets/img/bulb1.png';
import {Link} from 'react-router-dom';


const LandingPage = () => (
  <div className="landingPagebodyComponent">

<br/>
<Typography variant="h6" gutterBottom align="center">
        Welcome to Rect Company
      </Typography>
    
   <Grid container spacing={2} >
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom align="center">
          There are around 700 separate programming languages
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom align="left" style={{paddingLeft:20}}>
        {`
         Amongst this list, some of the most popular languages are Javascript, Swift, Scala, Python, PHP, Go, Rust, Ruby, and C#, with millions of users utilizing them in both their careers and personal projects. However, new programming languages are constantly being created.
        `}
        <Link to="/start"> <Button color="primary"  align="left" style={{marginLeft:20}}>
        Get Started
      </Button></Link>

       <Button color="primary"  align="left" style={{marginLeft:20}}>
        Know More
      </Button>
      </Typography>
        </Grid>
         <Grid item xs={6}>
          <Image
        src={bulb}
      color="inherit" style={{height:40}} imageStyle={{ width: '50', height: '50' }} />
        </Grid>
        <Grid item xs={12}>
         
        </Grid>
       {/* <Grid item xs={6}>
          <Paper >xs=6</Paper>
        </Grid>*/}
        </Grid>

     <Grid container spacing={2} >
        <Grid item xs={12} md={12}>

          </Grid>
          </Grid>

  </div>
);

export default LandingPage;