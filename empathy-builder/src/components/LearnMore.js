import React from 'react';
import Footer from "./Footer";

import styled from "styled-components";
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Image = styled.img`
    max-width: 300px;
`

const Container = styled.div`
margin-top: 100px;

`

const H1 = styled.h1`
    font-size: 3rem;
`

export default function LearnMore() {

  return (
    <Container>
     <H1>Resources</H1>

      <Card>
        <CardActionArea>
          <CardMedia>
            <img src={require('../images/undraw_heartbroken_cble.svg')} alt='woman with purple heart-shaped balloon'/>
          </CardMedia>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>


      <Footer/>
    </Container>
  )

}