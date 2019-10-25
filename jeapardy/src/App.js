import React, { useState } from 'react';
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
   const [query, setQuery] = useState("");
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
                var count = 0;
                ev.preventDefault();
                while (count < 10) {
                  fetch('http://jservice.io/api/random?count=3')
                  .then(res => res.json())
                  .then((data) => {
                  for (var i = 0; i < 3; i++) {
                    if (data.at(i).at(question).includes(query)) {
                      count++;
                      arr.append(data.at(i));

                    }
                  }
                }
          console.log(data)
        })
        .catch(console.log)

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
