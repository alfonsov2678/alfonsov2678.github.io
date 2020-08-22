import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Deal from '../assets/dealLogo.png'
import Proximity from '..//assets/proximity.png'
import GitHub from '..//assets/githubWhite.png'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import DealLogin from '..//assets/login.png'
import ProximityDemo from '..//assets/proximityDemo.png'
import Dialog from '@material-ui/core/Dialog';
import Argo from '..//assets/argo.png'
import Chad from '..//assets/chad.png'
import YouTube from '..//assets/youtube.png'
const Projects : React.FC = () => {
    const dealTechnology = ['React Native', 'Expo', 'TypeScript', 'NodeJS', 'Express', 'mySQL', 'Postman', 'Google Cloud', 'Google Material UI', 'Bcrypt']
    const proximityTechnology = ['React', 'mongoDB', 'mySQL', 'Postman', 'Google Cloud', 'Google Material UI', 'JSON Web Tokens']
    const proximityAchievements = ['USC Viterbi Innovation Bootcamp First Place (1/20 Teams)', 'NAE Incubator Company']
    const argoTechnology = ['Autodesk Inventor', 'Java', 'IntelliJ', 'CNC Router', '3D Printer']
    const argoAchievements = ['World Championships 4th Place', 'World Championships Connect Award Finalist', '2020 UIL State Robotics Champion', 'Texas Regional Championships 2nd Place', 'Texas Regional Championships Inspire Award 2nd', 'Austin Metro League Championships 2nd Place', 'Austin Metro League Inspire Award Winner']
    const chadTechnology = ['Autodesk Inventor', 'Java', 'IntelliJ', 'Odometry', 'GoBilda', 'CNC Router', 'Tensorflow', '3D Printer']
    const chadAchievements = ['Word Championships Qualifier (Canceled due to COVID-19 Pandemic)', 'UIL State Championship Qualifier (Canceled due to COVID-19 pandemic)', 'Texas Regional Championships First Selection', 'Texas Regional Championships Inspire Award 2nd', 'Austin Metro League First Alliance Captain', 'Austin Metro League Inspire Award 2nd Place']
    return (
        <div style={{paddingTop: 125}}>
            <Typography align={'center'} variant='h4' style={{fontWeight: 'bold', marginTop: 15, marginBottom: 15}}>PROJECTS</Typography>
            <div className='flex-container'>
                <Project title='Deal' text='Deal' image={Deal} imageHeight={'70%'} achievements={null}
                height={500}
                imageWidth={'25%'} popup={DealLogin} text2='Platform for card exchange and personal management' 
                width={450} link='https://github.com/alfonsov2678/deal'
                description='Deal is a platform for people to manage and increase their own personal image by providing various innovations within networking.'
                technology={dealTechnology}
                icon={GitHub}
                iconWidth={'11%'}
                iconHeight={40}
                />
                <Project title='Proximity' text='Proximity' imageHeight={'60%'} imageWidth={'70%'} 
                image={Proximity} popup={ProximityDemo} text2='Versatile distance based audio for conferencing' width={300} 
                link='https://github.com/alfonsov2678/proximity'
                description="Proximity is a distanced based audio scalable to millions of users that aims to create a closer connection to reality and each other."
                technology={proximityTechnology}
                achievements={proximityAchievements}
                icon={GitHub}
                iconWidth={'11%'}
                iconHeight={40}
                />
            </div>
            <div className='flex-container' style={{marginTop: 50}}>
                 <Project title='Argo' text='Argo' imageHeight={'60%'} imageWidth={'60%'} 
                image={Argo} popup={Argo} text2='Robot for the FTC 2018-2019 Rover Ruckus Season' width={415} 
                link='https://www.youtube.com/watch?v=byaKel4XQuE'
                description="Argo was the robot that my team competed with during the Rover Ruckus challenge. Some unique features of Argo include a PTO transmission system
                to shift motor usage between the drivetrain and lift, a 6 motor drive train, and an efficient sorter between minerals"
                technology={argoTechnology}
                achievements={argoAchievements}
                icon={YouTube}
                iconWidth={'7%'}
                iconHeight={40}
                />
                <Project title='Chad' text='Chad' imageHeight={'60%'} imageWidth={'60%'} 
                image={Chad} popup={Chad} text2='Robot for the FTC 2019-2020 SkyStone Season' width={425} 
                link='https://www.youtube.com/watch?v=6ZTlQrOAFVc'
                description="Chad was the robot that my team competed with during the Sky Stone challenge. Unique features on chad include the servo powered side claws on both sides of the robot, 
                a unique y-shaped intake, and a lift that could power up to 14 stones high."
                technology={chadTechnology}
                achievements={chadAchievements}
                icon={YouTube}
                iconWidth={'7%'}
                iconHeight={'40'}
                />
            </div>
        </div>
    )
}

function Project(props: any) {
    return (
        <div className='project' >
            <div className='project-title' style={{ backgroundColor: 'black', height: 50, width: '100%'}} >
                <Typography align={'center'} style={{color: 'white', fontSize: 27, paddingTop: 5, fontWeight: 'bold'}}>{props.text}</Typography>
                <Tooltip title={props.title} style={{margin: 10}} onClick={() => OpenSocial(`${props.link}`)}>
                    <img className='icon' src={props.icon} style={{height: `${props.iconHeight}`, width: `${props.iconWidth}`}}/>
                </Tooltip>
            </div>
            <CardContent style={{margin: 10, padding: 10}}>
                    <img
                        className='skill-image'
                        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', height: 285, width: `${props.width}`}}
                        src={props.image}
                        title={props.title}
                        />
                    <CardContent>
                        <Typography variant='h6' align={'center'} style={{fontSize: 17, fontStyle: 'italic'}}>{props.text2}</Typography>
                        <TransitionsModal achievements={props.achievements} technology={props.technology} description={props.description} popup={props.popup} imageHeight={props.imageHeight} imageWidth={props.imageWidth} text={props.text}/>
                    </CardContent>
            </CardContent>
        </div>
    )
}

function OpenSocial(url: any) {
    const win = window.open(url)
    win!.focus()
}
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      margin: 20
    },
  }));
  
  function TransitionsModal(props: any) {
      // for the popover for each project
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const tech = props.technology
    const {achievements} = props
    return (
      <div className='flex-container'>
        <Button variant="contained" color="secondary" onClick={handleOpen} style={{marginTop: 10, width: 200, borderRadius: 10, height: 40, fontSize: 17}}>
        Details
      </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={open}>
            <div className={classes.paper} style={{height: 400}}>
            <Typography align={'center'} style={{fontSize: 35, fontWeight: 'bold', marginBottom: 10}}>{props.text}</Typography>
              <img src={props.popup} className='project-image'
                 style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', height: `${props.imageHeight}`, width: `${props.imageWidth}`, borderColor: 'black'}}
              />
            <Typography align={'center'} style={{fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 5}}>Details</Typography>
            <Typography align={'center'} variant='body1' style={{marginLeft: 20, marginRight: 20}}>{props.description}</Typography>
            <Typography align={'center'} style={{fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 5}}>Technology Used</Typography>
            {tech.map((item: string) => (
                            <li style={{fontSize: 17, marginTop: 7, marginLeft: 10}}>{item}</li>
                        ))}
             {props.achievements != null? <div>
                <Typography align={'center'} style={{fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 5}}>Achievements</Typography>
                {achievements.map((item: string) => (
                            <li style={{fontSize: 17, marginTop: 7, marginLeft: 10}}>{item}</li>
                        ))}
            </div>: <div></div>}
            </div>
          </Fade>
        </Dialog>
      </div>
    );
}

export default Projects;