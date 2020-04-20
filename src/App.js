import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import InffectedCountryMap from './components/inffectedCountry/InffectedCountryMap';

function App() {
  return (
    <Grid container>
      <Grid style={{ height: '100vh' }} lg={6} sm={12} item>
        <InffectedCountryMap/>
      </Grid>
    </Grid>
  );
}

export default App;
