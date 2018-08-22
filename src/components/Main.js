import React from 'react';
import { Profile } from "./Profile";
import { ShotChart } from "./ShotChart";

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Profile />
                <ShotChart />
            </div>
        );
    }
}