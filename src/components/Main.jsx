import React, {useEffect, useState} from "react";
import "./Main.css";
import {Route, Switch} from "react-router";
import RandomJoke from "../Pages/RandomJoke";
import TenJokes from "../Pages/TenJokes";


export default function Main() {

    const [joke, setJoke] = useState();

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data => setJoke(data))
    }, []);

    return (
        <main className={"Main"}>
            <Switch>
                <Route path={"/random"}>
                    <h3>Random Joke</h3>
                    <RandomJoke />
                </Route>
                <Route path={"/randomten"}>
                    <h3>Ten Random Jokes</h3>
                    <TenJokes/>
                </Route>
                <Route path={"/"}>
                    <p>Joke incoming!</p>
                </Route>
            </Switch>
        </main>
    );
}
