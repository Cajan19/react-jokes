import React from "react";
import LogoArea from "./LogoArea";
import Navigation from "./Navigation";
import AppBar from "@material-ui/core/AppBar";


export default function Header() {

    return (
        <AppBar position={"static"}>
            <LogoArea/>
            <Navigation/>
        </AppBar>
    );
}