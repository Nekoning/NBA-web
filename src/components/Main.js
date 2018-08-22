import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile";
import { ShotChart } from "./ShotChart";

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer("Stephen Curry").playerId,
        playerInfo: {}
    }

    componentDidMount() {
        const playerId = nba.findPlayer("Stephen Curry").playerId;
        nba.stats.playerInfo({ PlayerID: playerId }).then((response) => {
            const playerInfo = Object.assign({}, response.commonPlayerInfo[0], response.playerHeadlineStats[0]);

            this.setState({
                playerInfo
            });

        })

    }

    render() {
        return (
            <div className="main">
                <Profile />
                <ShotChart playerId={this.state.playerId}/>
            </div>
        );
    }
}