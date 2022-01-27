import React from 'react';
import Header from './Header';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import bulb from '../assets/img/bulb1.jpg';
import {Link} from 'react-router-dom';


const LandingPage = () => (
  <div className="landingPagebodyComponent" style={{  
    backgroundImage: "url(" + bulb + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}>

<br/>
<Typography variant="h6" gutterBottom align="center">
There are around 700 separate programming languages
      </Typography>
    <br />
    <br />
    <br />
   <Grid container spacing={2} >
          <Typography gutterBottom align="center" >
        {`
         Amongst this list, some of the most popular languages are Javascript, Swift, Scala, Python, PHP, Go, Rust, Ruby, and C#, with millions of users utilizing them in both their careers and personal projects. However, new programming languages are constantly being created.
        `}
      </Typography>
  


        </Grid>

  </div>
);

export default LandingPage;