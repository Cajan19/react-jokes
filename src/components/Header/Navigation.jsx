import {Button, Menu, MenuItem} from "@material-ui/core";
import React from "react";
import "./Navigation.css";
import {Link} from "react-router-dom";


export default function Navigation() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={"buttonMenu"}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to={"/"}>Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/random"}>RandomJoke</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"randomten"}>Overload</Link>
                </MenuItem>

            </Menu>
        </div>
    );
}