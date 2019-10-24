import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

         <form className={classes.container} noValidate autoComplete="off">
              <TextField
              id="standard-search"
              label="Search field"
              type="search"
              className={classes.textField}
              margin="normal"
              onKeyPress={(ev) => {
              
              if (ev.key === 'Enter') {
                // Do code here
                console.log("success");
                ev.preventDefault();
              }
              }}
            />

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
