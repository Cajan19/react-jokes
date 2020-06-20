import React, {useEffect, useState} from "react";
import JokeCard from "../components/Card/JokeCard";

export default function RandomJoke() {

    const [joke, setJoke] = useState();

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data => setJoke(data))
    }, []);

    return (
        <>
            {joke && <JokeCard key={joke.id} joke={joke}></JokeCard>}
        </>
    )

}