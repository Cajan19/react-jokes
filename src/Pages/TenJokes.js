import React, {useEffect, useState} from "react";
import JokeCard from "../components/Card/JokeCard";

export default function TenJokes() {

    const [jokes, setJokes] = useState();

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/jokes/ten")
            .then(response => response.json())
            .then(data => setJokes(data))
    }, []);

    return (
        <>
            {jokes && jokes.map((joke) => (
                <JokeCard key={joke.id} joke={joke}></JokeCard>
            ))}
        </>
    )

}