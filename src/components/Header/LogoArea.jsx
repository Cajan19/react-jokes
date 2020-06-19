import React from "react";
import {Grid} from "@material-ui/core";

export default function LogoArea() {
    return(
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >

            <Grid item xs={4}>
                Bild
            </Grid>
            <Grid item xs={8}>
                Text
            </Grid>
        </Grid>
    )


}