import React from 'react'
import Profile from '../assets/profile.png'
import University from '../assets/university.png'
import Computer from '../assets/computer.gif'
import Eighteen from '../assets/eighteen.png'
import Chelsea from '../assets/chelsea.jpg'
import KidCudi from '../assets/kidCudi.png'
import Inception from '../assets/inception.jpg'
import Austin from '../assets/austin.webp'
import Knicks from '../assets/knicks.jpg'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1 px solid red'
    },
    media: {
        height: 175,
      },
    img: {
        height: 175,
    }
  }));
  
export default function About() {
    // Render the about page for the website
    return (
            <div style={{paddingTop: 125}}>
                <div className='header-img'>
                    <Avatar src={Profile} alt='Alfonso Velasco' style={{width: 275, height: 275, margin: 'auto'}}/>
                </div>
                <Typography  align={'center'} style={{marginTop: 25, fontSize: 30, fontWeight: 'bold'}}>ME</Typography>
                <Typography variant='h6' align={'center'} style={{marginTop: 0, fontFamily: 'italic'}}>Hi, I'm Alfonso and I'm a passionate creator</Typography>
                <Typography variant='h5' align={'center'} style={{marginTop: 25, marginBottom: 25, fontWeight: 'bold'}}>A Quick Rundown</Typography>
                <div className='flex-container'>
                    <InfoCard text='I attend Columbia University' image={University} title='Columbia Univeristy'/>
                    <InfoCard text='I study Computer Science' image={Computer} title='Computer Science'/>
                    <InfoCard text='I am eighteen years old' image={Eighteen} title='Eighteen'/>
                    <InfoCard text='I am a huge Chelsea FC fan' image={Chelsea} title='Chelsea FC'/>
                </div>
                <div className='flex-container'>
                    <InfoCard text='Kid Cudi is my favorite artist' image={KidCudi} title='Kid Cudi'/>
                    <InfoCard text='Inception is my favorite movie' image={Inception} title='Inception'/>
                    <InfoCard text='I am from Austin, Texas' image={Austin} title='Home'/>
                    <InfoCard text='My favorite basketball team is the New York Knicks' image={Knicks} title='GOOO KNICKS'/>
                </div>
            </div>
    )
}

function InfoCard(props: any) {
    // Render a reusable component for the info card
    const classes = useStyles()
    return (
        
            <div className='fun-fact' style={{width: 250, height: 240}}>
                <CardActionArea>
                    <img
                        className={classes.img}
                        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', height: 165, width: 175, marginTop: 10}}
                        src={props.image}
                        title={props.title}
                        />
                    <CardContent>
                        <Typography variant='h6' align={'center'} style={{fontSize: 16, fontWeight: 'bold'}}>{props.text}</Typography>
                    </CardContent>
                </CardActionArea>
            </div>
    )
}