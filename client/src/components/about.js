import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

export default function About(props) {
    return (
        <div className="about-page-container">
            <h2 className="about-header">Welcome to Fantasy Congress</h2>
            <p className="intro-onboarding-text">
                The way the mainstream media covers elections in the era of Twitter and Trump leads to the casual observers only hearing about the loudest and most outspoken members of either party. The Fantasy Congress 2018 App is designed to challenge everyone to get past the noise and dig into the data and narratives of lesser known races around the country and find the candidates destined to outperform expectations on Election Day 2018.
            </p>
            <p className="intro-onboarding-text">
                Operating under a similar model to Daily Fantasy Sports, once you make an account will be given $200 of fantasy money to allocate however you choose in order to fill your roster that must be comprised of 4 Senate Candidates and 8 House Candidates. The individual candidates will be priced based on their projected success, so you won't be able to fill a team with 10 candidates running unopposed. Instead you have to look at races across the country in order to put together the team that is going to preform the best on Election Day given your fantasy financial constraints. And then you wait to see how you did when the votes come in, because the scoring is simple, 1% of the electorate is worth 1 point. The most points after all the votes are tallied wins.
            </p>
            <p className="intro-onboarding-text">
                As you look to put together your team, you can search for a specific candidate, or filter the candidate list by various constraints (party, chamber, state, incumbent, price, or affordability) to limit the scope of your search. Feel free to put together the team however you like, perhaps filling it with badass women you hope will take congress by storm, or maybe some longshots looking to upset the establishment (Randy Bryce, perhaps?). 
            </p>
            <p className="intro-onboarding-text">
                The choice is yours. The only thing that matters is that you put together a team. It's so easy -- with just one click you can add a candidate to your team. If however a team becomes too expensive you can also easily drop a candidate from your team with just one click. Once you have a full team all you have to do is wait for November 6th, 2018 to come around and see how you did. <Link to="/register">Register today</Link>!
            </p>
        </div>
    );
}
