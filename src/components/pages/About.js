import React, { useState } from 'react'
import ReactPlayer from 'react-player';
  import '../About.css';
//  import '../App.css';
import Typography from '@material-ui/core/Typography'
import {makeStyles,ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import images from '../../images/plain.jpeg';
import images2 from '../../images/AdobeStock.jpeg';
import myVideo from '../../videos/about.mp4'

const useStyles = makeStyles({
  root:{maxWidth: 400,
  },
  media: {
    height: 140,
  },
});


// paper:{
//   backgroundColor:'blue'
// }
// })
 const theme = createMuiTheme({
   typography: {
     h2: {
       fontFamily: 'Helvetica',
       fontSize: 57,
       marginBotton: 10
     },
     subtitle1:{
      fontFamily: 'Helvetica',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '25px'
     }
   }
 })
 export default function About() {
  const classes = useStyles();
   return (

  <ThemeProvider theme={theme}>
 
    <Container maxWidth='md'>
     <div  
     className="about-container">

       {/* <video src='/videos/about.mp4' autoPlay loop muted />  */}
       <Typography variant='h2' component='div'>
        Embark on an Adventure
       </Typography>
       <Typography variant='subtitle1'>
       Air travelo makes travel accessible,allowing more people to 
       visit new places and explore new cultures. Our goal is to provide 
       travellers with the cheapest flights available along with optimal
       itineraries and exceptional customer service.
       </Typography>
       {/* <Grid container spacing={5} justify="center">
       <Grid item md={12}>
         <Paper style={{ height:300,width:200 }}/>
         </Grid>
       </Grid>

       <Grid container  >
       <Grid item>
         <Paper style={{ height:300,width:200}}/>

         </Grid>

       </Grid>
       <Grid  >
       <Grid item>
         <Paper style={{ height:300,width:200}}/>

         </Grid>
       </Grid> */}
      
       <ul>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={images}
          title="Contemplative Airplane"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            My Vision
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
          My Vision is to give courage and encourage each one of us to stay curious and be open-minded so we can all enjoy a better, more diversified world.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="Secondary">
          Share
        </Button>
        <Button size="small" color="Secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </ul> 
       
 <div className="w3-half w3-container w3-large w3-text-grey"> 
 
 </div>
 <ul>
 <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={images2}
          title="Contemplative Airplane"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            About
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
          Air Travelo Helps Travelers book flights,One Click and you're Taken directly to your chosen site where the booking is completed.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="Secondary">
          Share
        </Button>
        <Button size="small" color="Secondary">
         Learn More
        </Button>
      </CardActions>
    </Card>
    </ul>
  </div>  

  
 </Container>

 </ThemeProvider>
   
   )
 }
