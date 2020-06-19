import React from "react";
import LogoArea from "./LogoArea";
import Navigation from "./Navigation";
import AppBar from "@material-ui/core/AppBar";
import "./Header.css"


export default function Header() {

    return (
        <AppBar className={"headerStyle"} position={"static"}>
            <LogoArea/>
            <Navigation/>
        </AppBar>
    );
}