import React from "react"
import "./JokeCard.css"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    media: {
        height: 140,
    },
});

export default function JokeCard(props) {
    const classes = useStyles();
    return (
        <Card>
        <CardMedia
            className={classes.media}
            image="https://cdn.pixabay.com/photo/2015/09/08/17/35/man-930397_960_720.jpg"
            title="Contemplative Reptile"
        />
    <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Funny funny joke
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Setup: {props.joke.setup}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Punchline: {props.joke.punchline}
        </Typography>
    </CardContent>
        </Card>
    );
}