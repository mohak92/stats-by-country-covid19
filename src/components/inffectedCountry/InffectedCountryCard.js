import React from "react";
import { Card, CardHeader, Avatar, CardContent, Grid } from "@material-ui/core";

export default function InffectedCountryCard({
  urlFlag,
  country_name,
  cases,
  deaths,
  total_recovered,
}) {
  if (!country_name) {
    return null;
  }
  return (
    <Card>
      <CardHeader avatar={<Avatar src={urlFlag} />} title={country_name} />
      <CardContent>
        <Grid style={{ textAlign: "center" }} container>
          <Grid
            style={{ borderRight: "solid #0E5077" }}
            sm={4}
            xs={4}
            lg={4}
            item
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span>{cases}</span>
              <span>Cases</span>
            </div>
          </Grid>
          <Grid
            style={{ borderRight: "solid #0E5077" }}
            sm={4}
            xs={4}
            lg={4}
            item
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span>{deaths}</span>
              <span>Deaths</span>
            </div>
          </Grid>
          <Grid sm={4} xs={4} lg={4} item>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span>{total_recovered}</span>
              <span>Total Recovered</span>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
