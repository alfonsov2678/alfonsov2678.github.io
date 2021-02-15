import React from 'react'
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Linkedin from '..//assets/linkedin.png'
import Instagram from '..//assets/instagram.png'
import Facebook from '..//assets/facebook.png'
import GitHub from '..//assets/github.svg'
import Gmail from '..//assets/gmail.png'
import Twitter from '..//assets/twitter.png'
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        flexGrow: 1,
      },
})) 

export default function SocialMedia() {
    const classes = useStyles()
    return (
            <div>
                <Typography align={'center'} style={{marginTop: 25, fontSize: 30, fontWeight: 'bold', color: '#C5C6C7', fontFamily: 'Work Sans'}}>SOCIAL MEDIA</Typography>
                <Typography variant='h6' align={'center'} style={{fontSize: 17, marginTop: 5, color: '#C5C6C7', fontFamily: 'Work Sans'}}>If you want to chat, add me on the following platforms</Typography>
                <div className='social-container'>
                    <RenderIcon image={Linkedin} title='Linkedin' link='https://www.linkedin.com/in/alfonso-velasco-21b3aa19b/'/>
                    <RenderIcon image={GitHub} title='Github' link='https://github.com/alfonsov2678' />
                    <RenderIcon image={Facebook} title='Facebook' link='https://www.facebook.com/profile.php?id=100010977044023' />
                    <RenderIcon image={Instagram} title='Instagram' link='https://www.instagram.com/alfonsovelasco08/'/>
                    <RenderIcon image={Twitter} title='Twitter' link='https://twitter.com/alfonsoV2678'/>
                    <RenderIcon image={Gmail} title='Gmail' link='mailto:alfonsoluisvelasco@gmail.com'/>
                </div>

            </div>
    )
}

function RenderIcon(props: any) {
    // render the icon for display in the social page
    return (
        <Tooltip title={props.title}>
            <div className='social-box'>
            <Avatar  src={props.image} alt={props.title} style={{width: 52, height: 52, backgroundColor: 'white', margin: 'auto'}} onClick={() => OpenSocial(props.link)}/>
            </div>      
        </Tooltip>
    )
}

function OpenSocial(url: any) {
    const win = window.open(url)
    win!.focus()
}