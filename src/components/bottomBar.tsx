import React from 'react'
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

export default function BottomBar() {
    return (
        <div>
            <div style={{backgroundColor: '#022169', marginTop: 20}}>
                <Typography align={'center'} className='bottom-text' style={{color: 'white', fontWeight: 'bold', paddingTop: 6}}>Created by Alfonso Velasco | alfonsoluisvelasco@gmail.com</Typography>
            </div>
        </div>
    )
}
