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

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
    return (
        <AppBar className={classes.root} style={{backgroundColor: '#444445', position: 'absolute'}}>
            <Toolbar>
                <Typography variant='h4' style={{color: 'white', fontWeight: 'bold', paddingLeft: 60}} onClick={() => history.push('/')}>ALFONSO VELASCO</Typography>
                <div className='art-nav'>
                    <div className='art-mobile'>
                    <IconButton style={{ color: "black" }} onClick={handleClick}>
                         <MenuIcon style={{ fontSize: 40 }} />
                    </IconButton>
                    </div>
                    <div>
                    <Link
                    component="button"
                    variant="body2"
                    style={{color: '#828282', fontWeight: 'bold', fontSize: 16, paddingLeft: 500}}
                    onClick={() => {
                        history.push('/about')
                }}
                >
                    ABOUT
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    style={{color: '#828282', fontWeight: 'bold', fontSize: 16, paddingLeft: 25}}
                    onClick={() => {
                        history.push('/projects')
                    }}
                >
                    PROJECTS
                </Link>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}