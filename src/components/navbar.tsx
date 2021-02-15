import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'
import Link from '@material-ui/core/Link';
import Popover from "@material-ui/core/Popover";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function NavBar() {
    const classes = useStyles()
    const history = useHistory()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [aboutActive, setAboutActive] = useState(false)
    const [projectActive, setProjectsActive] = useState(false)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <AppBar className={classes.root} style={{backgroundColor: '#0B0C10', position: 'absolute', height: '8%'}}>
            <Toolbar>
                <Typography className='header-name' variant='h5' style={{color: 'white', fontWeight: 'bold', paddingLeft: 60, fontFamily: 'Montserrat'}} onClick={() => { history.push('/'); setAboutActive(false); setProjectsActive(false)} }>ALFONSO VELASCO</Typography>
                <div className='art-nav'>
                    <div className='art-mobile' >
                    <IconButton style={{ color: "white" }} onClick={handleClick}>
                         <MenuIcon style={{ fontSize: 40 }} />
                    </IconButton>
                    </div>
                    <div className='art-nav-items'>
                    <Link
                    component="button"
                    variant="body2"
                    style={{color: aboutActive? 'white' : '#828282', fontWeight: 'bold', fontSize: 16, paddingLeft: 500, fontFamily: 'Montserrat'}}
                    onClick={() => {
                        history.push('/about')
                        setAboutActive(true)
                        setProjectsActive(false)
                }}
                >
                    ABOUT
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    style={{color: projectActive? 'white': '#828282', fontWeight: 'bold', fontSize: 16, paddingLeft: 25, fontFamily: 'Montserrat'}}
                    onClick={() => {
                        history.push('/projects')
                        setProjectsActive(true)
                        setAboutActive(false)
                    }}
                >
                    PROJECTS
                </Link>
                    </div>
                    <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
          >
                    <ClickAwayListener onClickAway={handleClose}>
                        <div className="art-mobile-items">
                        <Link
                    component="button"
                    variant="body2"
                    style={{color: '#828282', fontWeight: 'bold', fontSize: 16}}
                    onClick={() => {
                        history.push('/about')
                }}
                >
                    ABOUT
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    style={{color: '#828282', fontWeight: 'bold', fontSize: 16, paddingTop: 10}}
                    onClick={() => {
                        history.push('/projects')
                    }}
                >
                    PROJECTS
                </Link>
                        </div>
                        </ClickAwayListener>
                    </Popover>
                </div>
            </Toolbar>
        </AppBar>
    )
}