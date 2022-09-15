import React from "react";
import './dashboard.css';
import { Assignment, Today, Notifications, Email } from '@material-ui/icons';
import Chart from 'react-apexcharts'
import { Mixed_Chart_Data } from "../../Components/Charts/MixedChart";
import { yellow } from "@material-ui/core/colors";
import { Polar_Chart } from "../../Components/Charts/PolarChart";
export const Dashboard = () => {
    const cardData = [

        { title: "Notification", subtitle: "5 unread notification", icon: <Notifications />, color: '#FFF8EB', avatar: '#FFC627' },
        { title: "Message", subtitle: "5 unread notification", icon: <Email />, color: '#E6F8EB', avatar: '#19994D' },
        { title: "Calendar", subtitle: "5 unread notification", icon: <Today />, color: '#ECE8FF', avatar: '#4A30F8' },
        { title: "Board", subtitle: "5 unread notification", icon: <Assignment />, color: '#F8E6F6', avatar: '#F817DF' }

    ]
    return (
        <div className="main-container-dashbord">
            <h1>Dashboard</h1>
            <div className="card-main-container">
                {cardData.map((item, index) => (
                    <div className="card-container" style={{ backgroundColor: item.color }} key={index}>
                        <div className="icon-container" style={{ backgroundColor: item.avatar }}>{item.icon}</div>
                        <div className="card">
                            <h3>{item.title}</h3>
                            <p style={{ color: item.avatar }}>{item.subtitle}</p>
                        </div>

                    </div>
                ))}
            </div>

            <div className="mix-chart-container">
                <Chart options={Mixed_Chart_Data.options} series={Mixed_Chart_Data.series} type="line" height={350} />
                <Chart options={Polar_Chart.options} series={Polar_Chart.series} type="polarArea" height={350} />
            </div>


        </div>

    )
}