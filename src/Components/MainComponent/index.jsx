import React from "react";
import "./mainComponent.css";
import { MainRoute } from "../Routes";
import { SideBar } from "../SideBar";


export const MainComponent = () => {
    return (
        <div className="main-container">
            <SideBar />
            <MainRoute />
        </div>

    )
}