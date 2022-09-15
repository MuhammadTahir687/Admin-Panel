import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { ListItemIcon } from '@material-ui/core';
import { List } from "@mui/material";

export const SideBar = () => {

    const navData = [
        { title: "Dashboard", link: "/", tabindex: "1", icon: <HomeIcon /> },
        { title: "Project", link: "/project", tabindex: "2", icon: <ElectricBoltIcon /> },
        { title: "Profile", link: "/profile", tabindex: "3", icon: <PersonIcon /> },
        { title: "Board", link: "/board", tabindex: "4", icon: <LeaderboardIcon /> },
    ]
    return (
        <div class="main-constainer">
            <div className="avatar-conatiner">
                <div>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56, backgroundColor: 'rgb(32, 77, 224)' }}
                    />
                </div>
                <div className="avatar-content">
                    <h3> Muhammad Tahir</h3>
                    <p>mtahirvcs@gmail.com</p>
                </div>
            </div>

            {navData.map((item, index) => (
                <div className="content" key={index} tabindex="1"  >
                    <div className="icon">{item.icon}</div>
                    <Link className="link" to={item.link}>{item.title}</Link>   
                </div>
            ))}


        </div>
    )
}