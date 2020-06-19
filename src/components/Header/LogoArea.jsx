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

            <Grid item xs={2}>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71iXP+-teoL.png" alt="" width={"100%"}/>
            </Grid>
            <Grid item xs={10}>
                Text
            </Grid>
        </Grid>
    )


}