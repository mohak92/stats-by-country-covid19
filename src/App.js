import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import InffectedCountryList from './components/inffectedCountry/InffectedCountryList';
import InffectedCountryMap from './components/inffectedCountry/InffectedCountryMap';

function App() {
  return (
    <Grid container>
      <Grid style={{ height: '100vh', overflowY: 'auto' }} lg={6} sm={12} item>
        <InffectedCountryList/>
      </Grid>
      <Grid style={{ height: '100vh' }} lg={6} sm={12} item>
        <InffectedCountryMap/>
      </Grid>
    </Grid>
  );
}

export default App;
