import React, { useState } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

const Year = props => {
    return (
        <AppBar position="static" justify="center">
            <Toolbar style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant="h6">
                    {props.year}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => {
    return {
        year: state.year
    }
}

export default connect(mapStateToProps, null)(Year)