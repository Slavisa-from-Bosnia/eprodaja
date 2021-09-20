import React from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../utils/styles'
import { mergeClasses } from '@material-ui/styles';

export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
            <Head >
                <title>eprodaja</title>
            </Head>
            <AppBar className = {classes.navbar}>
                <Toolbar>
                    <Typography>
                        EPRODAJA
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className = {classes.main}>
                {children}
            </Container>
            <footer className = {classes.footer}>
                <Typography>
                    Sva prava zadržana!
                </Typography>
            </footer>
        </div>
    )
}
