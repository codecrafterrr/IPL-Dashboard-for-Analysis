import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.css';
export const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();
    useEffect(
        () => {
            const fetchMatches = async () => {
                // const response = await fetch(`http://localhost:8080/team/${teamName}`);
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
                console.log(data);
            };
            fetchMatches();

        }, [teamName]
    );
    if (!team || !team.teamName) {
        return <h1>Team not found</h1>
    }
    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="win-loss-section">
                <PieChart className='pie'
                    data={[
                        { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#c33851' },
                        { title: 'Wins', value: team.totalWins, color: '#23fb88' },
                    ]}
                />
                Wins / Losses Chart
            </div>
            <div className="match-detail-section">
                <h1 className='latest' >Latest Matches</h1>
                <div className='detail-card'>
                    <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
                </div>
            </div>
            {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />)}
            <div className="more-link">
                <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}><span className='sp-an'>More &gt;&gt;</span></Link>
            </div>
        </div>
    );
}