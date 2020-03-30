import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Grid, makeStyles } from '@material-ui/core'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const useStyles = makeStyles({

    month: {
        fontSize: '2rem',
        boxShadow: '2px 2px 4px 4px #ccc',
        padding: '10px',
    }
})

const Month = props => {
    const classes = useStyles()
    return (
        <Grid container justify="center"
            className={classes.month}
        >
            {monthNames[props.month]}
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        month: state.month
    }
}

export default connect(mapStateToProps, null)(Month)