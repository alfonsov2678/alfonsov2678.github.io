import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'
import Link from '@material-ui/core/Link';

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
    return (
        <AppBar className={classes.root} style={{backgroundColor: '#444445', position: 'absolute'}}>
            <Toolbar>
                <Typography variant='h4' style={{color: 'white', fontWeight: 'bold', paddingLeft: 60}} onClick={() => history.push('/')}>ALFONSO VELASCO</Typography>
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
            </Toolbar>
        </AppBar>
    )
}