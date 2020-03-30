import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import Year from './Year'
import Month from './Month'
import Date1 from './Date'

import useEventListener from '@use-it/event-listener'
import { Grid } from '@material-ui/core'

const YEARDOWN_KEYS = ['38', 'ArrowUp'];
const YEARUP_KEYS = ['40', 'ArrowDown']
const MONTHDOWN_KEYS = ['37', 'ArrowLeft']
const MONTHUP_KEYS = ['39', 'ArrowRight']
const F1KEY = ['112', 'F1']
const F2KEY = ['113', 'F2']
const F3KEY = ['114', 'F3']
const F4KEY = ['115', 'F4']
const F5KEY = ['116', 'F5']
const F6KEY = ['117', 'F6']
const F7KEY = ['118', 'F7']
const F8KEY = ['119', 'F8']
const F9KEY = ['120', 'F9']
const F10KEY = ['121', 'F10']
const F11KEY = ['122', 'F11']
const F12KEY = ['123', 'F12']


const Calendar = props => {

    function handler({ key }) {
        if (YEARDOWN_KEYS.includes(String(key))) {
            props.handleYearChange(props.year - 1)
        }
        if (YEARUP_KEYS.includes(String(key))) {
            props.handleYearChange(props.year + 1)
        }
        if (MONTHDOWN_KEYS.includes(String(key))) {
            if (props.month - 1 < 0) {
                props.handleYearChange(props.year - 1)
                props.handleMonthChange(11)
            }
            else
                props.handleMonthChange(props.month - 1)
        }
        if (MONTHUP_KEYS.includes(String(key))) {
            if (props.month + 1 > 11) {
                props.handleYearChange(props.year + 1)
                props.handleMonthChange(0)
            }
            else
                props.handleMonthChange(props.month + 1)
        }
        if (F1KEY.includes(String(key))) {
            props.handleMonthChange(0)
        }
        if (F2KEY.includes(String(key))) {
            props.handleMonthChange(1)
        }
        if (F3KEY.includes(String(key))) {
            props.handleMonthChange(2)
        }
        if (F4KEY.includes(String(key))) {
            props.handleMonthChange(3)
        }
        if (F5KEY.includes(String(key))) {
            props.handleMonthChange(4)
        }
        if (F6KEY.includes(String(key))) {
            props.handleMonthChange(5)
        }
        if (F7KEY.includes(String(key))) {
            props.handleMonthChange(6)
        }
        if (F8KEY.includes(String(key))) {
            props.handleMonthChange(7)
        }
        if (F9KEY.includes(String(key))) {
            props.handleMonthChange(8)
        }
        if (F10KEY.includes(String(key))) {
            props.handleMonthChange(9)
        }
        if (F11KEY.includes(String(key))) {
            props.handleMonthChange(10)
        }
        if (F12KEY.includes(String(key))) {
            props.handleMonthChange(11)
        }


    }

    useEventListener('keydown', handler)

    return (
        <Grid container >
            <Year />
            <Month />
            <Date1 key={props.year + props.month} />
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        date: state.date,
        month: state.month,
        year: state.year
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleDateChange: (date) => dispatch({ type: 'UPDATE_DATE', date: date }),
        handleMonthChange: (month) => dispatch({ type: 'UPDATE_MONTH', month: month }),
        handleYearChange: (year) => dispatch({ type: 'UPDATE_YEAR', year: year })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)