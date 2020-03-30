import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import {
    Grid, Table, TableCell, TableContainer,
    TableBody, TableHead, TableRow, makeStyles
}
    from '@material-ui/core'

const columns = [
    { id: 'mon', label: 'Mon', index: 0 },
    { id: 'tue', label: 'Tue', index: 1 },
    { id: 'wed', label: 'Wed', index: 2 },
    { id: 'thu', label: 'Thu', index: 3 },
    { id: 'fri', label: 'Fri', index: 4 },
    { id: 'sat', label: 'Sat', index: 5 },
    { id: 'sun', label: 'Sun', index: 6 },
]

let dateArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        marginTop: '10px'
    },
    centerAlign: {
        textAlign: 'center'
    }
});


const Date1 = props => {
    const classes = useStyles();
    let count = 0
    const [dateArray, setDateArray] = useState(dateArray1)
    const [rowCount, setRowCount] = useState(6)

    useEffect(() => {
        let newDateArray = [...dateArray]
        let count = 0
        const firstDay = (new Date(props.year, props.month, 1)).getDay()
        const lastDate = (new Date(props.year, props.month + 1, 0)).getDate()

        if (firstDay === 0) {
            count = 6
        } else {
            count = firstDay - 1
        }

        let arr = new Array(count).fill()
        newDateArray.splice(newDateArray.indexOf(lastDate) + 1)
        newDateArray = arr.concat(newDateArray)
        setDateArray(newDateArray)
        setRowCount(parseInt(newDateArray.length / 7) + 1)
    }, [])

    return (
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead key="table_head123">
                    <TableRow key="table_headings123">
                        {columns.map(column => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                className={classes.centerAlign}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody key="table_body123">
                    {
                        [...Array(rowCount)].map((a, i) => {
                            return (
                                <TableRow key={i}>
                                    {[...Array(7)].map((arr, index) => {
                                        if (dateArray[count] === props.date && props.month === (new Date()).getMonth() && props.year === (new Date()).getFullYear()) {
                                            return (
                                                <TableCell
                                                    key={dateArray[count] + 'index' + index}
                                                    style={{
                                                        textAlign: 'center',
                                                        background: '#f50057',
                                                        color: 'white',
                                                        fontWeight: 'bolder'
                                                    }}
                                                >
                                                    {dateArray[count++]}
                                                </TableCell>
                                            )
                                        }
                                        else {
                                            return (
                                                <TableCell
                                                    key={dateArray[count] + 'index' + index}
                                                    style={{ textAlign: 'center' }}
                                                >
                                                    {dateArray[count++]}
                                                </TableCell>
                                            )
                                        }
                                    })
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = state => {
    return {
        date: state.date,
        month: state.month,
        year: state.year
    }
}

export default connect(mapStateToProps, null)(Date1)