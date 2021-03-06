import React from 'react'
import MIT from '../assets/me.jpg'
import Oculus from '../assets/oculus.jpg'
import Christmas from '../assets/christmas.png'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core';
const Welcome: React.FC = () => {

    const items = ['Coding', 'Robotics', 'Reading', 'Watching Sports', 'Running'];
    
    return (
        <div style={{ paddingTop: 85, backgroundColor: '#1F2833'}} >
            <Container>
                <div className='name-intro' style={{ marginBottom: 50 }}>
                    <Typography align={'center'} variant='h1' style={{ fontWeight: 'bold', marginTop: 15, marginBottom: 15, color: '#66FCF1', fontFamily: 'Montserrat' }}>WELCOME</Typography>
                </div>
            </Container>
            <div>
                <Container>
                    <div className='flex-container'>
                        <img src={Christmas} style={{ height: '35%', width: '50%' }} />
                        <div className='title-box' style={{ width: 550, marginTop: 30 }}>
                            <td className='image-container'>
                                <CardContent>
                                    <Typography variant='h6' align={'center'} style={{ fontWeight: 'bold', color: '#C5C6C7', fontFamily: 'Work Sans'}}>Passionate, Driven, Motivated</Typography>
                                    <Typography variant='body1' style={{ marginTop: 13, fontSize: 17, color: '#C5C6C7', fontFamily: 'Work Sans' }}>Hi, I'm Alfonso and these are a couple of adjectives that I would use to describe myself. I participate in a lot of activities and I have a lot of hobbies, some of my favorites include:</Typography>
                                    {items.map((item: string) => (
                                        <li style={{ fontSize: 17, marginTop: 7, marginLeft: 10, color: '#C5C6C7', fontFamily: 'Work Sans'}}>{item}</li>
                                    ))}
                                    <Typography variant='body1' style={{ marginTop: 13, fontSize: 17, color: '#C5C6C7' , fontFamily: 'Work Sans'}}>I could go on about all the things I like to do and my favorite books, movies, and artists. Anyways, this website focuses
                        on a lot of the cool things I am doing, I hope you take a look and enjoy!</Typography>
                                </CardContent>
                            </td>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}


export default Welcome