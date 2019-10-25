import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

}));

function App() {
   const classes = useStyles();
   const [query, setQuery] = useState("");
   const [difficulty, setDifficulty] = useState("");
   const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

   const handleDateChange = date => {
    setSelectedDate(date);
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Current search: {query} </p>
         <form className={classes.container} noValidate autoComplete="off">
              <TextField
              id="standard-search"
              label="Search field"
              type="search"
              className={classes.textField}
              margin="normal"
              onKeyPress={(ev) => {

              if (ev.key === 'Enter') {
                let arr = [];
                // Do code here
                setQuery(ev.target.value);
                setDifficulty(ev.target.value);
                let count = 0;
                let limit=0;
                ev.preventDefault();
                while (count < 10 && limit<50) {
                  limit++;
                  fetch('http://jservice.io/api/random?count=3')
                  .then(res => res.json())
                  .then((data) => {
                  for (let i = 0; i < 3; i++) {
                    if (data[i]['question'].includes(query) && arr.indexOf(query) > -1) {
                      count++;
                      arr.push(data[i]);
                      console.log(data[i]);

                    }
                  }
                }
                )
        .catch(console.log)

              }
              }}}

            />

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="difficultySelect">Difficulty</InputLabel>
              <Select
                value={difficulty}
                onChange={(ev) => {setDifficulty(ev.target.value);
                  console.log(difficulty)}}
                inputProps={{
                  name: 'difficulty',
                  id: 'difficulty-helper',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={0}>Any difficulty</MenuItem>
                <MenuItem value={200}>200</MenuItem>
                <MenuItem value={400}>400</MenuItem>
                <MenuItem value={600}>600</MenuItem>
                <MenuItem value={800}>800</MenuItem>
                <MenuItem value={1000}>1000</MenuItem>
                </Select>
              </FormControl>
              />

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
              />
              </Grid>
              </MuiPickersUtilsProvider>

         </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
