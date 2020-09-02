import React, { Fragment, useState } from 'react';
import { JsonForms } from '@jsonforms/react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

import './App.css';
import schema from './schema.json';
//import uischema from './uischema.json';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';

const styles = createStyles({
  container: {
    padding: '1em',
  },
  title: {
    textAlign: 'center',
    padding: '0.25em',
  },
  dataContent: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0.25em',
    backgroundColor: '#cecece',
  },
  demoform: {
    margin: 'auto',
    padding: '1rem',
  },
});

export interface AppProps extends WithStyles<typeof styles> {}

const data = {};

const App = ({ classes }: AppProps) => {
  return (
    <Fragment>
      <Grid
        container
        justify={'center'}
        spacing={1}
        className={classes.container}
      >
        <Grid item sm={6}>
          <Typography variant={'h3'} className={classes.title}>
            Rendered form
          </Typography>

          <div className={classes.demoform}>
            <JsonForms
              schema={schema}
              data={data}
              renderers={[
                ...materialRenderers,
                //register custom renderer
              ]}
              cells={materialCells}
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(App);
