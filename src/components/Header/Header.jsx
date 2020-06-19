import React from "react";
import AppBar from "@material-ui/core/AppBar";
import LogoArea from "./LogoArea";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <AppBar>
            <LogoArea/>
            <Navigation />
        </AppBar>
    )
}