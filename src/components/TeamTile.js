import React from 'react';
import { Link } from 'react-router-dom';
import './TeamTile.css';
import CSK from '../media/csk.jpg';
import GT from '../media/gt.jpg';
import KKR from '../media/kkr.jpg';
import MI from '../media/mi.jpg';
import SRH from '../media/srh.jpg';
import RPSJ from '../media/rpsj.jpg';
import PK from '../media/punjabkings.jpg';
import deccan from '../media/DeccanChargers.jpeg';
import PW from '../media/pw.jpeg';
import RR from '../media/rr.jpeg';
import RCB from '../media/rcb.jpeg';
import DC from '../media/delhicapitals.jpeg';
import GL from '../media/gujaratlions.jpeg';
import KTK from '../media/kochi.jpeg';
import KXIP from '../media/kxip.jpeg';
// import KXIP2 from '../media/kxip.jpg'; 
import LSG from '../media/lsg.png';

export const TeamTile = ({ teamName }) => {
    let backgroundImageUrl = '';
    if (teamName === 'Rising pune Supergiant') backgroundImageUrl = RPSJ;
    if (teamName === 'Mumbai Indians') backgroundImageUrl = MI;
    if (teamName === 'Pune Warriors') backgroundImageUrl = PW;
    if (teamName === 'Sunrisers Hyderabad') backgroundImageUrl = SRH;
    if (teamName === 'Gujarat Titans') backgroundImageUrl = GT;
    if (teamName === 'Lucknow Super Giants') backgroundImageUrl = LSG;
    if (teamName === 'Rajasthan Royals') backgroundImageUrl = RR;
    if (teamName === 'Kolkata Knight Riders') backgroundImageUrl = KKR;
    if (teamName === 'Royal Challengers Bangalore') backgroundImageUrl = RCB;
    if (teamName === 'Gujarat Lions') backgroundImageUrl = GL;
    if (teamName === 'Punjab Kings') backgroundImageUrl = PK;
    if (teamName === 'Rising Pune Supergiant' || teamName === 'Rising Pune Supergiants') backgroundImageUrl = RPSJ;
    if (teamName === 'Kochi Tuskers Kerala') backgroundImageUrl = KTK;
    if (teamName === 'Delhi Capitals') backgroundImageUrl = DC;
    if (teamName === 'Kings XI Punjab') backgroundImageUrl = KXIP;
    if (teamName === 'Deccan Chargers') backgroundImageUrl = deccan;
    if (teamName === 'Chennai Super Kings') backgroundImageUrl = CSK;


    return (
        <Link to={`/teams/${teamName}`} className="TeamTile" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
            {/* <h1>
                <Link to={`/teams/${teamName}`}>
                    {teamName}
                </Link>
            </h1> */}
        </Link>
    );
};
