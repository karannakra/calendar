import React, { useState } from 'react';
import './App.css';

import Calendar from './Calendar/Calendar'
import { Button, Grid } from '@material-ui/core'

import useEventListener from '@use-it/event-listener'

const SHOWCALENDAR_KEYS = ['65', 'A', 'a']

const App = props => {
  const [showCalendar, setShowCalendar] = useState(false)

  function handler({ key }) {
    if (SHOWCALENDAR_KEYS.includes(String(key))) {
      setShowCalendar(true)
    }
    if (SHOWCALENDAR_KEYS.includes(String(key)) && showCalendar) {
      setShowCalendar(false)
    }
  }

  useEventListener('keydown', handler)


  return (
    <div className="App">
      {
        showCalendar ?
          <Calendar />
          :
          <Grid container
            style={{
              height: '100vh',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button variant="contained" color="secondary">
              Press A To Open Calendar
          </Button>
          </Grid>
      }
    </div>
  );
}

export default App