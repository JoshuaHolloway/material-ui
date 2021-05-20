import React from 'react';
import { render } from 'react-dom';
import './styles.scss'; // parcel installs dependency for this if not explicity listed in devDependencies

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

// React Components map props into elements
function HelloWorld(props) {
  return (
    <div>
      <Container maxWidth="xs"
        style={{backgroundColor: "blue"}}
      >
        <h1>X</h1>
      </Container>

      <Container fixed
        style={{backgroundColor: "blue"}}
      >
        <h1>Y</h1>
      </Container>


      <Grid container spacing={0} style={{border: 'dashed indigo 2px'}}>
        <Grid item xs={12}>
          <p style={{backgroundColor: 'lightgreen'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
        </Grid>

        <Grid item>
          <p style={{backgroundColor: 'lightgreen'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, eos?</p>
        </Grid>
      </Grid>


      <Grid 
        container 
        direction="column"
        justify="center"
        alignItems="stretch"
        style={{border: 'dashed indigo 2px'}}
      >
        <Grid item>
          <p style={{backgroundColor: 'lightblue', border: 'solid black 1px'}}>One</p>
        </Grid>

        <Grid item>
          <p style={{backgroundColor: 'lightblue', border: 'solid black 1px'}}>Two</p>
        </Grid>
      </Grid>


      <Grid 
        container 
        direction="column"
        justify="space-evenly"
        alignItems="center"
        style={{border: 'dashed indigo 2px'}}
      >
        <Grid item>
          <p style={{backgroundColor: 'deeppink', border: 'solid black 1px'}}>One</p>
        </Grid>

        <Grid item>
          <p style={{backgroundColor: 'deeppink', border: 'solid black 1px'}}>Two</p>
        </Grid>
      </Grid>

    </div>
  );
}

render(
  <HelloWorld />,                   // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);