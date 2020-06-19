import React, {useEffect, useState} from "react";
import "./Main.css";
import JokeCard from "./Card/JokeCard";


export default function Main(){

    const [joke, setJoke] = useState();

    useEffect(()=> {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data=>setJoke(data))}, []);

    return(
        <main className={"Main"}>
            {joke && <JokeCard joke={joke}></JokeCard>}
        </main>
    );
}
