import React from "react";
import AppBar from "@material-ui/core/AppBar";
import LogoArea from "./Header/LogoArea";
import Navigation from "./Header/Navigation";

export default function Header() {
    return (
        <AppBar>
            <LogoArea/>
            <Navigation />
        </AppBar>
    )
}