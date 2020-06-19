import React from "react";
import Grid from "@material-ui/core/Grid";

export default function LogoArea(){
    return(
        <Grid container direction="row" justify="space-around" alignItems="flex-start">
            <Grid item xs={2}>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71iXP+-teoL.png" alt="Smiley" width="100%"/>
            </Grid>
            <Grid item xs={10}>
                <h1>
                    Header Up!
                </h1>
            </Grid>
        </Grid>
    );
}