import React from "react";
import "./Main.css";
import {Route, Switch} from "react-router";
import RandomJoke from "../Pages/RandomJoke";
import TenJokes from "../Pages/TenJokes";


export default function Main() {


    return (
        <main className={"Main"}>
            <Switch>
                <Route exact path={"/random"}>
                    <h3>Random Joke</h3>
                    <RandomJoke />
                </Route>
                <Route excat path={"/randomten"}>
                    <h3>Ten Random Jokes</h3>
                    <TenJokes/>
                </Route>
                <Route exact path={"/"}>
                    <p>Joke incoming!</p>
                </Route>
            </Switch>
        </main>
    );
}
